const Discord = require("discord.js");
const client = new Discord.Client();
//const mySecret = process.env['token'];
require('dotenv').config();
const Alertas = require("./alertas.js");
//const Canal = client.channels.find(channel => channel.id === ("『🚨』alertas"));

function presence(){
  client.user.setPresence({
    status: "online",
    activity: {
      name: "ser DIEGO TEAM",
      type: "PLAYINg"
    }
  });
}



client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
 client.on("message",  (message) => {
   if(message.content.startsWith("!alertas")) {
     message.channel.send(Alertas.patito);
   }
  });

client.on("message",  (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong");
   }
});
 
 client.login(process.env.token);