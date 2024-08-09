import React from "react";

function SingleBot({ bot }) {
  return (
    <div key={bot.id} className="border p-4 rounded-lg shadow-md hover:bg-gray-100 ">
      <div>
        <h1> Name  : {bot.name}</h1>
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
        <p> Phrase : <br></br>{bot.catchphrase}</p>
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
        <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          Add to your Army
        </button>
        <button className="bg-red-500 text-white font-bold ">
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleBot;
