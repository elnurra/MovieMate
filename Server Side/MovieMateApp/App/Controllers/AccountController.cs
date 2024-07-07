using Microsoft.AspNetCore.Mvc;
using ServiceLayer.DTOs.Account;
using ServiceLayer.Services.Interfaces;

namespace App.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AccountController(IAccountService accountService, IHttpContextAccessor httpContextAccessor)
        {
            _accountService = accountService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet(Name = "ConfirmEmail")]
        public async Task<ApiResponse> ConfirmEmail(string userId,string token)
        {
            
            return await _accountService.ConfirmEmail(userId,token);
        }

        [HttpPost]
        public async Task<ApiResponse> Register([FromBody] RegisterDto user)
        {
            var request = _httpContextAccessor.HttpContext.Request;
            return await _accountService.Register(user,request);
        }

        [HttpPost]
        public async Task<ApiResponse> ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {

          
          return  await _accountService.ResetPassword(resetPasswordDto);
           
        }

        [HttpPost]
        public async Task<ApiResponse> ForgetPassword(ForgetPasswordDto forgetPassword)
        {
            var request = _httpContextAccessor.HttpContext.Request;
            return await _accountService.ForgetPassword(forgetPassword, request);
        }
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginDto user)
        {
            var result= await _accountService.Login(user);
            if (result == null) return BadRequest();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole([FromBody] RoleDto role)
        {
           await  _accountService.CreateRole(role);
            return Ok();
        }

    }
}
