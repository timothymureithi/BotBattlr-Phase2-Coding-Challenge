import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

/**`BotPage` is the highest component below App, and serves as the main container
for all of the pieces of the page. */

function BotsPage() {

  const [bots, setBots] = useState([]);
  const [botArmy, setBotsArmy] = useState([]);

  //fetch request to render profiles
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(bots => setBots(bots))
  }, []);

  //Create bot army
  function addBotsList(botData){
    if(!botArmy.find(bot => bot === botData)){
      const findBot = bots.find(bot => bot === botData)
      setBotsArmy([...botArmy, findBot])
    } 
  }

  //Delete bot
  function deletePermanently (botData){
  if(botArmy.find((bot) => bot === botData)){
    const filterBots = bots.filter(bot => bot !== botData)
    const filterBotArmy = botData.filter(bot => bot !== botData)

    setBots(filterBots)
    setBotsArmy(filterBotArmy)

    fetch(`http://localhost:8002/bots/${botData.id}`, {
      method: "DELETE"
    })
  }
}

  function dischargeBot(botData) {
    const botList = botArmy.filter((bot)=> bot !== botData)
    setBotsArmy(botList)
  }

//botArmy, removeBot, dischargeBot <YourBotArmy/>
//bots, addBot, dischargeBot <BotCollection/>

  return (
    <div>
      <YourBotArmy
       botArmy={botArmy} 
       removeBot={dischargeBot}
       dischargeBot={deletePermanently} />

      <BotCollection 
      bots={bots}
      addBot={addBotsList}
      dischargeBot={deletePermanently} />
    </div>
  )
}

export default BotsPage;
