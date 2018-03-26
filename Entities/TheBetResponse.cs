using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class TheBetResponse
    {
        [DataMember(Name = "gameList")]
        public List<GameEntity> gameList;

        [DataMember(Name = "errorMsg")]
        public string ErrorMsg;

        [DataMember(Name = "exception")]
        public string Exception;

    }
}