using System;
using System.Collections.Generic;
using System.Linq;
using Covid19Dashboard.Dtos;

namespace Covid19Dashboard.Services
{
    public class UserService
    {
        private readonly List<User> users = new List<User>
        {
           new User{ Id = 1, Username="hhuber", Role="Admin", Firstname="Hansi", Lastname="Huber", Password="quaxi"},
        };

        public User Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password)) return null;

            var user = users.SingleOrDefault(x => x.Username == username);
            if (user == null) return null; //user does not exist

            return password == user.Password ? user : null;
        }
    }
}
