using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheBet.Entities;
using TheBet.Repositories;

namespace TheBet.Services
{
    public class UserService
    {
        private static UserRepository userRepository;

        public UserService()
        {
            userRepository = new UserRepository();
        }

        public UserResponse Login(User user)
        {
            return userRepository.Get(user);
        }

        public UserResponse Register(User user)
        {
            if (!userRepository.CheckIfUsernameOrEmailExist(user))
            {
                return userRepository.Register(user);
            }
            else
            {
                var userResponse = new UserResponse() { ErrorMsg = "Username or Email does already exist, knowing you, I bet it's both..." };
                return userResponse;
            }
            
        }

    }
}