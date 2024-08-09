// import logo from './logo.svg';
import React, { useState } from "react";
// import "../App.css";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [botArmy, setBotArmy] = useState([]);
  const addBotToArmy = (bot) => {
    if (!botArmy.find((bots) => bots.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };
  return (
    <>
      <div className="bg-blue-400">
        <h1 className="font-extrabold text-5xl text-red-900 text-center">Bot Battlr</h1>
      </div>
      <YourBotArmy botArmy={botArmy} />
      <BotCollection addBotToArmy={addBotToArmy} />
    </>
  );
}

export default App;
