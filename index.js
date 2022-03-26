const Discord = require("discord.js")



let client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})



client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "bro"){
        message.reply("bro 😐 ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "bruh"){
        message.reply("lmao ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "hello"){
        message.reply("hello to you too!")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "ping"){
        message.reply("pong ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "die"){
        message.reply("N O . ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "beep"){
        message.reply("**BOP.** ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "stinky"){
        message.reply("I dont smell anything... ")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "english"){
        message.reply("no entiendo ingles ")
    }
       
})

client.on("messageCreate", (message) => {
    if(message.content == "movie?"){
        message.reply("road trip. 2000")
    }
       
})
client.on("messageCreate", (message) => {
    if(message.content == "test"){
        message.reply("*what* ")
    }
       
})

const config = require('./config.json');


client.login(config.token)

client.login(TOKEN)