using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class QuestionEntity
    {
        [DataMember(Name = "questionId")]
        public int questionId;

        [DataMember(Name = "questionText")]
        public string questionText;

        [DataMember(Name = "questionType")]
        public string questionType;

        [DataMember(Name = "userId")]
        public int userId;

        [DataMember(Name = "userAnswer")]
        public int? userAnswer;

        [DataMember(Name = "questionRightAnswer")]
        public int? questionRightAnswer;

        [DataMember(Name = "points")]
        public int? Points;

        [DataMember(Name = "errorMsg")]
        public string ErrorMsg;

        [DataMember(Name = "exception")]
        public string Exception;

    }
}