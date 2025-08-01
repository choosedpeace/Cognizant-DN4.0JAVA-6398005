import React from "react";

const IndianPlayers = () => {
  const team = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"];
  
  // Destructuring
  const [p1, p2, p3, p4, p5, p6] = team;

  // Separate into Odd & Even team players
  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  // Merge feature
  const T20players = ["Virat", "Rohit", "Gill"];
  const RanjiTrophyPlayers = ["Pujara", "Saha", "Unadkat"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
