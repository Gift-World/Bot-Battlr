// import React, { useState } from "react";
import SingleBot from "./SingleBot";

function YourBotArmy({ botArmy }) {
  return (
    <div>
      <h1>YourBotArmy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {botArmy.map((bot) => (
          <div
            key={bot.id}
            className="border p-4 rounded-lg shadow-md hover:bg-gray-100 "
          >
            <div>
              <h1> Name : {bot.name}</h1>
            </div>
            <div>
              <span>Health : {bot.health}</span>
            </div>
            <div>
              <p>Damage : {bot.damage}</p>
            </div>
            <div>
              <p>Armor : {bot.armor}</p>
            </div>
            <div>
              <p>Class : {bot.bot_class}</p>
            </div>
            <div>
              <p>
                {" "}
                Phrase : <br></br>
                {bot.catchphrase}
              </p>
            </div>
            <div>
              <img src={bot.avatar_url} alt="Bot"></img>
            </div>
            <div>
              <p>{bot.created_at}</p>
            </div>
            <div>
              <p>{bot.updated_at}</p>
            </div>
            <div>
              <button className="bg-red-500 text-white font-bold ">
                DELETE
              </button>
            </div>
          </div>
          // <SingleBot key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
