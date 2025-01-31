﻿using AutoMapper;
using DomainLayer.Entites;
using MailKit.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using ServiceLayer.DTOs.Account;
using ServiceLayer.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using MimeKit.Text;

namespace ServiceLayer.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        private readonly RoleManager<IdentityRole> _roleManager;


        public AccountService(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, IMapper mapper, IConfiguration config)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _config = config;

        }

        public async Task CreateRole(RoleDto model)
        {
            await _roleManager.CreateAsync(new IdentityRole { Name = model.Role });
        }

        public async Task<LoginInfoDto?> Login(LoginDto model)
        {
            var dbUser = await _userManager.FindByEmailAsync(model.Email);
            if (!await _userManager.CheckPasswordAsync(dbUser, model.Password))
            {
                return null;
            }
            if (!dbUser.EmailConfirmed)
                return null;
            var roles = await _userManager.GetRolesAsync(dbUser);
            var token = GenerateJwtToken(dbUser.UserName, (List<string>)roles);
            LoginInfoDto loginInfo = new();
            loginInfo.Token = token;
            loginInfo.UserName = dbUser.UserName;
            return loginInfo;
        }

        public async Task<ApiResponse> Register(RegisterDto model, HttpRequest request)
        {
            var user = _mapper.Map<AppUser>(model);
            var existingUser = await _userManager.FindByEmailAsync(user.Email);
            if (existingUser != null)
            {
                return new ApiResponse { Errors = new List<string> { "A user with the same email already exists." }, StatusMessage = "Failed" };
            }

            IdentityResult result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                ApiResponse response = new()
                {
                    Errors = result.Errors.Select(m => m.Description).ToList(),
                    StatusMessage = "Failed"
                };


                return response;
            }
            var dbUser = await _userManager.FindByEmailAsync(model.Email);
            var confirmEmailRoute = "confirmation";
            //var baseUrl = $"{request.Scheme}://{request.Host}";
            var baseUrl = "http://localhost:3000";
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(dbUser);
            var userId = await _userManager.GetUserIdAsync(dbUser);
            var encodedToken = Uri.EscapeDataString(token);
            var link = $"{baseUrl}/{confirmEmailRoute}?userId={userId}&token={encodedToken}";
            await SendEmailConfirmationEmail(dbUser.Email, link);



            await _userManager.AddToRoleAsync(dbUser, "Member");



            return new ApiResponse { Errors = null, StatusMessage = "Success" };
        }
        private string GenerateJwtToken(string username, List<string> roles)
        {
            var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.NameIdentifier, username)
        };

            roles.ForEach(role =>
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            });

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddMinutes(Convert.ToDouble(_config["Jwt:ExpireMinutes"]));

            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Auidience"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public static async Task SendEmailConfirmationEmail(string email, string link)
        {

            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("Elnur", "elnurazizov2617@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = "Confirm Your Email";
            string path = "wwwroot/EmailTemplate/EmailConfirmLetter.html";
            string htmlContent = File.ReadAllText(path);
            emailMessage.Body = new TextPart(TextFormat.Html)
            {
                Text = htmlContent.Replace("{{link}}", link)
            };

            using var client = new SmtpClient();
            await client.ConnectAsync("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            await client.AuthenticateAsync("elnurazizov2617@gmail.com", "nzgpefxzgttbvnvf");
            await client.SendAsync(emailMessage);
            await client.DisconnectAsync(true);
        }
        public async Task<ApiResponse> ConfirmEmail(string userId, string token)
        {
            AppUser user = await _userManager.FindByIdAsync(userId);
            if (user == null)
                return new ApiResponse
                {
                    Errors = new List<string> { "User not found." },
                    StatusMessage = "Failed"
                };
            var isValidToken = await _userManager.VerifyUserTokenAsync(
        user,
        _userManager.Options.Tokens.EmailConfirmationTokenProvider,
        "EmailConfirmation", 
        token
    );

            if (!isValidToken)
                return new ApiResponse
                {
                    Errors = new List<string> { "Token is invalid or expired." },
                    StatusMessage = "Failed"
                };
            var result = await _userManager.ConfirmEmailAsync(user, token);
            if (!result.Succeeded)
                return new ApiResponse
                {
                    Errors = new List<string> { "Token is wrong" },
                    StatusMessage = "Failed"
                };

            return new ApiResponse { Errors = null, StatusMessage = "Success" };
        }

        public async Task<ApiResponse> ForgetPassword(ForgetPasswordDto forgetPassword, HttpRequest request)
        {
            AppUser dbUser = await _userManager.FindByEmailAsync(forgetPassword.Email);
            if (dbUser == null)
            {
                return new ApiResponse { StatusMessage = "User not found", StatusCode = StatusCodes.Status400BadRequest };
            }

            var baseUrl = "http://localhost:3000";

            var token = await _userManager.GeneratePasswordResetTokenAsync(dbUser);

            var userId = await _userManager.GetUserIdAsync(dbUser);
            var link = $"{baseUrl}/resetPassword?userId={userId}&token={token}";
            await SendEmailConfirmationEmail(dbUser.Email, link);
            return new ApiResponse { StatusMessage = "Password reset email sent", StatusCode = StatusCodes.Status200OK };
        }

        public async Task<ApiResponse> ResetPassword(ResetPasswordDto resetPassword)
        {
            AppUser exsistUser = await _userManager.FindByIdAsync(resetPassword.UserId);

            if (exsistUser == null)
            {
                return new ApiResponse { StatusCode = StatusCodes.Status404NotFound };
            }


            bool checkPassword = await _userManager.VerifyUserTokenAsync(
                exsistUser,
                _userManager.Options.Tokens.PasswordResetTokenProvider,
                "ResetPassword",
                resetPassword.Token);

            if (!checkPassword)
            {
                return new ApiResponse { StatusCode = StatusCodes.Status400BadRequest };
            }

            if (await _userManager.CheckPasswordAsync(exsistUser, resetPassword.Password))
            {

                return new ApiResponse { StatusMessage = "This password is the same as your previous password" };
            }

            var resetPasswordResult = await _userManager.ResetPasswordAsync(exsistUser, resetPassword.Token, resetPassword.Password);
            if (!resetPasswordResult.Succeeded)
            {
                return new ApiResponse { StatusCode = StatusCodes.Status500InternalServerError };
            }

            await _userManager.UpdateSecurityStampAsync(exsistUser);

            return new ApiResponse { StatusCode = StatusCodes.Status200OK };
        }

    }
}
