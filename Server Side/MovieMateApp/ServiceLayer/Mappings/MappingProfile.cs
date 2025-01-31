﻿using AutoMapper;
using DomainLayer.Entites;
using ServiceLayer.DTOs.Account;
using ServiceLayer.DTOs.Comment;
using ServiceLayer.DTOs.Contact;
using ServiceLayer.DTOs.Faq;
using ServiceLayer.DTOs.FeatureDto;
using ServiceLayer.DTOs.GenreDto;
using ServiceLayer.DTOs.MovieDto;
using ServiceLayer.DTOs.PricingPlans;
using ServiceLayer.DTOs.PropertyDto;
using ServiceLayer.DTOs.QualityDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Mappings
{
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            CreateMap<ContactCreateDto, Contact>();
            CreateMap<Contact, ContactListDto>();
            CreateMap<ContactUpdateDto, Contact>();
            CreateMap<PricingPlansCreateDto, PricingPlans>();
            CreateMap<PricingPlans, PricingPlansListDto>();
            CreateMap<PricingPlansUpdateDto, PricingPlans>();
            CreateMap<FaqCreateDto, Faq>();
            CreateMap<Faq, FaqListDto>();
            CreateMap<FaqUpdateDto, Faq>();
            CreateMap<MovieCreateDto, Movie>();
            CreateMap<Movie, MovieListDto>();
            CreateMap<MovieListDto, Movie>();
            CreateMap<MovieVideoDto, Movie>();
            CreateMap<Movie, MovieVideoDto>();
            CreateMap<Movie, MoviePageDto>();
            CreateMap<Movie, MovieFilterDto>();
            CreateMap<MovieUpdateDto, Movie>();
            CreateMap<GenreCreateDto, Genre>();
            CreateMap<Genre, GenreListDto>();
            CreateMap<GenreUpdateDto, Genre>();
            CreateMap<QualityCreateDto, Quality>();
            CreateMap<Quality, QualityListDto>();
            CreateMap<QualityUpdateDto, Quality>();
            CreateMap<FeatureCreateDto, Feature>();
            CreateMap<Feature, FeatureListDto>();
            CreateMap<FeatureUpdateDto, Feature>();
            CreateMap<PropertyCreateDto, Property>();
            CreateMap<Property, PropertyListDto>();
            CreateMap <PropertyUpdateDto, Property>();
            CreateMap<CommentCreateDto, Comment>();
            CreateMap<Comment, CommentListDto>();
            CreateMap<Comment,CommentListDto>().ReverseMap();
            CreateMap<PricingPlansListDto, PricingPlans>();
            CreateMap<PricingPlans, PricingPlansListDto>();
            CreateMap<PricingPlansUpdateDto, PricingPlans>();
            CreateMap<RegisterDto, AppUser>();
            CreateMap<LoginDto, AppUser>();


        }
    }
}
