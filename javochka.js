const players = [
  { id: "player-1", name: "Mango", balance: 310, friends: ["venom","chinazes"], skills: ["bunnyhop","salto","fishing"] },
  { id: "player-2", name: "Poly", balance: 470, friends: ["bro"], skills: ["taping","gaming","salto"] },
  { id: "player-3", name: "Kiwi", balance: 230, friends: ["venom","zelnski","abaydna"], skills: ["running","swimming","gaining","salto"]  },
];
// Task 1
const calcBalance = players.reduce((acc, player) => acc + player.balance, 0);
console.log(calcBalance);
// Task 2
const findFriends = players.filter((player) => player.friends.includes("venom")).map((player) => player.name)
console.log(findFriends)
// Task 3
const copyPlayers = [...players]

const sortFriends = copyPlayers.sort((prevFriend, nextFriend) => prevFriend.friends.length - nextFriend.friends.length).map((player) => player.name)
console.log(sortFriends);
// Task 4
let allSkills = [];
const findSkills = players.forEach((player) => allSkills.push(...player.skills));

let uniqueSkills = [];
allSkills.forEach((skill) => {
  if (!uniqueSkills.includes(skill)) {
    uniqueSkills.push(skill);
  }
});

uniqueSkills.sort();
console.log(uniqueSkills);
