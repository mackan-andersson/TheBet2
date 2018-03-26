using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TheBet.Entities;

namespace TheBet.Controllers
{
    public class UserController : ApiController
    {
        [Route("user/login")]
        [HttpPost]
        public UserResponse Login(User user)
        {
            var userService = new TheBet.Services.UserService();
            var requestedUser = userService.Login(user);
            return requestedUser;
        }


        [Route("user/register")]
        [HttpPost]
        //public User Register(string username, string password, string email)
        public UserResponse Register(User user)
        {
            var userService = new TheBet.Services.UserService();
            var registeredUser = userService.Register(user);
            return registeredUser;
        }

        
    }
}