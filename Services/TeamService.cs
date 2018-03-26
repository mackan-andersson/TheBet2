using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheBet.Repositories;

namespace TheBet.Services
{
    public class TeamService
    {
        private static TeamRepository teamRepository;

        public TeamService()
        {
            teamRepository = new TeamRepository();
        }

        public List<Team> GetAllTeams()
        {
            return teamRepository.GetAllTeams();
        }
    }
}