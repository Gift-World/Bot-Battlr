import React, { useEffect, useState } from "react";
import SingleBot from "./SingleBot";

function BotCollection({ addBotToArmy }) {
  const [BotList, setBotList] = useState([]);

  useEffect(() => {
    fetch("https://bot-battlr-back-end.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBotList(data))
      .catch((error) => console.log(error));
  }, []);
  const handleOnDelete = (id) => {
    fetch(`https://bot-battlr-back-end.vercel.app/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(res => res.json())
      .then((data) => {
        if (data.ok) {
          setBotList((initialBotList) =>
            initialBotList.filter((bot) => bot.id !== id)
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BotList.map((bot) => (
          <SingleBot
            bot={bot}
            addBotToArmy={addBotToArmy}
            handleOnDelete={() => handleOnDelete(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
