import React, {useState, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

/**`BotPage` is the highest component below App, and serves as the main container
for all of the pieces of the page. */

function BotsPage() {

  const [bots, setBots] = useState([]);
  const [botArmy, setBotsArmy] = useState([]);

  //fetch request
  useEffect(() =>{
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(bots => setBots(bots))
  }, []);


  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
