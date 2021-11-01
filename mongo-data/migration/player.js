/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : nba-fantasy

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 28/10/2021 10:05:32
*/


// ----------------------------
// Collection structure for player
// ----------------------------
db.getCollection("player").drop();
db.createCollection("player");

// ----------------------------
// Documents of player
// ----------------------------
session = db.getMongo().startSession();
// session.startTransaction();
db = session.getDatabase("nba-fantasy");
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d01"),
    name: "LeBron James",
    __v: NumberInt("0"),
    fantasyId: "3704"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d04"),
    name: "Carmelo Anthony",
    __v: NumberInt("0"),
    fantasyId: "3706"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d07"),
    name: "Kyle Korver",
    __v: NumberInt("0"),
    fantasyId: "3754"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d0a"),
    name: "Udonis Haslem",
    __v: NumberInt("0"),
    fantasyId: "3765"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d0d"),
    name: "Dwight Howard",
    __v: NumberInt("0"),
    fantasyId: "3818"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d10"),
    name: "Andre Iguodala",
    __v: NumberInt("0"),
    fantasyId: "3826"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d13"),
    name: "Anderson Varejao",
    __v: NumberInt("0"),
    fantasyId: "3847"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d16"),
    name: "Trevor Ariza",
    __v: NumberInt("0"),
    fantasyId: "3860"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d19"),
    name: "Marvin Williams",
    __v: NumberInt("0"),
    fantasyId: "3928"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9174d5be11b41d975d1c"),
    name: "Chris Paul",
    __v: NumberInt("0"),
    fantasyId: "3930"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d29"),
    name: "Gerald Green",
    __v: NumberInt("0"),
    fantasyId: "3944"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d2c"),
    name: "C.J. Miles",
    __v: NumberInt("0"),
    fantasyId: "3960"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d2f"),
    name: "Ersan Ilyasova",
    __v: NumberInt("0"),
    fantasyId: "3962"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d32"),
    name: "Lou Williams",
    __v: NumberInt("0"),
    fantasyId: "3971"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d35"),
    name: "LaMarcus Aldridge",
    __v: NumberInt("0"),
    fantasyId: "4130"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d38"),
    name: "Rudy Gay",
    __v: NumberInt("0"),
    fantasyId: "4136"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d3b"),
    name: "JJ Redick",
    __v: NumberInt("0"),
    fantasyId: "4139"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d3e"),
    name: "Rajon Rondo",
    __v: NumberInt("0"),
    fantasyId: "4149"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d41"),
    name: "Kyle Lowry",
    __v: NumberInt("0"),
    fantasyId: "4152"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d44"),
    name: "P.J. Tucker",
    __v: NumberInt("0"),
    fantasyId: "4163"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d47"),
    name: "Paul Millsap",
    __v: NumberInt("0"),
    fantasyId: "4175"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d4a"),
    name: "Kevin Durant",
    __v: NumberInt("0"),
    fantasyId: "4244"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d4d"),
    name: "Al Horford",
    __v: NumberInt("0"),
    fantasyId: "4245"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d50"),
    name: "Mike Conley",
    __v: NumberInt("0"),
    fantasyId: "4246"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e918ed5be11b41d975d53"),
    name: "Jeff Green",
    __v: NumberInt("0"),
    fantasyId: "4247"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d56"),
    name: "Thaddeus Young",
    __v: NumberInt("0"),
    fantasyId: "4290"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d59"),
    name: "Jared Dudley",
    __v: NumberInt("0"),
    fantasyId: "4300"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d5c"),
    name: "Marc Gasol",
    __v: NumberInt("0"),
    fantasyId: "4325"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d5f"),
    name: "Anthony Tolliver",
    __v: NumberInt("0"),
    fantasyId: "4371"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d62"),
    name: "Derrick Rose",
    __v: NumberInt("0"),
    fantasyId: "4387"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d65"),
    name: "Michael Beasley",
    __v: NumberInt("0"),
    fantasyId: "4388"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d68"),
    name: "Russell Westbrook",
    __v: NumberInt("0"),
    fantasyId: "4390"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d6b"),
    name: "Kevin Love",
    __v: NumberInt("0"),
    fantasyId: "4391"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d6e"),
    name: "Danilo Gallinari",
    __v: NumberInt("0"),
    fantasyId: "4468"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d71"),
    name: "Eric Gordon",
    __v: NumberInt("0"),
    fantasyId: "4469"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d74"),
    name: "D.J. Augustin",
    __v: NumberInt("0"),
    fantasyId: "4471"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d77"),
    name: "Brook Lopez",
    __v: NumberInt("0"),
    fantasyId: "4472"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d7a"),
    name: "Jerryd Bayless",
    __v: NumberInt("0"),
    fantasyId: "4473"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d7d"),
    name: "Robin Lopez",
    __v: NumberInt("0"),
    fantasyId: "4477"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d80"),
    name: "JaVale McGee",
    __v: NumberInt("0"),
    fantasyId: "4480"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d83"),
    name: "Ryan Anderson",
    __v: NumberInt("0"),
    fantasyId: "4483"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d86"),
    name: "Courtney Lee",
    __v: NumberInt("0"),
    fantasyId: "4484"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d89"),
    name: "Serge Ibaka",
    __v: NumberInt("0"),
    fantasyId: "4486"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d8c"),
    name: "Nicolas Batum",
    __v: NumberInt("0"),
    fantasyId: "4487"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d8f"),
    name: "George Hill",
    __v: NumberInt("0"),
    fantasyId: "4488"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d92"),
    name: "DeAndre Jordan",
    __v: NumberInt("0"),
    fantasyId: "4497"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d95"),
    name: "Luc Richard Mbah a Moute",
    __v: NumberInt("0"),
    fantasyId: "4498"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d98"),
    name: "Goran Dragic",
    __v: NumberInt("0"),
    fantasyId: "4507"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d9b"),
    name: "Blake Griffin",
    __v: NumberInt("0"),
    fantasyId: "4561"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9192d5be11b41d975d9e"),
    name: "James Harden",
    __v: NumberInt("0"),
    fantasyId: "4563"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975da1"),
    name: "Ricky Rubio",
    __v: NumberInt("0"),
    fantasyId: "4610"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975da4"),
    name: "Stephen Curry",
    __v: NumberInt("0"),
    fantasyId: "4612"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975da7"),
    name: "DeMar DeRozan",
    __v: NumberInt("0"),
    fantasyId: "4614"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975daa"),
    name: "James Johnson",
    __v: NumberInt("0"),
    fantasyId: "4621"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dad"),
    name: "Jrue Holiday",
    __v: NumberInt("0"),
    fantasyId: "4622"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975db0"),
    name: "Jeff Teague",
    __v: NumberInt("0"),
    fantasyId: "4624"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975db3"),
    name: "Taj Gibson",
    __v: NumberInt("0"),
    fantasyId: "4631"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975db6"),
    name: "DeMarre Carroll",
    __v: NumberInt("0"),
    fantasyId: "4632"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975db9"),
    name: "Wayne Ellington",
    __v: NumberInt("0"),
    fantasyId: "4633"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dbc"),
    name: "Jodie Meeks",
    __v: NumberInt("0"),
    fantasyId: "4646"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dbf"),
    name: "Patrick Beverley",
    __v: NumberInt("0"),
    fantasyId: "4647"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dc2"),
    name: "Danny Green",
    __v: NumberInt("0"),
    fantasyId: "4651"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dc5"),
    name: "Patty Mills",
    __v: NumberInt("0"),
    fantasyId: "4660"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dc8"),
    name: "Garrett Temple",
    __v: NumberInt("0"),
    fantasyId: "4682"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dcb"),
    name: "Wesley Matthews",
    __v: NumberInt("0"),
    fantasyId: "4694"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dce"),
    name: "John Wall",
    __v: NumberInt("0"),
    fantasyId: "4716"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dd1"),
    name: "Derrick Favors",
    __v: NumberInt("0"),
    fantasyId: "4718"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dd4"),
    name: "DeMarcus Cousins",
    __v: NumberInt("0"),
    fantasyId: "4720"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dd7"),
    name: "Al-Farouq Aminu",
    __v: NumberInt("0"),
    fantasyId: "4723"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975dda"),
    name: "Gordon Hayward",
    __v: NumberInt("0"),
    fantasyId: "4724"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975ddd"),
    name: "Paul George",
    __v: NumberInt("0"),
    fantasyId: "4725"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975de0"),
    name: "Ed Davis",
    __v: NumberInt("0"),
    fantasyId: "4728"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975de3"),
    name: "Patrick Patterson",
    __v: NumberInt("0"),
    fantasyId: "4729"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975de6"),
    name: "Eric Bledsoe",
    __v: NumberInt("0"),
    fantasyId: "4749"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919bd5be11b41d975de9"),
    name: "Avery Bradley",
    __v: NumberInt("0"),
    fantasyId: "4750"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975dec"),
    name: "Hassan Whiteside",
    __v: NumberInt("0"),
    fantasyId: "4764"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975def"),
    name: "Nemanja Bjelica",
    __v: NumberInt("0"),
    fantasyId: "4766"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975df2"),
    name: "Ish Smith",
    __v: NumberInt("0"),
    fantasyId: "4800"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975df5"),
    name: "Elijah Millsap",
    __v: NumberInt("0"),
    fantasyId: "4833"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975df8"),
    name: "Kyrie Irving",
    __v: NumberInt("0"),
    fantasyId: "4840"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975dfb"),
    name: "Tristan Thompson",
    __v: NumberInt("0"),
    fantasyId: "4884"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975dfe"),
    name: "Jonas Valanciunas",
    __v: NumberInt("0"),
    fantasyId: "4886"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e01"),
    name: "Bismack Biyombo",
    __v: NumberInt("0"),
    fantasyId: "4888"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e04"),
    name: "Brandon Knight",
    __v: NumberInt("0"),
    fantasyId: "4889"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e07"),
    name: "Kemba Walker",
    __v: NumberInt("0"),
    fantasyId: "4890"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e0a"),
    name: "Klay Thompson",
    __v: NumberInt("0"),
    fantasyId: "4892"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e0d"),
    name: "Alec Burks",
    __v: NumberInt("0"),
    fantasyId: "4893"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e10"),
    name: "Markieff Morris",
    __v: NumberInt("0"),
    fantasyId: "4894"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e13"),
    name: "Marcus Morris Sr.",
    __v: NumberInt("0"),
    fantasyId: "4895"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e16"),
    name: "Kawhi Leonard",
    __v: NumberInt("0"),
    fantasyId: "4896"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e19"),
    name: "Nikola Vucevic",
    __v: NumberInt("0"),
    fantasyId: "4897"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e1c"),
    name: "Iman Shumpert",
    __v: NumberInt("0"),
    fantasyId: "4898"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e1f"),
    name: "Enes Kanter",
    __v: NumberInt("0"),
    fantasyId: "4899"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e22"),
    name: "Tobias Harris",
    __v: NumberInt("0"),
    fantasyId: "4901"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e25"),
    name: "Kenneth Faried",
    __v: NumberInt("0"),
    fantasyId: "4904"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e28"),
    name: "Reggie Jackson",
    __v: NumberInt("0"),
    fantasyId: "4906"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e2b"),
    name: "Cory Joseph",
    __v: NumberInt("0"),
    fantasyId: "4911"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e2e"),
    name: "Jimmy Butler",
    __v: NumberInt("0"),
    fantasyId: "4912"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e31"),
    name: "Bojan Bogdanovic",
    __v: NumberInt("0"),
    fantasyId: "4913"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e919ed5be11b41d975e34"),
    name: "Shelvin Mack",
    __v: NumberInt("0"),
    fantasyId: "4916"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e37"),
    name: "Davis Bertans",
    __v: NumberInt("0"),
    fantasyId: "4926"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e3a"),
    name: "E'Twaun Moore",
    __v: NumberInt("0"),
    fantasyId: "4937"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e3d"),
    name: "Isaiah Thomas",
    __v: NumberInt("0"),
    fantasyId: "4942"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e40"),
    name: "Lance Thomas",
    __v: NumberInt("0"),
    fantasyId: "4966"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e43"),
    name: "Brad Wanamaker",
    __v: NumberInt("0"),
    fantasyId: "4969"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e46"),
    name: "Anthony Davis",
    __v: NumberInt("0"),
    fantasyId: "5007"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e49"),
    name: "Michael Kidd-Gilchrist",
    __v: NumberInt("0"),
    fantasyId: "5008"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e4c"),
    name: "Bradley Beal",
    __v: NumberInt("0"),
    fantasyId: "5009"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e4f"),
    name: "Dion Waiters",
    __v: NumberInt("0"),
    fantasyId: "5010"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e52"),
    name: "Damian Lillard",
    __v: NumberInt("0"),
    fantasyId: "5012"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e55"),
    name: "Harrison Barnes",
    __v: NumberInt("0"),
    fantasyId: "5013"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e58"),
    name: "Terrence Ross",
    __v: NumberInt("0"),
    fantasyId: "5014"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e5b"),
    name: "Andre Drummond",
    __v: NumberInt("0"),
    fantasyId: "5015"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e5e"),
    name: "Austin Rivers",
    __v: NumberInt("0"),
    fantasyId: "5016"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e61"),
    name: "Meyers Leonard",
    __v: NumberInt("0"),
    fantasyId: "5017"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e64"),
    name: "Jeremy Lamb",
    __v: NumberInt("0"),
    fantasyId: "5018"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e67"),
    name: "John Henson",
    __v: NumberInt("0"),
    fantasyId: "5020"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e6a"),
    name: "Moe Harkless",
    __v: NumberInt("0"),
    fantasyId: "5021"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e6d"),
    name: "Tyler Zeller",
    __v: NumberInt("0"),
    fantasyId: "5023"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e70"),
    name: "Evan Fournier",
    __v: NumberInt("0"),
    fantasyId: "5054"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e73"),
    name: "Jared Cunningham",
    __v: NumberInt("0"),
    fantasyId: "5058"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e76"),
    name: "Tomas Satoransky",
    __v: NumberInt("0"),
    fantasyId: "5066"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e79"),
    name: "Jae Crowder",
    __v: NumberInt("0"),
    fantasyId: "5068"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e7c"),
    name: "Draymond Green",
    __v: NumberInt("0"),
    fantasyId: "5069"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a2d5be11b41d975e7f"),
    name: "Khris Middleton",
    __v: NumberInt("0"),
    fantasyId: "5073"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e82"),
    name: "Will Barton",
    __v: NumberInt("0"),
    fantasyId: "5074"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e85"),
    name: "Mike Scott",
    __v: NumberInt("0"),
    fantasyId: "5077"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e88"),
    name: "Darius Miller",
    __v: NumberInt("0"),
    fantasyId: "5080"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e8b"),
    name: "Kent Bazemore",
    __v: NumberInt("0"),
    fantasyId: "5102"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e8e"),
    name: "Justin Holiday",
    __v: NumberInt("0"),
    fantasyId: "5142"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e91"),
    name: "Aron Baynes",
    __v: NumberInt("0"),
    fantasyId: "5150"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e94"),
    name: "Victor Oladipo",
    __v: NumberInt("0"),
    fantasyId: "5153"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e97"),
    name: "Otto Porter Jr.",
    __v: NumberInt("0"),
    fantasyId: "5154"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e9a"),
    name: "Cody Zeller",
    __v: NumberInt("0"),
    fantasyId: "5155"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975e9d"),
    name: "Alex Len",
    __v: NumberInt("0"),
    fantasyId: "5156"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ea0"),
    name: "Nerlens Noel",
    __v: NumberInt("0"),
    fantasyId: "5157"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ea3"),
    name: "Ben McLemore",
    __v: NumberInt("0"),
    fantasyId: "5158"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ea6"),
    name: "Kentavious Caldwell-Pope",
    __v: NumberInt("0"),
    fantasyId: "5159"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ea9"),
    name: "Trey Burke",
    __v: NumberInt("0"),
    fantasyId: "5160"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eac"),
    name: "CJ McCollum",
    __v: NumberInt("0"),
    fantasyId: "5161"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eaf"),
    name: "Michael Carter-Williams",
    __v: NumberInt("0"),
    fantasyId: "5162"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eb2"),
    name: "Steven Adams",
    __v: NumberInt("0"),
    fantasyId: "5163"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eb5"),
    name: "Kelly Olynyk",
    __v: NumberInt("0"),
    fantasyId: "5164"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eb8"),
    name: "Giannis Antetokounmpo",
    __v: NumberInt("0"),
    fantasyId: "5185"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ebb"),
    name: "Dennis Schroder",
    __v: NumberInt("0"),
    fantasyId: "5187"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ebe"),
    name: "Tony Snell",
    __v: NumberInt("0"),
    fantasyId: "5190"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ec1"),
    name: "Gorgui Dieng",
    __v: NumberInt("0"),
    fantasyId: "5191"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ec4"),
    name: "Mason Plumlee",
    __v: NumberInt("0"),
    fantasyId: "5192"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975ec7"),
    name: "Solomon Hill",
    __v: NumberInt("0"),
    fantasyId: "5193"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a5d5be11b41d975eca"),
    name: "Tim Hardaway Jr.",
    __v: NumberInt("0"),
    fantasyId: "5194"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ecd"),
    name: "Reggie Bullock",
    __v: NumberInt("0"),
    fantasyId: "5195"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ed0"),
    name: "Andre Roberson",
    __v: NumberInt("0"),
    fantasyId: "5196"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ed3"),
    name: "Rudy Gobert",
    __v: NumberInt("0"),
    fantasyId: "5197"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ed6"),
    name: "Allen Crabbe",
    __v: NumberInt("0"),
    fantasyId: "5201"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ed9"),
    name: "Mike Muscala",
    __v: NumberInt("0"),
    fantasyId: "5214"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975edc"),
    name: "Raul Neto",
    __v: NumberInt("0"),
    fantasyId: "5217"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975edf"),
    name: "James Ennis III",
    __v: NumberInt("0"),
    fantasyId: "5220"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ee2"),
    name: "Seth Curry",
    __v: NumberInt("0"),
    fantasyId: "5245"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ee5"),
    name: "Matthew Dellavedova",
    __v: NumberInt("0"),
    fantasyId: "5249"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ee8"),
    name: "Robert Covington",
    __v: NumberInt("0"),
    fantasyId: "5253"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975eeb"),
    name: "Dewayne Dedmon",
    __v: NumberInt("0"),
    fantasyId: "5256"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975eee"),
    name: "JaMychal Green",
    __v: NumberInt("0"),
    fantasyId: "5262"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ef1"),
    name: "Rodney McGruder",
    __v: NumberInt("0"),
    fantasyId: "5270"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ef4"),
    name: "James Nunnally",
    __v: NumberInt("0"),
    fantasyId: "5281"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975ef7"),
    name: "Scotty Hopson",
    __v: NumberInt("0"),
    fantasyId: "5291"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975efa"),
    name: "Andrew Wiggins",
    __v: NumberInt("0"),
    fantasyId: "5292"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975efd"),
    name: "Jabari Parker",
    __v: NumberInt("0"),
    fantasyId: "5293"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f00"),
    name: "Joel Embiid",
    __v: NumberInt("0"),
    fantasyId: "5294"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f03"),
    name: "Aaron Gordon",
    __v: NumberInt("0"),
    fantasyId: "5295"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f06"),
    name: "Danté Exum",
    __v: NumberInt("0"),
    fantasyId: "5316"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f09"),
    name: "Marcus Smart",
    __v: NumberInt("0"),
    fantasyId: "5317"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f0c"),
    name: "Julius Randle",
    __v: NumberInt("0"),
    fantasyId: "5318"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f0f"),
    name: "Noah Vonleh",
    __v: NumberInt("0"),
    fantasyId: "5320"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f12"),
    name: "Elfrid Payton",
    __v: NumberInt("0"),
    fantasyId: "5321"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91a9d5be11b41d975f15"),
    name: "Doug McDermott",
    __v: NumberInt("0"),
    fantasyId: "5322"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f18"),
    name: "Dario Saric",
    __v: NumberInt("0"),
    fantasyId: "5323"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f1b"),
    name: "Zach LaVine",
    __v: NumberInt("0"),
    fantasyId: "5324"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f1e"),
    name: "T.J. Warren",
    __v: NumberInt("0"),
    fantasyId: "5325"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f21"),
    name: "Jusuf Nurkic",
    __v: NumberInt("0"),
    fantasyId: "5327"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f24"),
    name: "Gary Harris",
    __v: NumberInt("0"),
    fantasyId: "5330"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f27"),
    name: "Rodney Hood",
    __v: NumberInt("0"),
    fantasyId: "5334"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f2a"),
    name: "Clint Capela",
    __v: NumberInt("0"),
    fantasyId: "5336"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f2d"),
    name: "Bogdan Bogdanovic",
    __v: NumberInt("0"),
    fantasyId: "5338"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f30"),
    name: "Kyle Anderson",
    __v: NumberInt("0"),
    fantasyId: "5341"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f33"),
    name: "Joe Harris",
    __v: NumberInt("0"),
    fantasyId: "5344"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f36"),
    name: "Johnny O'Bryant III",
    __v: NumberInt("0"),
    fantasyId: "5347"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f39"),
    name: "Spencer Dinwiddie",
    __v: NumberInt("0"),
    fantasyId: "5349"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f3c"),
    name: "Jerami Grant",
    __v: NumberInt("0"),
    fantasyId: "5350"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f3f"),
    name: "Glenn Robinson III",
    __v: NumberInt("0"),
    fantasyId: "5351"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f42"),
    name: "Nikola Jokic",
    __v: NumberInt("0"),
    fantasyId: "5352"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f45"),
    name: "Dwight Powell",
    __v: NumberInt("0"),
    fantasyId: "5356"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f48"),
    name: "Jordan Clarkson",
    __v: NumberInt("0"),
    fantasyId: "5357"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f4b"),
    name: "Thanasis Antetokounmpo",
    __v: NumberInt("0"),
    fantasyId: "5362"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f4e"),
    name: "Tyler Johnson",
    __v: NumberInt("0"),
    fantasyId: "5376"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f51"),
    name: "Tarik Black",
    __v: NumberInt("0"),
    fantasyId: "5383"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f54"),
    name: "Langston Galloway",
    __v: NumberInt("0"),
    fantasyId: "5388"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f57"),
    name: "Travis Wear",
    __v: NumberInt("0"),
    fantasyId: "5389"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f5a"),
    name: "Khem Birch",
    __v: NumberInt("0"),
    fantasyId: "5390"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f5d"),
    name: "Joe Ingles",
    __v: NumberInt("0"),
    fantasyId: "5393"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91add5be11b41d975f60"),
    name: "Tim Frazier",
    __v: NumberInt("0"),
    fantasyId: "5414"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f63"),
    name: "Jakarr Sampson",
    __v: NumberInt("0"),
    fantasyId: "5417"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f66"),
    name: "David Stockton",
    __v: NumberInt("0"),
    fantasyId: "5420"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f69"),
    name: "Karl-Anthony Towns",
    __v: NumberInt("0"),
    fantasyId: "5432"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f6c"),
    name: "D'Angelo Russell",
    __v: NumberInt("0"),
    fantasyId: "5433"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f6f"),
    name: "Jahlil Okafor",
    __v: NumberInt("0"),
    fantasyId: "5434"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f72"),
    name: "Kristaps Porzingis",
    __v: NumberInt("0"),
    fantasyId: "5464"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f75"),
    name: "Willie Cauley-Stein",
    __v: NumberInt("0"),
    fantasyId: "5466"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f78"),
    name: "Emmanuel Mudiay",
    __v: NumberInt("0"),
    fantasyId: "5467"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f7b"),
    name: "Stanley Johnson",
    __v: NumberInt("0"),
    fantasyId: "5468"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f7e"),
    name: "Frank Kaminsky",
    __v: NumberInt("0"),
    fantasyId: "5469"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f81"),
    name: "Justise Winslow",
    __v: NumberInt("0"),
    fantasyId: "5470"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f84"),
    name: "Myles Turner",
    __v: NumberInt("0"),
    fantasyId: "5471"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f87"),
    name: "Trey Lyles",
    __v: NumberInt("0"),
    fantasyId: "5472"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f8a"),
    name: "Devin Booker",
    __v: NumberInt("0"),
    fantasyId: "5473"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f8d"),
    name: "Cameron Payne",
    __v: NumberInt("0"),
    fantasyId: "5474"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f90"),
    name: "Kelly Oubre Jr.",
    __v: NumberInt("0"),
    fantasyId: "5475"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f93"),
    name: "Terry Rozier",
    __v: NumberInt("0"),
    fantasyId: "5476"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f96"),
    name: "Sam Dekker",
    __v: NumberInt("0"),
    fantasyId: "5478"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f99"),
    name: "Delon Wright",
    __v: NumberInt("0"),
    fantasyId: "5480"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f9c"),
    name: "Justin Anderson",
    __v: NumberInt("0"),
    fantasyId: "5481"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975f9f"),
    name: "Bobby Portis",
    __v: NumberInt("0"),
    fantasyId: "5482"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975fa2"),
    name: "Rondae Hollis-Jefferson",
    __v: NumberInt("0"),
    fantasyId: "5483"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975fa5"),
    name: "Tyus Jones",
    __v: NumberInt("0"),
    fantasyId: "5484"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975fa8"),
    name: "Larry Nance Jr.",
    __v: NumberInt("0"),
    fantasyId: "5487"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b1d5be11b41d975fab"),
    name: "Kevon Looney",
    __v: NumberInt("0"),
    fantasyId: "5490"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fae"),
    name: "Cedi Osman",
    __v: NumberInt("0"),
    fantasyId: "5491"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fb1"),
    name: "Montrezl Harrell",
    __v: NumberInt("0"),
    fantasyId: "5492"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fb4"),
    name: "Guillermo Hernangómez",
    __v: NumberInt("0"),
    fantasyId: "5495"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fb7"),
    name: "Richaun Holmes",
    __v: NumberInt("0"),
    fantasyId: "5497"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fba"),
    name: "Josh Richardson",
    __v: NumberInt("0"),
    fantasyId: "5500"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fbd"),
    name: "Pat Connaughton",
    __v: NumberInt("0"),
    fantasyId: "5501"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fc0"),
    name: "Norman Powell",
    __v: NumberInt("0"),
    fantasyId: "5506"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fc3"),
    name: "Cristiano Felicio",
    __v: NumberInt("0"),
    fantasyId: "5522"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fc6"),
    name: "Boban Marjanovic",
    __v: NumberInt("0"),
    fantasyId: "5524"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fc9"),
    name: "Jonathon Simmons",
    __v: NumberInt("0"),
    fantasyId: "5526"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fcc"),
    name: "Axel Toupane",
    __v: NumberInt("0"),
    fantasyId: "5528"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fcf"),
    name: "Treveon Graham",
    __v: NumberInt("0"),
    fantasyId: "5539"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fd2"),
    name: "Michael Frazier",
    __v: NumberInt("0"),
    fantasyId: "5542"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fd5"),
    name: "Omari Johnson",
    __v: NumberInt("0"),
    fantasyId: "5575"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fd8"),
    name: "Keifer Sykes",
    __v: NumberInt("0"),
    fantasyId: "5576"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fdb"),
    name: "T.J. McConnell",
    __v: NumberInt("0"),
    fantasyId: "5582"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fde"),
    name: "Christian Wood",
    __v: NumberInt("0"),
    fantasyId: "5583"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fe1"),
    name: "Quinn Cook",
    __v: NumberInt("0"),
    fantasyId: "5588"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fe4"),
    name: "Ben Simmons",
    __v: NumberInt("0"),
    fantasyId: "5600"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fe7"),
    name: "Brandon Ingram",
    __v: NumberInt("0"),
    fantasyId: "5601"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fea"),
    name: "Jaylen Brown",
    __v: NumberInt("0"),
    fantasyId: "5602"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975fed"),
    name: "Kris Dunn",
    __v: NumberInt("0"),
    fantasyId: "5636"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975ff0"),
    name: "Buddy Hield",
    __v: NumberInt("0"),
    fantasyId: "5637"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975ff3"),
    name: "Jamal Murray",
    __v: NumberInt("0"),
    fantasyId: "5638"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b4d5be11b41d975ff6"),
    name: "Marquese Chriss",
    __v: NumberInt("0"),
    fantasyId: "5639"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b8d5be11b41d975ff9"),
    name: "Jakob Poeltl",
    __v: NumberInt("0"),
    fantasyId: "5640"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b8d5be11b41d975ffc"),
    name: "Thon Maker",
    __v: NumberInt("0"),
    fantasyId: "5641"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b8d5be11b41d975fff"),
    name: "Domantas Sabonis",
    __v: NumberInt("0"),
    fantasyId: "5642"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976002"),
    name: "Taurean Prince",
    __v: NumberInt("0"),
    fantasyId: "5643"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976005"),
    name: "Denzel Valentine",
    __v: NumberInt("0"),
    fantasyId: "5645"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976008"),
    name: "Juancho Hernangómez",
    __v: NumberInt("0"),
    fantasyId: "5646"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97600b"),
    name: "Malik Beasley",
    __v: NumberInt("0"),
    fantasyId: "5650"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97600e"),
    name: "Caris LeVert",
    __v: NumberInt("0"),
    fantasyId: "5651"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976011"),
    name: "DeAndre' Bembry",
    __v: NumberInt("0"),
    fantasyId: "5652"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976014"),
    name: "Timothé Luwawu-Cabarrot",
    __v: NumberInt("0"),
    fantasyId: "5655"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976017"),
    name: "Furkan Korkmaz",
    __v: NumberInt("0"),
    fantasyId: "5657"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97601a"),
    name: "Pascal Siakam",
    __v: NumberInt("0"),
    fantasyId: "5658"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97601d"),
    name: "Dejounte Murray",
    __v: NumberInt("0"),
    fantasyId: "5660"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976020"),
    name: "Damian Jones",
    __v: NumberInt("0"),
    fantasyId: "5661"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976023"),
    name: "Ivica Zubac",
    __v: NumberInt("0"),
    fantasyId: "5663"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976026"),
    name: "Cheick Diallo",
    __v: NumberInt("0"),
    fantasyId: "5664"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976029"),
    name: "Malcolm Brogdon",
    __v: NumberInt("0"),
    fantasyId: "5667"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97602c"),
    name: "Patrick McCaw",
    __v: NumberInt("0"),
    fantasyId: "5669"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97602f"),
    name: "Jake Layman",
    __v: NumberInt("0"),
    fantasyId: "5678"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976032"),
    name: "Georges Niang",
    __v: NumberInt("0"),
    fantasyId: "5681"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976035"),
    name: "Petr Cornelie",
    __v: NumberInt("0"),
    fantasyId: "5684"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976038"),
    name: "Abdel Nader",
    __v: NumberInt("0"),
    fantasyId: "5689"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97603b"),
    name: "Dorian Finney-Smith",
    __v: NumberInt("0"),
    fantasyId: "5693"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d97603e"),
    name: "Ryan Arcidiacono",
    __v: NumberInt("0"),
    fantasyId: "5695"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91b9d5be11b41d976041"),
    name: "Chasson Randle",
    __v: NumberInt("0"),
    fantasyId: "5706"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bcd5be11b41d976044"),
    name: "Wayne Selden Jr.",
    __v: NumberInt("0"),
    fantasyId: "5708"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bcd5be11b41d976047"),
    name: "Yogi Ferrell",
    __v: NumberInt("0"),
    fantasyId: "5720"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bcd5be11b41d97604a"),
    name: "Bryn Forbes",
    __v: NumberInt("0"),
    fantasyId: "5726"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97604d"),
    name: "Fred VanVleet",
    __v: NumberInt("0"),
    fantasyId: "5727"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976050"),
    name: "Danuel House Jr.",
    __v: NumberInt("0"),
    fantasyId: "5728"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976053"),
    name: "Damion Lee",
    __v: NumberInt("0"),
    fantasyId: "5733"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976056"),
    name: "Gary Payton II",
    __v: NumberInt("0"),
    fantasyId: "5739"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976059"),
    name: "Shaquille Harrison",
    __v: NumberInt("0"),
    fantasyId: "5746"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97605c"),
    name: "Derrick Jones Jr.",
    __v: NumberInt("0"),
    fantasyId: "5747"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97605f"),
    name: "Alex Caruso",
    __v: NumberInt("0"),
    fantasyId: "5754"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976062"),
    name: "David Nwaba",
    __v: NumberInt("0"),
    fantasyId: "5762"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976065"),
    name: "Markelle Fultz",
    __v: NumberInt("0"),
    fantasyId: "5763"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976068"),
    name: "Lonzo Ball",
    __v: NumberInt("0"),
    fantasyId: "5764"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97606b"),
    name: "Jayson Tatum",
    __v: NumberInt("0"),
    fantasyId: "5765"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97606e"),
    name: "Josh Jackson",
    __v: NumberInt("0"),
    fantasyId: "5766"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976071"),
    name: "De'Aaron Fox",
    __v: NumberInt("0"),
    fantasyId: "5767"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976074"),
    name: "Jonathan Isaac",
    __v: NumberInt("0"),
    fantasyId: "5768"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976077"),
    name: "Lauri Markkanen",
    __v: NumberInt("0"),
    fantasyId: "5769"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97607a"),
    name: "Frank Ntilikina",
    __v: NumberInt("0"),
    fantasyId: "5821"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97607d"),
    name: "Dennis Smith Jr.",
    __v: NumberInt("0"),
    fantasyId: "5822"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976080"),
    name: "Zach Collins",
    __v: NumberInt("0"),
    fantasyId: "5823"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976083"),
    name: "Malik Monk",
    __v: NumberInt("0"),
    fantasyId: "5824"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976086"),
    name: "Luke Kennard",
    __v: NumberInt("0"),
    fantasyId: "5825"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d976089"),
    name: "Donovan Mitchell",
    __v: NumberInt("0"),
    fantasyId: "5826"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91bdd5be11b41d97608c"),
    name: "Bam Adebayo",
    __v: NumberInt("0"),
    fantasyId: "5827"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d97608f"),
    name: "Justin Jackson",
    __v: NumberInt("0"),
    fantasyId: "5828"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d976092"),
    name: "Justin Patton",
    __v: NumberInt("0"),
    fantasyId: "5829"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d976095"),
    name: "D.J. Wilson",
    __v: NumberInt("0"),
    fantasyId: "5830"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d976098"),
    name: "TJ Leaf",
    __v: NumberInt("0"),
    fantasyId: "5831"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d97609b"),
    name: "John Collins",
    __v: NumberInt("0"),
    fantasyId: "5832"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d97609e"),
    name: "Harry Giles III",
    __v: NumberInt("0"),
    fantasyId: "5833"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760a1"),
    name: "Terrance Ferguson",
    __v: NumberInt("0"),
    fantasyId: "5834"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760a4"),
    name: "Jarrett Allen",
    __v: NumberInt("0"),
    fantasyId: "5835"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760a7"),
    name: "OG Anunoby",
    __v: NumberInt("0"),
    fantasyId: "5836"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760aa"),
    name: "Anzejs Pasecniks",
    __v: NumberInt("0"),
    fantasyId: "5838"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760ad"),
    name: "Caleb Swanigan",
    __v: NumberInt("0"),
    fantasyId: "5839"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760b0"),
    name: "Kyle Kuzma",
    __v: NumberInt("0"),
    fantasyId: "5840"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760b3"),
    name: "Tony Bradley",
    __v: NumberInt("0"),
    fantasyId: "5841"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760b6"),
    name: "Derrick White",
    __v: NumberInt("0"),
    fantasyId: "5842"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760b9"),
    name: "Josh Hart",
    __v: NumberInt("0"),
    fantasyId: "5843"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760bc"),
    name: "Frank Jackson",
    __v: NumberInt("0"),
    fantasyId: "5844"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760bf"),
    name: "Davon Reed",
    __v: NumberInt("0"),
    fantasyId: "5845"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760c2"),
    name: "Wes Iwundu",
    __v: NumberInt("0"),
    fantasyId: "5846"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760c5"),
    name: "Frank Mason III",
    __v: NumberInt("0"),
    fantasyId: "5847"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760c8"),
    name: "Jonah Bolden",
    __v: NumberInt("0"),
    fantasyId: "5849"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760cb"),
    name: "Semi Ojeleye",
    __v: NumberInt("0"),
    fantasyId: "5850"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760ce"),
    name: "Jordan Bell",
    __v: NumberInt("0"),
    fantasyId: "5851"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760d1"),
    name: "Dwayne Bacon",
    __v: NumberInt("0"),
    fantasyId: "5853"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760d4"),
    name: "Thomas Bryant",
    __v: NumberInt("0"),
    fantasyId: "5855"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c0d5be11b41d9760d7"),
    name: "Isaiah Hartenstein",
    __v: NumberInt("0"),
    fantasyId: "5856"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760da"),
    name: "Damyean Dotson",
    __v: NumberInt("0"),
    fantasyId: "5857"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760dd"),
    name: "Dillon Brooks",
    __v: NumberInt("0"),
    fantasyId: "5858"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760e0"),
    name: "Sterling Brown",
    __v: NumberInt("0"),
    fantasyId: "5859"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760e3"),
    name: "Sindarius Thornwell",
    __v: NumberInt("0"),
    fantasyId: "5861"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760e6"),
    name: "Vlatko Cancar",
    __v: NumberInt("0"),
    fantasyId: "5862"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760e9"),
    name: "Monte Morris",
    __v: NumberInt("0"),
    fantasyId: "5864"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760ec"),
    name: "Edmond Sumner",
    __v: NumberInt("0"),
    fantasyId: "5865"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760ef"),
    name: "Mike James",
    __v: NumberInt("0"),
    fantasyId: "5874"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760f2"),
    name: "Daniel Theis",
    __v: NumberInt("0"),
    fantasyId: "5880"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760f5"),
    name: "PJ Dozier",
    __v: NumberInt("0"),
    fantasyId: "5886"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760f8"),
    name: "Maxi Kleber",
    __v: NumberInt("0"),
    fantasyId: "5892"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760fb"),
    name: "Torrey Craig",
    __v: NumberInt("0"),
    fantasyId: "5893"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d9760fe"),
    name: "Chris Boucher",
    __v: NumberInt("0"),
    fantasyId: "5894"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976101"),
    name: "Cameron Oliver",
    __v: NumberInt("0"),
    fantasyId: "5895"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976104"),
    name: "Derrick Walton Jr.",
    __v: NumberInt("0"),
    fantasyId: "5899"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976107"),
    name: "Luke Kornet",
    __v: NumberInt("0"),
    fantasyId: "5903"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d97610a"),
    name: "Alfonzo McKinnie",
    __v: NumberInt("0"),
    fantasyId: "5904"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d97610d"),
    name: "Royce O'Neale",
    __v: NumberInt("0"),
    fantasyId: "5905"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976110"),
    name: "Amida Brimah",
    __v: NumberInt("0"),
    fantasyId: "5932"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976113"),
    name: "Jaylen Morris",
    __v: NumberInt("0"),
    fantasyId: "5954"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976116"),
    name: "Deandre Ayton",
    __v: NumberInt("0"),
    fantasyId: "5958"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976119"),
    name: "Marvin Bagley III",
    __v: NumberInt("0"),
    fantasyId: "5959"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d97611c"),
    name: "Luka Doncic",
    __v: NumberInt("0"),
    fantasyId: "6014"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d97611f"),
    name: "Jaren Jackson Jr.",
    __v: NumberInt("0"),
    fantasyId: "6015"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c4d5be11b41d976122"),
    name: "Trae Young",
    __v: NumberInt("0"),
    fantasyId: "6016"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976125"),
    name: "Mo Bamba",
    __v: NumberInt("0"),
    fantasyId: "6017"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976128"),
    name: "Wendell Carter Jr.",
    __v: NumberInt("0"),
    fantasyId: "6018"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97612b"),
    name: "Collin Sexton",
    __v: NumberInt("0"),
    fantasyId: "6019"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97612e"),
    name: "Kevin Knox II",
    __v: NumberInt("0"),
    fantasyId: "6020"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976131"),
    name: "Mikal Bridges",
    __v: NumberInt("0"),
    fantasyId: "6021"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976134"),
    name: "Shai Gilgeous-Alexander",
    __v: NumberInt("0"),
    fantasyId: "6022"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976137"),
    name: "Miles Bridges",
    __v: NumberInt("0"),
    fantasyId: "6023"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97613a"),
    name: "Jerome Robinson",
    __v: NumberInt("0"),
    fantasyId: "6024"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97613d"),
    name: "Michael Porter Jr.",
    __v: NumberInt("0"),
    fantasyId: "6025"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976140"),
    name: "Troy Brown Jr.",
    __v: NumberInt("0"),
    fantasyId: "6026"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976143"),
    name: "Donte DiVincenzo",
    __v: NumberInt("0"),
    fantasyId: "6028"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976146"),
    name: "Lonnie Walker IV",
    __v: NumberInt("0"),
    fantasyId: "6029"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976149"),
    name: "Kevin Huerter",
    __v: NumberInt("0"),
    fantasyId: "6030"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97614c"),
    name: "Josh Okogie",
    __v: NumberInt("0"),
    fantasyId: "6031"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97614f"),
    name: "Grayson Allen",
    __v: NumberInt("0"),
    fantasyId: "6032"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976152"),
    name: "Chandler Hutchison",
    __v: NumberInt("0"),
    fantasyId: "6033"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976155"),
    name: "Aaron Holiday",
    __v: NumberInt("0"),
    fantasyId: "6034"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976158"),
    name: "Anfernee Simons",
    __v: NumberInt("0"),
    fantasyId: "6035"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97615b"),
    name: "Moritz Wagner",
    __v: NumberInt("0"),
    fantasyId: "6036"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97615e"),
    name: "Landry Shamet",
    __v: NumberInt("0"),
    fantasyId: "6037"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976161"),
    name: "Robert Williams",
    __v: NumberInt("0"),
    fantasyId: "6038"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976164"),
    name: "Jevon Carter",
    __v: NumberInt("0"),
    fantasyId: "6043"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d976167"),
    name: "Jalen Brunson",
    __v: NumberInt("0"),
    fantasyId: "6044"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97616a"),
    name: "Devonte' Graham",
    __v: NumberInt("0"),
    fantasyId: "6045"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91c7d5be11b41d97616d"),
    name: "Melvin Frazier Jr.",
    __v: NumberInt("0"),
    fantasyId: "6046"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976170"),
    name: "Mitchell Robinson",
    __v: NumberInt("0"),
    fantasyId: "6047"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976173"),
    name: "Gary Trent Jr.",
    __v: NumberInt("0"),
    fantasyId: "6048"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976176"),
    name: "Khyri Thomas",
    __v: NumberInt("0"),
    fantasyId: "6049"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976179"),
    name: "Isaac Bonga",
    __v: NumberInt("0"),
    fantasyId: "6050"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97617c"),
    name: "Jarred Vanderbilt",
    __v: NumberInt("0"),
    fantasyId: "6052"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97617f"),
    name: "Bruce Brown",
    __v: NumberInt("0"),
    fantasyId: "6053"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976182"),
    name: "Hamidou Diallo",
    __v: NumberInt("0"),
    fantasyId: "6056"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976185"),
    name: "De'Anthony Melton",
    __v: NumberInt("0"),
    fantasyId: "6057"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976188"),
    name: "Svi Mykhailiuk",
    __v: NumberInt("0"),
    fantasyId: "6058"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97618b"),
    name: "Keita Bates-Diop",
    __v: NumberInt("0"),
    fantasyId: "6059"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97618e"),
    name: "Chimezie Metu",
    __v: NumberInt("0"),
    fantasyId: "6060"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976191"),
    name: "Alize Johnson",
    __v: NumberInt("0"),
    fantasyId: "6061"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976194"),
    name: "Shake Milton",
    __v: NumberInt("0"),
    fantasyId: "6065"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d976197"),
    name: "Arnoldas Kulboka",
    __v: NumberInt("0"),
    fantasyId: "6066"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97619a"),
    name: "Ray Spalding",
    __v: NumberInt("0"),
    fantasyId: "6067"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d97619d"),
    name: "George King",
    __v: NumberInt("0"),
    fantasyId: "6070"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761a0"),
    name: "Kostas Antetokounmpo",
    __v: NumberInt("0"),
    fantasyId: "6071"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761a3"),
    name: "Deonte Burton",
    __v: NumberInt("0"),
    fantasyId: "6072"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761a6"),
    name: "Duncan Robinson",
    __v: NumberInt("0"),
    fantasyId: "6073"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761a9"),
    name: "Kenrich Williams",
    __v: NumberInt("0"),
    fantasyId: "6076"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761ac"),
    name: "Theo Pinson",
    __v: NumberInt("0"),
    fantasyId: "6083"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761af"),
    name: "Wenyen Gabriel",
    __v: NumberInt("0"),
    fantasyId: "6092"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761b2"),
    name: "Norvel Pelle",
    __v: NumberInt("0"),
    fantasyId: "6100"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761b5"),
    name: "Brandon Goodwin",
    __v: NumberInt("0"),
    fantasyId: "6102"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91cfd5be11b41d9761b8"),
    name: "B.J. Johnson",
    __v: NumberInt("0"),
    fantasyId: "6104"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761bb"),
    name: "Drew Eubanks",
    __v: NumberInt("0"),
    fantasyId: "6109"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761be"),
    name: "Kendrick Nunn",
    __v: NumberInt("0"),
    fantasyId: "6114"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761c1"),
    name: "Chris Chiozza",
    __v: NumberInt("0"),
    fantasyId: "6119"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761c4"),
    name: "Gary Clark",
    __v: NumberInt("0"),
    fantasyId: "6121"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761c7"),
    name: "Yuta Watanabe",
    __v: NumberInt("0"),
    fantasyId: "6132"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761ca"),
    name: "Jordan McLaughlin",
    __v: NumberInt("0"),
    fantasyId: "6133"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761cd"),
    name: "Johnny Hamilton",
    __v: NumberInt("0"),
    fantasyId: "6135"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761d0"),
    name: "Emanuel Terry",
    __v: NumberInt("0"),
    fantasyId: "6144"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761d3"),
    name: "Cameron Reynolds",
    __v: NumberInt("0"),
    fantasyId: "6148"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761d6"),
    name: "Paul Watson",
    __v: NumberInt("0"),
    fantasyId: "6149"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761d9"),
    name: "Haywood Highsmith",
    __v: NumberInt("0"),
    fantasyId: "6155"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761dc"),
    name: "Zion Williamson",
    __v: NumberInt("0"),
    fantasyId: "6163"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761df"),
    name: "Ja Morant",
    __v: NumberInt("0"),
    fantasyId: "6164"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761e2"),
    name: "RJ Barrett",
    __v: NumberInt("0"),
    fantasyId: "6165"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761e5"),
    name: "De'Andre Hunter",
    __v: NumberInt("0"),
    fantasyId: "6166"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761e8"),
    name: "Darius Garland",
    __v: NumberInt("0"),
    fantasyId: "6167"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761eb"),
    name: "Jarrett Culver",
    __v: NumberInt("0"),
    fantasyId: "6168"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761ee"),
    name: "Coby White",
    __v: NumberInt("0"),
    fantasyId: "6169"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761f1"),
    name: "Jaxson Hayes",
    __v: NumberInt("0"),
    fantasyId: "6170"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761f4"),
    name: "Rui Hachimura",
    __v: NumberInt("0"),
    fantasyId: "6171"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761f7"),
    name: "Cam Reddish",
    __v: NumberInt("0"),
    fantasyId: "6172"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761fa"),
    name: "Cameron Johnson",
    __v: NumberInt("0"),
    fantasyId: "6173"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d9761fd"),
    name: "PJ Washington",
    __v: NumberInt("0"),
    fantasyId: "6174"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d976200"),
    name: "Tyler Herro",
    __v: NumberInt("0"),
    fantasyId: "6175"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d2d5be11b41d976203"),
    name: "Romeo Langford",
    __v: NumberInt("0"),
    fantasyId: "6176"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976206"),
    name: "Sekou Doumbouya",
    __v: NumberInt("0"),
    fantasyId: "6203"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976209"),
    name: "Chuma Okeke",
    __v: NumberInt("0"),
    fantasyId: "6204"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97620c"),
    name: "Nickeil Alexander-Walker",
    __v: NumberInt("0"),
    fantasyId: "6205"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97620f"),
    name: "Goga Bitadze",
    __v: NumberInt("0"),
    fantasyId: "6206"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976212"),
    name: "Luka Samanic",
    __v: NumberInt("0"),
    fantasyId: "6207"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976215"),
    name: "Matisse Thybulle",
    __v: NumberInt("0"),
    fantasyId: "6208"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976218"),
    name: "Brandon Clarke",
    __v: NumberInt("0"),
    fantasyId: "6209"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97621b"),
    name: "Grant Williams",
    __v: NumberInt("0"),
    fantasyId: "6210"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97621e"),
    name: "Darius Bazley",
    __v: NumberInt("0"),
    fantasyId: "6211"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976221"),
    name: "Ty Jerome",
    __v: NumberInt("0"),
    fantasyId: "6212"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976224"),
    name: "Nassir Little",
    __v: NumberInt("0"),
    fantasyId: "6213"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976227"),
    name: "Dylan Windler",
    __v: NumberInt("0"),
    fantasyId: "6214"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97622a"),
    name: "Mfiondu Kabengele",
    __v: NumberInt("0"),
    fantasyId: "6215"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97622d"),
    name: "Jordan Poole",
    __v: NumberInt("0"),
    fantasyId: "6216"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976230"),
    name: "Keldon Johnson",
    __v: NumberInt("0"),
    fantasyId: "6217"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976233"),
    name: "Kevin Porter Jr.",
    __v: NumberInt("0"),
    fantasyId: "6218"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976236"),
    name: "Nicolas Claxton",
    __v: NumberInt("0"),
    fantasyId: "6219"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976239"),
    name: "KZ Okpala",
    __v: NumberInt("0"),
    fantasyId: "6220"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97623c"),
    name: "Carsen Edwards",
    __v: NumberInt("0"),
    fantasyId: "6221"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97623f"),
    name: "Bruno Fernando",
    __v: NumberInt("0"),
    fantasyId: "6222"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976242"),
    name: "Didi Louzada",
    __v: NumberInt("0"),
    fantasyId: "6223"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976245"),
    name: "Cody Martin",
    __v: NumberInt("0"),
    fantasyId: "6224"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d976248"),
    name: "Deividas Sirvydis",
    __v: NumberInt("0"),
    fantasyId: "6225"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97624b"),
    name: "Daniel Gafford",
    __v: NumberInt("0"),
    fantasyId: "6226"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91d6d5be11b41d97624e"),
    name: "Alen Smailagic",
    __v: NumberInt("0"),
    fantasyId: "6227"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976251"),
    name: "Justin James",
    __v: NumberInt("0"),
    fantasyId: "6228"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976254"),
    name: "Eric Paschall",
    __v: NumberInt("0"),
    fantasyId: "6229"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976257"),
    name: "Admiral Schofield",
    __v: NumberInt("0"),
    fantasyId: "6230"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97625a"),
    name: "Jaylen Nowell",
    __v: NumberInt("0"),
    fantasyId: "6231"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97625d"),
    name: "Bol Bol",
    __v: NumberInt("0"),
    fantasyId: "6232"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976260"),
    name: "Isaiah Roby",
    __v: NumberInt("0"),
    fantasyId: "6233"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976263"),
    name: "Talen Horton-Tucker",
    __v: NumberInt("0"),
    fantasyId: "6234"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976266"),
    name: "Ignas Brazdeikis",
    __v: NumberInt("0"),
    fantasyId: "6235"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976269"),
    name: "Terance Mann",
    __v: NumberInt("0"),
    fantasyId: "6236"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97626c"),
    name: "Quinndary Weatherspoon",
    __v: NumberInt("0"),
    fantasyId: "6237"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97626f"),
    name: "Jarrell Brantley",
    __v: NumberInt("0"),
    fantasyId: "6238"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976272"),
    name: "Tremont Waters",
    __v: NumberInt("0"),
    fantasyId: "6239"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976275"),
    name: "Jalen McDaniels",
    __v: NumberInt("0"),
    fantasyId: "6240"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976278"),
    name: "Kyle Guy",
    __v: NumberInt("0"),
    fantasyId: "6243"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97627b"),
    name: "Miye Oni",
    __v: NumberInt("0"),
    fantasyId: "6246"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97627e"),
    name: "Jaylen Hoard",
    __v: NumberInt("0"),
    fantasyId: "6249"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976281"),
    name: "Jalen Lecque",
    __v: NumberInt("0"),
    fantasyId: "6251"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976284"),
    name: "Adam Mokoka",
    __v: NumberInt("0"),
    fantasyId: "6252"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976287"),
    name: "Naz Reid",
    __v: NumberInt("0"),
    fantasyId: "6253"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97628a"),
    name: "Luguentz Dort",
    __v: NumberInt("0"),
    fantasyId: "6254"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d97628d"),
    name: "John Konchar",
    __v: NumberInt("0"),
    fantasyId: "6255"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976290"),
    name: "Dean Wade",
    __v: NumberInt("0"),
    fantasyId: "6256"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976293"),
    name: "Jeremiah Martin",
    __v: NumberInt("0"),
    fantasyId: "6257"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976296"),
    name: "Chris Silva",
    __v: NumberInt("0"),
    fantasyId: "6258"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91dad5be11b41d976299"),
    name: "Garrison Mathews",
    __v: NumberInt("0"),
    fantasyId: "6259"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d97629c"),
    name: "Matt Thomas",
    __v: NumberInt("0"),
    fantasyId: "6264"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d97629f"),
    name: "Zylan Cheatham",
    __v: NumberInt("0"),
    fantasyId: "6266"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762a2"),
    name: "Max Strus",
    __v: NumberInt("0"),
    fantasyId: "6267"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762a5"),
    name: "Tacko Fall",
    __v: NumberInt("0"),
    fantasyId: "6268"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762a8"),
    name: "Javonte Green",
    __v: NumberInt("0"),
    fantasyId: "6269"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762ab"),
    name: "Nicolo Melli",
    __v: NumberInt("0"),
    fantasyId: "6270"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762ae"),
    name: "Dakota Mathias",
    __v: NumberInt("0"),
    fantasyId: "6271"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762b1"),
    name: "Caleb Martin",
    __v: NumberInt("0"),
    fantasyId: "6275"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762b4"),
    name: "DaQuan Jeffries",
    __v: NumberInt("0"),
    fantasyId: "6276"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762b7"),
    name: "Justin Robinson",
    __v: NumberInt("0"),
    fantasyId: "6279"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762ba"),
    name: "Terence Davis",
    __v: NumberInt("0"),
    fantasyId: "6280"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762bd"),
    name: "Kelan Martin",
    __v: NumberInt("0"),
    fantasyId: "6281"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762c0"),
    name: "Tyler Cook",
    __v: NumberInt("0"),
    fantasyId: "6282"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762c3"),
    name: "Hassani Gravett",
    __v: NumberInt("0"),
    fantasyId: "6283"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762c6"),
    name: "Juwan Morgan",
    __v: NumberInt("0"),
    fantasyId: "6284"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762c9"),
    name: "Armoni Brooks",
    __v: NumberInt("0"),
    fantasyId: "6285"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762cc"),
    name: "Moses Brown",
    __v: NumberInt("0"),
    fantasyId: "6289"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762cf"),
    name: "Oshae Brissett",
    __v: NumberInt("0"),
    fantasyId: "6290"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762d2"),
    name: "Devontae Cacok",
    __v: NumberInt("0"),
    fantasyId: "6292"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762d5"),
    name: "Charlie Brown",
    __v: NumberInt("0"),
    fantasyId: "6293"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762d8"),
    name: "Brian Bowen II",
    __v: NumberInt("0"),
    fantasyId: "6294"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762db"),
    name: "Mychal Mulder",
    __v: NumberInt("0"),
    fantasyId: "6307"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762de"),
    name: "Robert Franks",
    __v: NumberInt("0"),
    fantasyId: "6308"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762e1"),
    name: "Chris Clemons",
    __v: NumberInt("0"),
    fantasyId: "6312"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e91ddd5be11b41d9762e4"),
    name: "Amir Coffey",
    __v: NumberInt("0"),
    fantasyId: "6315"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762e7"),
    name: "Jared Harper",
    __v: NumberInt("0"),
    fantasyId: "6322"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762ea"),
    name: "Marques Bolden",
    __v: NumberInt("0"),
    fantasyId: "6326"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762ed"),
    name: "Daulton Hommes",
    __v: NumberInt("0"),
    fantasyId: "6327"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762f0"),
    name: "Juan Toscano-Anderson",
    __v: NumberInt("0"),
    fantasyId: "6329"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762f3"),
    name: "Keljin Blevins",
    __v: NumberInt("0"),
    fantasyId: "6330"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762f6"),
    name: "Donta Hall",
    __v: NumberInt("0"),
    fantasyId: "6334"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762f9"),
    name: "Louis King",
    __v: NumberInt("0"),
    fantasyId: "6335"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762fc"),
    name: "Rayjon Tucker",
    __v: NumberInt("0"),
    fantasyId: "6337"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d9762ff"),
    name: "Devin Cannady",
    __v: NumberInt("0"),
    fantasyId: "6342"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976302"),
    name: "Gabe Vincent",
    __v: NumberInt("0"),
    fantasyId: "6353"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976305"),
    name: "Jontay Porter",
    __v: NumberInt("0"),
    fantasyId: "6354"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976308"),
    name: "Anthony Edwards",
    __v: NumberInt("0"),
    fantasyId: "6355"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97630b"),
    name: "James Wiseman",
    __v: NumberInt("0"),
    fantasyId: "6356"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97630e"),
    name: "LaMelo Ball",
    __v: NumberInt("0"),
    fantasyId: "6395"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976311"),
    name: "Patrick Williams",
    __v: NumberInt("0"),
    fantasyId: "6396"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976314"),
    name: "Isaac Okoro",
    __v: NumberInt("0"),
    fantasyId: "6397"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976317"),
    name: "Onyeka Okongwu",
    __v: NumberInt("0"),
    fantasyId: "6398"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97631a"),
    name: "Killian Hayes",
    __v: NumberInt("0"),
    fantasyId: "6399"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97631d"),
    name: "Obi Toppin",
    __v: NumberInt("0"),
    fantasyId: "6400"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976320"),
    name: "Deni Avdija",
    __v: NumberInt("0"),
    fantasyId: "6401"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976323"),
    name: "Jalen Smith",
    __v: NumberInt("0"),
    fantasyId: "6402"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976326"),
    name: "Devin Vassell",
    __v: NumberInt("0"),
    fantasyId: "6403"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d976329"),
    name: "Tyrese Haliburton",
    __v: NumberInt("0"),
    fantasyId: "6404"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97632c"),
    name: "Kira Lewis Jr.",
    __v: NumberInt("0"),
    fantasyId: "6405"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9201d5be11b41d97632f"),
    name: "Aaron Nesmith",
    __v: NumberInt("0"),
    fantasyId: "6406"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976332"),
    name: "Cole Anthony",
    __v: NumberInt("0"),
    fantasyId: "6407"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976335"),
    name: "Isaiah Stewart",
    __v: NumberInt("0"),
    fantasyId: "6408"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976338"),
    name: "Aleksej Pokusevski",
    __v: NumberInt("0"),
    fantasyId: "6409"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97633b"),
    name: "Josh Green",
    __v: NumberInt("0"),
    fantasyId: "6410"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97633e"),
    name: "Saddiq Bey",
    __v: NumberInt("0"),
    fantasyId: "6411"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976341"),
    name: "Precious Achiuwa",
    __v: NumberInt("0"),
    fantasyId: "6412"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976344"),
    name: "Tyrese Maxey",
    __v: NumberInt("0"),
    fantasyId: "6413"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976347"),
    name: "Zeke Nnaji",
    __v: NumberInt("0"),
    fantasyId: "6414"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97634a"),
    name: "Leandro Bolmaro",
    __v: NumberInt("0"),
    fantasyId: "6415"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97634d"),
    name: "R.J. Hampton",
    __v: NumberInt("0"),
    fantasyId: "6416"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976350"),
    name: "Immanuel Quickley",
    __v: NumberInt("0"),
    fantasyId: "6417"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976353"),
    name: "Payton Pritchard",
    __v: NumberInt("0"),
    fantasyId: "6418"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976356"),
    name: "Udoka Azubuike",
    __v: NumberInt("0"),
    fantasyId: "6419"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976359"),
    name: "Jaden McDaniels",
    __v: NumberInt("0"),
    fantasyId: "6420"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97635c"),
    name: "Malachi Flynn",
    __v: NumberInt("0"),
    fantasyId: "6421"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97635f"),
    name: "Desmond Bane",
    __v: NumberInt("0"),
    fantasyId: "6422"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976362"),
    name: "Tyrell Terry",
    __v: NumberInt("0"),
    fantasyId: "6423"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976365"),
    name: "Vernon Carey Jr.",
    __v: NumberInt("0"),
    fantasyId: "6424"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976368"),
    name: "Daniel Oturu",
    __v: NumberInt("0"),
    fantasyId: "6425"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97636b"),
    name: "Theo Maledon",
    __v: NumberInt("0"),
    fantasyId: "6426"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97636e"),
    name: "Xavier Tillman",
    __v: NumberInt("0"),
    fantasyId: "6427"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976371"),
    name: "Tyler Bey",
    __v: NumberInt("0"),
    fantasyId: "6428"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976374"),
    name: "Vit Krejci",
    __v: NumberInt("0"),
    fantasyId: "6429"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d976377"),
    name: "Saben Lee",
    __v: NumberInt("0"),
    fantasyId: "6430"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9205d5be11b41d97637a"),
    name: "Elijah Hughes",
    __v: NumberInt("0"),
    fantasyId: "6431"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d97637d"),
    name: "Robert Woodard II",
    __v: NumberInt("0"),
    fantasyId: "6432"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976380"),
    name: "Tre Jones",
    __v: NumberInt("0"),
    fantasyId: "6433"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976383"),
    name: "Nick Richards",
    __v: NumberInt("0"),
    fantasyId: "6434"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976386"),
    name: "Jahmi'us Ramsey",
    __v: NumberInt("0"),
    fantasyId: "6435"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976389"),
    name: "Marko Simonovic",
    __v: NumberInt("0"),
    fantasyId: "6436"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d97638c"),
    name: "Jordan Nwora",
    __v: NumberInt("0"),
    fantasyId: "6437"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d97638f"),
    name: "CJ Elleby",
    __v: NumberInt("0"),
    fantasyId: "6438"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976392"),
    name: "Nico Mannion",
    __v: NumberInt("0"),
    fantasyId: "6440"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976395"),
    name: "Isaiah Joe",
    __v: NumberInt("0"),
    fantasyId: "6441"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d976398"),
    name: "Skylar Mays",
    __v: NumberInt("0"),
    fantasyId: "6442"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d97639b"),
    name: "KJ Martin Jr.",
    __v: NumberInt("0"),
    fantasyId: "6444"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d97639e"),
    name: "Cassius Winston",
    __v: NumberInt("0"),
    fantasyId: "6445"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763a1"),
    name: "Cassius Stanley",
    __v: NumberInt("0"),
    fantasyId: "6446"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763a4"),
    name: "Jay Scrubb",
    __v: NumberInt("0"),
    fantasyId: "6447"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763a7"),
    name: "Grant Riller",
    __v: NumberInt("0"),
    fantasyId: "6448"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763aa"),
    name: "Reggie Perry",
    __v: NumberInt("0"),
    fantasyId: "6449"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763ad"),
    name: "Paul Reed",
    __v: NumberInt("0"),
    fantasyId: "6450"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763b0"),
    name: "Jalen Harris",
    __v: NumberInt("0"),
    fantasyId: "6451"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763b3"),
    name: "Sam Merrill",
    __v: NumberInt("0"),
    fantasyId: "6452"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763b6"),
    name: "Mason Jones",
    __v: NumberInt("0"),
    fantasyId: "6453"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763b9"),
    name: "Devon Dotson",
    __v: NumberInt("0"),
    fantasyId: "6454"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763bc"),
    name: "Ty-Shon Alexander",
    __v: NumberInt("0"),
    fantasyId: "6455"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763bf"),
    name: "Mamadi Diakite",
    __v: NumberInt("0"),
    fantasyId: "6456"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763c2"),
    name: "Lamar Stevens",
    __v: NumberInt("0"),
    fantasyId: "6459"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920bd5be11b41d9763c5"),
    name: "Killian Tillie",
    __v: NumberInt("0"),
    fantasyId: "6460"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920ed5be11b41d9763c8"),
    name: "Sean McDermott",
    __v: NumberInt("0"),
    fantasyId: "6461"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920ed5be11b41d9763cb"),
    name: "Nathan Knight",
    __v: NumberInt("0"),
    fantasyId: "6462"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763ce"),
    name: "Jae'Sean Tate",
    __v: NumberInt("0"),
    fantasyId: "6463"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763d1"),
    name: "Trent Forrest",
    __v: NumberInt("0"),
    fantasyId: "6464"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763d4"),
    name: "Ashton Hagans",
    __v: NumberInt("0"),
    fantasyId: "6465"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763d7"),
    name: "Markus Howard",
    __v: NumberInt("0"),
    fantasyId: "6466"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763da"),
    name: "Facundo Campazzo",
    __v: NumberInt("0"),
    fantasyId: "6468"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763dd"),
    name: "Freddie Gillespie",
    __v: NumberInt("0"),
    fantasyId: "6469"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763e0"),
    name: "Anthony Gill",
    __v: NumberInt("0"),
    fantasyId: "6471"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763e3"),
    name: "Nate Hinton",
    __v: NumberInt("0"),
    fantasyId: "6472"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763e6"),
    name: "Nate Darling",
    __v: NumberInt("0"),
    fantasyId: "6474"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763e9"),
    name: "Javin DeLaurier",
    __v: NumberInt("0"),
    fantasyId: "6475"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763ec"),
    name: "Xavier Sneed",
    __v: NumberInt("0"),
    fantasyId: "6476"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763ef"),
    name: "Jordan Bowden",
    __v: NumberInt("0"),
    fantasyId: "6478"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763f2"),
    name: "Malik Fitts",
    __v: NumberInt("0"),
    fantasyId: "6480"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763f5"),
    name: "Brodric Thomas",
    __v: NumberInt("0"),
    fantasyId: "6483"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763f8"),
    name: "Myles Powell",
    __v: NumberInt("0"),
    fantasyId: "6489"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763fb"),
    name: "Jon Teske",
    __v: NumberInt("0"),
    fantasyId: "6490"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d9763fe"),
    name: "Caleb Homesley",
    __v: NumberInt("0"),
    fantasyId: "6492"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d976401"),
    name: "Anthony Lamb",
    __v: NumberInt("0"),
    fantasyId: "6496"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d976404"),
    name: "Karim Mane",
    __v: NumberInt("0"),
    fantasyId: "6497"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d976407"),
    name: "Josh Hall",
    __v: NumberInt("0"),
    fantasyId: "6498"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d97640a"),
    name: "Naji Marshall",
    __v: NumberInt("0"),
    fantasyId: "6499"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d97640d"),
    name: "Trevelin Queen",
    __v: NumberInt("0"),
    fantasyId: "6500"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e920fd5be11b41d976410"),
    name: "Shaq Buchanan",
    __v: NumberInt("0"),
    fantasyId: "6506"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976413"),
    name: "Gabriel Deck",
    __v: NumberInt("0"),
    fantasyId: "6508"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976416"),
    name: "Luca Vildoza",
    __v: NumberInt("0"),
    fantasyId: "6509"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976419"),
    name: "Elijah Bryant",
    __v: NumberInt("0"),
    fantasyId: "6510"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97641c"),
    name: "Omer Yurtseven",
    __v: NumberInt("0"),
    fantasyId: "6511"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97641f"),
    name: "Cade Cunningham",
    __v: NumberInt("0"),
    fantasyId: "6512"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976422"),
    name: "Jalen Green",
    __v: NumberInt("0"),
    fantasyId: "6513"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976425"),
    name: "Evan Mobley",
    __v: NumberInt("0"),
    fantasyId: "6514"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976428"),
    name: "Scottie Barnes",
    __v: NumberInt("0"),
    fantasyId: "6515"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97642b"),
    name: "Jalen Suggs",
    __v: NumberInt("0"),
    fantasyId: "6516"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97642e"),
    name: "Josh Giddey",
    __v: NumberInt("0"),
    fantasyId: "6548"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976431"),
    name: "Jonathan Kuminga",
    __v: NumberInt("0"),
    fantasyId: "6549"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976434"),
    name: "Franz Wagner",
    __v: NumberInt("0"),
    fantasyId: "6550"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976437"),
    name: "Davion Mitchell",
    __v: NumberInt("0"),
    fantasyId: "6551"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97643a"),
    name: "Ziaire Williams",
    __v: NumberInt("0"),
    fantasyId: "6552"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97643d"),
    name: "James Bouknight",
    __v: NumberInt("0"),
    fantasyId: "6553"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976440"),
    name: "Joshua Primo",
    __v: NumberInt("0"),
    fantasyId: "6554"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976443"),
    name: "Chris Duarte",
    __v: NumberInt("0"),
    fantasyId: "6555"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976446"),
    name: "Moses Moody",
    __v: NumberInt("0"),
    fantasyId: "6556"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976449"),
    name: "Corey Kispert",
    __v: NumberInt("0"),
    fantasyId: "6557"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97644c"),
    name: "Alperen Sengun",
    __v: NumberInt("0"),
    fantasyId: "6558"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97644f"),
    name: "Trey Murphy III",
    __v: NumberInt("0"),
    fantasyId: "6559"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976452"),
    name: "Tre Mann",
    __v: NumberInt("0"),
    fantasyId: "6560"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976455"),
    name: "Kai Jones",
    __v: NumberInt("0"),
    fantasyId: "6561"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d976458"),
    name: "Jalen Johnson",
    __v: NumberInt("0"),
    fantasyId: "6562"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9212d5be11b41d97645b"),
    name: "Keon Johnson",
    __v: NumberInt("0"),
    fantasyId: "6563"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97645e"),
    name: "Isaiah Jackson",
    __v: NumberInt("0"),
    fantasyId: "6564"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976461"),
    name: "Usman Garuba",
    __v: NumberInt("0"),
    fantasyId: "6565"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976464"),
    name: "Josh Christopher",
    __v: NumberInt("0"),
    fantasyId: "6566"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976467"),
    name: "Quentin Grimes",
    __v: NumberInt("0"),
    fantasyId: "6567"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97646a"),
    name: "Bones Hyland",
    __v: NumberInt("0"),
    fantasyId: "6568"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97646d"),
    name: "Cameron Thomas",
    __v: NumberInt("0"),
    fantasyId: "6569"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976470"),
    name: "Jaden Springer",
    __v: NumberInt("0"),
    fantasyId: "6570"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976473"),
    name: "Day'Ron Sharpe",
    __v: NumberInt("0"),
    fantasyId: "6571"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976476"),
    name: "Santi Aldama",
    __v: NumberInt("0"),
    fantasyId: "6572"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976479"),
    name: "Isaiah Todd",
    __v: NumberInt("0"),
    fantasyId: "6573"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97647c"),
    name: "Jeremiah Robinson-Earl",
    __v: NumberInt("0"),
    fantasyId: "6574"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97647f"),
    name: "Jason Preston",
    __v: NumberInt("0"),
    fantasyId: "6575"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976482"),
    name: "Rokas Jokubaitis",
    __v: NumberInt("0"),
    fantasyId: "6576"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976485"),
    name: "Herbert Jones",
    __v: NumberInt("0"),
    fantasyId: "6577"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976488"),
    name: "Miles McBride",
    __v: NumberInt("0"),
    fantasyId: "6578"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97648b"),
    name: "JT Thor",
    __v: NumberInt("0"),
    fantasyId: "6579"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97648e"),
    name: "Ayo Dosunmu",
    __v: NumberInt("0"),
    fantasyId: "6580"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976491"),
    name: "Neemias Queta",
    __v: NumberInt("0"),
    fantasyId: "6581"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976494"),
    name: "Jared Butler",
    __v: NumberInt("0"),
    fantasyId: "6582"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d976497"),
    name: "Joe Wieskamp",
    __v: NumberInt("0"),
    fantasyId: "6583"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97649a"),
    name: "Isaiah Livers",
    __v: NumberInt("0"),
    fantasyId: "6584"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d97649d"),
    name: "Greg Brown",
    __v: NumberInt("0"),
    fantasyId: "6585"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d9764a0"),
    name: "Kessler Edwards",
    __v: NumberInt("0"),
    fantasyId: "6586"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d9764a3"),
    name: "Juhann Begarin",
    __v: NumberInt("0"),
    fantasyId: "6587"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9216d5be11b41d9764a6"),
    name: "Dalano Banton",
    __v: NumberInt("0"),
    fantasyId: "6588"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764a9"),
    name: "David Johnson",
    __v: NumberInt("0"),
    fantasyId: "6589"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764ac"),
    name: "Sharife Cooper",
    __v: NumberInt("0"),
    fantasyId: "6590"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764af"),
    name: "Marcus Zegarowski",
    __v: NumberInt("0"),
    fantasyId: "6591"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764b2"),
    name: "Filip Petrusev",
    __v: NumberInt("0"),
    fantasyId: "6592"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764b5"),
    name: "Brandon Boston Jr.",
    __v: NumberInt("0"),
    fantasyId: "6593"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764b8"),
    name: "Luka Garza",
    __v: NumberInt("0"),
    fantasyId: "6594"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764bb"),
    name: "Charles Bassey",
    __v: NumberInt("0"),
    fantasyId: "6595"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764be"),
    name: "Sandro Mamukelashvili",
    __v: NumberInt("0"),
    fantasyId: "6596"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764c1"),
    name: "Aaron Wiggins",
    __v: NumberInt("0"),
    fantasyId: "6597"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764c4"),
    name: "Scottie Lewis",
    __v: NumberInt("0"),
    fantasyId: "6598"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764c7"),
    name: "Balsa Koprivica",
    __v: NumberInt("0"),
    fantasyId: "6599"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764ca"),
    name: "Jericho Sims",
    __v: NumberInt("0"),
    fantasyId: "6600"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764cd"),
    name: "RaiQuan Gray",
    __v: NumberInt("0"),
    fantasyId: "6601"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764d0"),
    name: "Georgios Kalaitzakis",
    __v: NumberInt("0"),
    fantasyId: "6602"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764d3"),
    name: "AJ Lawson",
    __v: NumberInt("0"),
    fantasyId: "6603"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764d6"),
    name: "Trendon Watford",
    __v: NumberInt("0"),
    fantasyId: "6604"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764d9"),
    name: "Joel Ayayi",
    __v: NumberInt("0"),
    fantasyId: "6605"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764dc"),
    name: "Austin Reaves",
    __v: NumberInt("0"),
    fantasyId: "6606"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764df"),
    name: "Duane Washington Jr.",
    __v: NumberInt("0"),
    fantasyId: "6607"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764e2"),
    name: "McKinley Wright IV",
    __v: NumberInt("0"),
    fantasyId: "6608"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764e5"),
    name: "Terry Taylor",
    __v: NumberInt("0"),
    fantasyId: "6609"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764e8"),
    name: "Aaron Henry",
    __v: NumberInt("0"),
    fantasyId: "6610"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764eb"),
    name: "Matthew Hurt",
    __v: NumberInt("0"),
    fantasyId: "6611"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764ee"),
    name: "Chris Smith",
    __v: NumberInt("0"),
    fantasyId: "6612"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921bd5be11b41d9764f1"),
    name: "Jose Alvarado",
    __v: NumberInt("0"),
    fantasyId: "6613"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d9764f4"),
    name: "Jock Landale",
    __v: NumberInt("0"),
    fantasyId: "6614"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d9764f7"),
    name: "Jaime Echenique",
    __v: NumberInt("0"),
    fantasyId: "6615"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d9764fa"),
    name: "Jordan Goodwin",
    __v: NumberInt("0"),
    fantasyId: "6616"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d9764fd"),
    name: "Jay Huff",
    __v: NumberInt("0"),
    fantasyId: "6617"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976500"),
    name: "MaCio Teague",
    __v: NumberInt("0"),
    fantasyId: "6618"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976503"),
    name: "Sam Hauser",
    __v: NumberInt("0"),
    fantasyId: "6619"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976506"),
    name: "Eugene Omoruyi",
    __v: NumberInt("0"),
    fantasyId: "6620"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976509"),
    name: "DeJon Jarreau",
    __v: NumberInt("0"),
    fantasyId: "6621"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97650c"),
    name: "Aamir Simms",
    __v: NumberInt("0"),
    fantasyId: "6622"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97650f"),
    name: "M.J. Walker",
    __v: NumberInt("0"),
    fantasyId: "6623"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976512"),
    name: "David Duke Jr",
    __v: NumberInt("0"),
    fantasyId: "6624"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976515"),
    name: "D.J. Carton",
    __v: NumberInt("0"),
    fantasyId: "6625"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976518"),
    name: "Daishen Nix",
    __v: NumberInt("0"),
    fantasyId: "6626"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97651b"),
    name: "Chaundee Brown Jr.",
    __v: NumberInt("0"),
    fantasyId: "6627"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97651e"),
    name: "Mac McClung",
    __v: NumberInt("0"),
    fantasyId: "6628"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976521"),
    name: "Yves Pons",
    __v: NumberInt("0"),
    fantasyId: "6629"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976524"),
    name: "D.J. Stewart Jr.",
    __v: NumberInt("0"),
    fantasyId: "6630"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976527"),
    name: "Aaron Sims",
    __v: NumberInt("0"),
    fantasyId: "6631"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97652a"),
    name: "Justin Champagnie",
    __v: NumberInt("0"),
    fantasyId: "6632"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d97652d"),
    name: "Ish Wainright",
    __v: NumberInt("0"),
    fantasyId: "6633"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e921fd5be11b41d976530"),
    name: "Marcus Garrett",
    __v: NumberInt("0"),
    fantasyId: "6634"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9220d5be11b41d976533"),
    name: "JaQuori McLaughlin",
    __v: NumberInt("0"),
    fantasyId: "6635"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9220d5be11b41d976536"),
    name: "Jeff Dowtin",
    __v: NumberInt("0"),
    fantasyId: "6636"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9220d5be11b41d976539"),
    name: "Ethan Thompson",
    __v: NumberInt("0"),
    fantasyId: "6637"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9220d5be11b41d97653c"),
    name: "Feron Hunt",
    __v: NumberInt("0"),
    fantasyId: "6638"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97653f"),
    name: "Carlik Jones",
    __v: NumberInt("0"),
    fantasyId: "6639"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976542"),
    name: "Kevin Pangos",
    __v: NumberInt("0"),
    fantasyId: "6640"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976545"),
    name: "Moses Wright",
    __v: NumberInt("0"),
    fantasyId: "6641"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976548"),
    name: "Mitch Ballock",
    __v: NumberInt("0"),
    fantasyId: "6642"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97654b"),
    name: "RJ Nembhard",
    __v: NumberInt("0"),
    fantasyId: "6643"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97654e"),
    name: "Jamorko Pickett",
    __v: NumberInt("0"),
    fantasyId: "6644"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976551"),
    name: "Matt Lewis",
    __v: NumberInt("0"),
    fantasyId: "6645"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976554"),
    name: "Isaiah Miller",
    __v: NumberInt("0"),
    fantasyId: "6646"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976557"),
    name: "Rob Edwards",
    __v: NumberInt("0"),
    fantasyId: "6647"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97655a"),
    name: "Derrick Alston Jr.",
    __v: NumberInt("0"),
    fantasyId: "6648"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97655d"),
    name: "Jordan Schakel",
    __v: NumberInt("0"),
    fantasyId: "6649"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976560"),
    name: "Matt Coleman III",
    __v: NumberInt("0"),
    fantasyId: "6650"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976563"),
    name: "DJ Steward",
    __v: NumberInt("0"),
    fantasyId: "6651"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976566"),
    name: "Dru Smith",
    __v: NumberInt("0"),
    fantasyId: "6652"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976569"),
    name: "Javonte Smart",
    __v: NumberInt("0"),
    fantasyId: "6653"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97656c"),
    name: "Matt Ryan",
    __v: NumberInt("0"),
    fantasyId: "6654"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97656f"),
    name: "Micah Potter",
    __v: NumberInt("0"),
    fantasyId: "6655"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976572"),
    name: "Jeremiah Tilmon",
    __v: NumberInt("0"),
    fantasyId: "6656"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976575"),
    name: "Denzel Mahoney",
    __v: NumberInt("0"),
    fantasyId: "6657"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976578"),
    name: "Romeo Weems",
    __v: NumberInt("0"),
    fantasyId: "6658"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97657b"),
    name: "James Banks III",
    __v: NumberInt("0"),
    fantasyId: "6659"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d97657e"),
    name: "Malcolm Hill",
    __v: NumberInt("0"),
    fantasyId: "6660"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976581"),
    name: "Jalen Crutcher",
    __v: NumberInt("0"),
    fantasyId: "6661"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976584"),
    name: "Cameron McGriff",
    __v: NumberInt("0"),
    fantasyId: "6662"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9223d5be11b41d976587"),
    name: "Brandon Rachal",
    __v: NumberInt("0"),
    fantasyId: "6663"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9227d5be11b41d97658a"),
    name: "Giorgi Bezhanishvili",
    __v: NumberInt("0"),
    fantasyId: "6664"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9227d5be11b41d97658d"),
    name: "Nino Johnson",
    __v: NumberInt("0"),
    fantasyId: "6665"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9227d5be11b41d976590"),
    name: "Ibi Watson",
    __v: NumberInt("0"),
    fantasyId: "6666"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9227d5be11b41d976593"),
    name: "Troy Baxter",
    __v: NumberInt("0"),
    fantasyId: "6667"
} ]);
db.getCollection("player").insert([ {
    _id: ObjectId("616e9227d5be11b41d976596"),
    name: "LJ Figueroa",
    __v: NumberInt("0"),
    fantasyId: "6668"
} ]);
// session.commitTransaction();
session.endSession();
