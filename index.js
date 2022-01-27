const Discord = require("discord.js");
const client = new Discord.Client();
//const mySecret = process.env['token'];
//const Canal = client.channels.find(channel => channel.id === ("『🚨』alertas"));
require('dotenv').config();
const Alertas = require("./alertas.js");



function presence(){
  client.user.setPresence({
    status: "online",
    activity: {
      name: "DIEGO TEAM",
      type: 1
    }
  });
}



client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
 client.on("message",  (message) => {
   if(message.content === "!alertas") {
     message.channel.send(Alertas.patito);
   }
  });

client.on("message",  (message) => {
   if(message.content === "ping") {
     message.channel.send("pong");
   }
});

 
 client.login(process.env.token);