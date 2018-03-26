using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TheBet.Entities;

namespace TheBet.Controllers
{
    public class BetController : ApiController
    {
        [Route("bet/getTheBet")]
        [HttpPost]
        public TheBetResponse GetTheBet(User user)
        {
            var betService = new TheBet.Services.BetService();
            var theBet = betService.GetTheBet(user);
            return theBet;
        }
    }
}
