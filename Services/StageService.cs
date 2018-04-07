using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheBet.Repositories;

namespace TheBet.Services
{
    public class StageService
    {

        private static StageRepository stageRepository;
        public StageService()
        {
            stageRepository = new StageRepository();
        }

        public List<Stage> GetAllStages()
        {
            return stageRepository.GetAllStages();
        }
    }
}