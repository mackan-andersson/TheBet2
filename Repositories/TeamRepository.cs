using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheBet.Repositories
{
    public class TeamRepository
    {
        public List<Team> GetAllTeams()
        {
            using (var context = new theBetDBEntities())
            {
                var teams = context.Team.ToList();
                return teams;
            }
        }
    }
}