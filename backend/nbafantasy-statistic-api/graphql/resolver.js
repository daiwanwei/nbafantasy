const {statisticService}=require("../services")

let resolver = {
    getStatisticOfPlayer: async ({playerId,season,week}) => {
        const stat=await statisticService.getStatisticOfPlayer({season: season, week: week, playerId})
        return stat
    },
};

module.exports = resolver
