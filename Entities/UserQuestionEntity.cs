using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class UserQuestionEntity
    {
        [DataMember(Name = "questions")]
        public List<QuestionEntity> Questions;

        [DataMember(Name = "user")]
        public User User;

        [DataMember(Name = "errorMsg")]
        public string ErrorMsg;

        [DataMember(Name = "exception")]
        public string Exception;

    }
}