﻿using System;
namespace Covid19Dashboard.Dtos
{
    public class AuthenticationDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Token { get; set; }
    }
}
