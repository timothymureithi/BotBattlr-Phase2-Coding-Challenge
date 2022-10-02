import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({dischargeBot, bots, removeBot}) {
/**Discharge a bot from their service forever, by clicking the red button marked
  "x" */
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard bot={bot} 
            handleBot={removeBot}
            handleDeleteBot={dischargeBot}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
