using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class UserBetEntity
    {
        [DataMember(Name = "games")]
        public List<GameEntity> games;

        [DataMember(Name = "user")]
        public User user;

        [DataMember(Name = "errorMsg")]
        public string ErrorMsg;

        [DataMember(Name = "exception")]
        public string Exception;

    }
}