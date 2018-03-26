using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace TheBet.Entities
{
    [DataContract]
    public class GameEntity
    {
        [DataMember(Name = "gameId")]
        public int GameId;

        [DataMember(Name = "team1Id")]
        public int? Team1Id;

        [DataMember(Name = "team2Id")]
        public int? Team2Id;

        [DataMember(Name = "team1Name")]
        public string Team1Name;

        [DataMember(Name = "team2Name")]
        public string Team2Name;

        [DataMember(Name = "team1Goals")]
        public int? Team1Goals;

        [DataMember(Name = "team2Goals")]
        public int? Team2Goals;

        [DataMember(Name = "gameTime")]
        public DateTime GameTime;

        [DataMember(Name = "openForBet")]
        public bool OpenForBet;

        [DataMember(Name = "stage")]
        public string Stage;

        [DataMember(Name = "userId")]
        public int UserId;

        [DataMember(Name = "userTeam1Goals")]
        public int? UserTeam1Goals;

        [DataMember(Name = "userTeam2Goals")]
        public int? UserTeam2Goals;

    }
}