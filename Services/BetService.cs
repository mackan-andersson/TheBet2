﻿using System;
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
        private static StageRepository stageRepository;
        private static QuestionRepository questionRepository;
        public BetService()
        {
            gameRepository = new GameRepository();
            teamRepository = new TeamRepository();
            userRepository = new UserRepository();
            stageRepository = new StageRepository();
            questionRepository = new QuestionRepository();
    }

        public TheBetEntity GetTheBet(User user)
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
                                newGame.Points = userBet.Points;
                            }
                        }
                    }
                    

                    gameList.Add(newGame);
                }
                return new TheBetEntity() { gameList = gameList };
            }
            catch (Exception ex)
            {
                return new TheBetEntity() { Exception = ex.InnerException.Message, ErrorMsg = "Error in BetService Get the BEt" };
            }
        }


        public TheBetEntity SaveBet(UserBetEntity userBet)
        {
            try
            {
                var games = gameRepository.GetAllGames();
                var gamesToSubmit = userBet.games.Where(x => x.OpenForBet && x.UserTeam1Goals != null && x.UserTeam2Goals != null).ToList();
                if ((gamesToSubmit == null || gamesToSubmit.Count == 0))
                {
                    return new TheBetEntity() { ErrorMsg = "Error in BetService Save the BEt, NO USER INPUT TO SAVE" };
                }
                else if (userBet.user == null || userBet.user.Id <= 0)
                {
                    return new TheBetEntity() { ErrorMsg = "Error in BetService Save the BEt, MISSING USER ID" };
                }

                foreach(var game in gamesToSubmit)
                {
                    foreach(var gameToCheck in games)
                    {
                        if(game.GameId == gameToCheck.Id)
                        {
                            if (!gameToCheck.OpenForBet)
                            {
                                return new TheBetEntity() { ErrorMsg = "Error in BetService Save the BEt, A GAME NOT OPEN FOR BET HAVE BEEN SUBMITTED. GameID = " + gameToCheck.Id };
                            }
                            else
                            {
                                break;
                            }
                        }
                    }
                }

                return userRepository.SaveUserBet(gamesToSubmit, userBet.user.Id);
            }
            catch (Exception ex)
            {
                return new TheBetEntity() { Exception = ex.InnerException.Message, ErrorMsg = "Error in BetService Save the BEt" };
            }
        }

        public QuestionCollectionEntity GetQuestions(User user)
        {
            try
            {
                List<UserQuestionAnswer> userQuestions = null;
                if (user != null)
                {
                    userQuestions = userRepository.GetUserQuestions(user);
                }
                var allQuestions = questionRepository.GetAllQuestions();
                var questionList = new List<QuestionEntity>();
                foreach (var question in allQuestions)
                {
                    var newQuestion = new QuestionEntity()
                    {
                        questionId = question.Id,
                        questionText = question.QuestionText,
                        questionType = question.QuestionType,
                        questionRightAnswer = question.QuestionRightAnswer
                    };
                    if (user != null && userQuestions != null)
                    {
                        newQuestion.userId = user.Id;
                        foreach (var userQuestion in userQuestions)
                        {
                            if (question.Id == userQuestion.QuestionId)
                            {
                                newQuestion.userAnswer = userQuestion.Answer;
                                newQuestion.Points = userQuestion.Points;
                            }
                        }
                    }
                    questionList.Add(newQuestion);
                }
                var stages = stageRepository.GetAllStages();
                var teams = teamRepository.GetAllTeams();
                return new QuestionCollectionEntity() { questions = questionList, stages = stages, teams = teams };
            }
            catch (Exception ex)
            {
                return new QuestionCollectionEntity() { Exception = ex.InnerException.Message, ErrorMsg = "Error in BetService Save the BEt" };
            }
        }

    }
}