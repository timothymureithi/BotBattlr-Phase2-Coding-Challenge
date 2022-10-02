import React from "react";
import BotCard from "./BotCard";

function YourBotArmy ({botArmy, removeBot, dischargeBot}) {
  //your bot army code here...



//BotCard -> bot, botCard, handleDischargeBot 
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
          <BotCard 
          bot={bot} 
          botCard={removeBot}
          dischargeBot={dischargeBot}/>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
