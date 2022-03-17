var Discord = require("discord.js");
var client = new Discord.Client();
//const mySecret = process.env['token'];
//const Canal = client.channels.find(channel => channel.id === ("『🚨』alertas"));
require('dotenv').config();
var Alertas = require("./alertas.js");
var neoAlertas = require("./neoAlertas");



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
 
 client.on("message", async (message) => {
   if(message.content === "!alertas") {
     message.channel.send(await Alertas);
   }
  });

  client.on("message",  (message) => {
    if(message.content === "!neoAlertas") {
      message.channel.send(neoAlertas.patito2);
    }
   });

client.on("message",  (message) => {
   if(message.content === "ping") {
     message.channel.send("pong");
   }
});

 
 client.login(process.env.token);