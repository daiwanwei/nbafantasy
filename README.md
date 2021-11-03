# nbafantasy

## Table of Contents

* [專案描述](#專案描述)
* [Demo](#Demo)

## 專案描述

### frontend
1. 球員管理(yahoo賽制的球員)(to-do)

### backend
1. 球員每季數據管理

## Demo
### backend
1. swagger文檔:http://statisticapi.daiwanwei.xyz/api-docs
2. graphql:http://statisticapi.daiwanwei.xyz/graphql

#### 測試
##### 測試資料
1. 賽季(season): 2020
2. 週(week): 0
3. 球員ID: 616e9174d5be11b41d975d01

#####graphql測試
```json
{
  getStatisticOfPlayer(playerId:"616e9174d5be11b41d975d01",season:2020,week:0){
      playerId,
      season,
      week,
      fieldGoalPercentage,
      freeThrowPercentage,
      threePointShotsMade,
      threePointPercentage,
      pointsScored,
      offensiveRebounds,
      totalRebounds,
      assists,
      blockedShots,
      steals,
      turnovers,
      assistTurnoverRatio,
      doubleDoubles,
}
```
