const Discord = require("discord.js");
const client = new Discord.Client();
//const mySecret = process.env['token'];
//const Canal = client.channels.find(channel => channel.id === ("『🚨』alertas"));
require('dotenv').config();
const Alertas = require("./alertas.js");
const args = message.content.slice(prefix.length).trim().split();
const command = args.shift().toLowerCase();

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
   if(command === "ping") {
     message.channel.send("pong");
   }
});
 
 client.login(process.env.token);