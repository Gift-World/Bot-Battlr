import React, { useState } from "react";

import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [botArmy, setBotArmy] = useState([]);
  function addBotToArmy  (bot)  {
    if (!botArmy.find((bots) => bots.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };
  const removeBotArmy = (botId) => {
    setBotArmy(botArmy.filter((bot) => bot.id !== botId));
  };
  return (
    <>
      <div className="bg-blue-700">
        <h1 className="font-extrabold text-5xl text-red-900 text-center">
          Bot Battlr
        </h1>
      </div>
      <YourBotArmy botArmy={botArmy} removeBotArmy={removeBotArmy} />
      <BotCollection addBotToArmy={addBotToArmy} />
    </>
  );
}

export default App;
