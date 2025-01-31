﻿using Microsoft.AspNetCore.Http;
using ServiceLayer.DTOs.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services.Interfaces
{
    public interface IAccountService
    {
        Task<LoginInfoDto?> Login(LoginDto model);
        Task<ApiResponse> Register(RegisterDto model,HttpRequest request);
        Task CreateRole(RoleDto model);
        Task<ApiResponse> ConfirmEmail(string userId, string token);

        Task<ApiResponse> ForgetPassword(ForgetPasswordDto forgetPassword, HttpRequest request);
        Task<ApiResponse> ResetPassword(ResetPasswordDto resetPassword);

    }
}
