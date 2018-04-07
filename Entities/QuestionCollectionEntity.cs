using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class QuestionCollectionEntity
    {
        [DataMember(Name = "questions")]
        public List<QuestionEntity> questions;

        [DataMember(Name = "teams")]
        public List<Team> teams;

        [DataMember(Name = "stages")]
        public List<Stage> stages;

        [DataMember(Name = "errorMsg")]
        public string ErrorMsg;

        [DataMember(Name = "exception")]
        public string Exception;

    }
}