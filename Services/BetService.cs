using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TheBet.Entities;
using TheBet.Repositories;

namespace TheBet.Services
{
    public class BetService
    {
        private static GameRepository gameRepository;
        private static TeamRepository teamRepository;
        private static UserRepository userRepository;
        public BetService()
        {
            gameRepository = new GameRepository();
            teamRepository = new TeamRepository();
            userRepository = new UserRepository();
        }

        public TheBetResponse GetTheBet(User user)
        {
            try { 
                var games = gameRepository.GetAllGames();
                List<UserBet> userBets = null;
                if (user != null)
                {
                    userBets = userRepository.GetUserBet(user);
                }
                var gameList = new List<GameEntity>();
                foreach(var game in games)
                {
                    var newGame = new GameEntity()
                    {
                        GameId = game.Id,
                        GameTime = game.Date,
                        Team1Id = game.Team1Id,
                        Team2Id = game.Team2Id,
                        Team1Goals = game.Team1Goals,
                        Team2Goals = game.Team2Goals,
                        Team1Name = game.Team1Name,
                        Team2Name = game.Team2Name,
                        OpenForBet = game.OpenForBet,
                        Stage = game.Stage
                    };
                    if(user != null && userBets != null)
                    {
                        newGame.UserId = user.Id;
                        foreach (var userBet in userBets)
                        {
                            if (game.Id == userBet.GameId)
                            {
                                newGame.UserTeam1Goals = userBet.UserTeam1Goals;
                                newGame.UserTeam2Goals = userBet.UserTeam2Goals;
                            }
                        }
                    }
                    

                    gameList.Add(newGame);
                }
                return new TheBetResponse() { gameList = gameList };
            }
            catch (Exception ex)
            {
                return new TheBetResponse() { Exception = ex.InnerException.Message, ErrorMsg = "Error in BetService Get the BEt" };
            }
        }

    }
}