import React, { useEffect, useState } from "react";
import SingleBot from "./SingleBot";

function BotCollection() {
  const [BotList, setBotList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBotList(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {BotList.map((bot) => (
       <SingleBot bot={bot}/>
      ))}
      </div>
    </div>
  );
}

export default BotCollection;
