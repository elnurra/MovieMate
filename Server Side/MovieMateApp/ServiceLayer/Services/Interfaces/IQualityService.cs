﻿using ServiceLayer.DTOs.Account;
using ServiceLayer.DTOs.QualityDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Services.Interfaces
{
    public interface IQualityService
    {
        Task<ApiResponse> Create(QualityCreateDto quality);
        Task<ApiResponse> Update(int id, QualityUpdateDto quality);

        Task<List<QualityListDto>> GetAll();
        Task<QualityListDto> GetOne(int id);
        Task Delete(int id);
        Task SoftDelete(int id);
    }
}
