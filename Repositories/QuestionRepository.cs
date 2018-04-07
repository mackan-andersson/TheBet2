using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TheBet.Repositories
{
    public class QuestionRepository
    {
        public List<Question> GetAllQuestions()
        {
            using (var context = new theBetDBEntities())
            {
                var questions = context.Question.ToList();
                return questions;
            }

        }

    }
}