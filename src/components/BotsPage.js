import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

/**`BotPage` is the highest component below App, and serves as the main container
for all of the pieces of the page. */

function BotsPage() {

  
  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
