using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheBet.Entities;

namespace TheBet.Repositories
{
    public class UserRepository
    {
        public UserResponse Get(User user)
        {
            using (var context = new theBetDBEntities())
            {
                var userResponse = new UserResponse();

                try
                {
                    var requestedUser = context.User.Where(u => u.Name.ToLower() == user.Name.ToLower() && u.Password == user.Password).FirstOrDefault();
                    if (requestedUser != null)
                    {
                        userResponse.User = requestedUser;
                        userResponse.User.Password = null;
                    }
                    else
                    {
                        userResponse.ErrorMsg = "Wrong username or password. Probably both...";
                    }
                    
                }
                catch (Exception ex)
                {
                    userResponse.Exception = ex.InnerException.Message;
                    userResponse.ErrorMsg = "Error, invalid username or email. Knowing you, I'll bet it's both";
                }
                return userResponse;
            }
        }

        public UserResponse Register(User user)
        {
            using (var context = new theBetDBEntities())
            {
                var userResponse = new UserResponse();

                try
                {
                    context.User.Add(user);
                    context.SaveChanges();
                    userResponse.User = user;
                    userResponse.User.Password = null;
                }
                catch(Exception ex)
                {
                    userResponse.Exception = ex.InnerException.Message;
                    userResponse.ErrorMsg = "Error, when creating User, dont ask me why...";
                }
                return userResponse;
            }
        }


        public bool CheckIfUsernameOrEmailExist(User user)
        {
            using (var context = new theBetDBEntities())
            {
                var doesExist = false;
                try
                {
                    doesExist = context.User.Any(u => u.Name.ToLower() == user.Name.ToLower() || u.Email.ToLower() == user.Email.ToLower());
                }
                catch (Exception ex)
                {
                    doesExist = false;
                }
                return doesExist;
            }
        }

        public List<UserBet> GetUserBet(User user)
        {
            using (var context = new theBetDBEntities())
            {
                var userBet = context.UserBet.Where(u => u.UserId == user.Id).ToList();
                return userBet;
            }
        }

    }
}