const {statisticService}=require("../services")

let resolver = {
    getStatisticOfPlayer: async (args) => {
        let {playerId,season,week}=args
        const stat=await statisticService.getStatisticOfPlayer({season: season, week: week, playerId})
        return stat
    },
};

module.exports = resolver
