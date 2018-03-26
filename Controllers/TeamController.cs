using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TheBet.Services;

namespace TheBet.Controllers
{
    public class TeamController : ApiController
    {
        [Route("team/getallteams")]
        [HttpGet]
        public List<Team> GetAllTeams()
        {
            var teamService = new TheBet.Services.TeamService();
            var theList = teamService.GetAllTeams();
            return theList;
        }
    }
}