using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheBet.Repositories
{
    public class GameRepository
    {
        public List<Game> GetAllGames()
        {
            using (var context = new theBetDBEntities())
            {
                var games = context.Game.ToList();
                return games;
            }

        }

    }
}