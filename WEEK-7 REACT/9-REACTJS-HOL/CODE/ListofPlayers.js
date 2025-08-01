import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 95 },
    { name: "Dhoni", score: 88 },
    { name: "Hardik", score: 65 },
    { name: "Rahul", score: 40 },
    { name: "Gill", score: 78 },
    { name: "Surya", score: 55 },
    { name: "Bumrah", score: 72 },
    { name: "Shami", score: 60 },
    { name: "Jadeja", score: 50 },
    { name: "Ashwin", score: 30 }
  ];

  // Using map
  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  // Filter with arrow function
  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
