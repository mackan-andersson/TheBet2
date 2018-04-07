using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheBet.Repositories
{
    public class StageRepository
    {
        public List<Stage> GetAllStages()
        {
            using (var context = new theBetDBEntities())
            {
                var stages = context.Stage.ToList();
                return stages;
            }
        }
    }
}