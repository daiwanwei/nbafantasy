let { buildSchema } = require('graphql');

let schema = buildSchema(`
    type Statistic {
        playerId: String!
        season:Int!,
        week:Int!,
        fieldGoalPercentage:Float!,
        freeThrowPercentage:Float!,
        threePointShotsMade:Int!,
        threePointPercentage:Float!,
        pointsScored:Int!,
        offensiveRebounds:Int!,
        totalRebounds:Int!,
        assists:Int!,
        blockedShots:Int!,
        steals:Int!,
        turnovers:Int!,
        assistTurnoverRatio:Float!,
        doubleDoubles:Int!,
    }
    type Query {
        hello: String
        getStatisticOfPlayer(playerId: String!,season:Int!,week:Int!): Statistic!
    }
`);


module.exports=schema
