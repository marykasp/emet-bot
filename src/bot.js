require("dotenv").config();
const { TOKEN } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

// create new client
const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];
// client.colour = ""

// get all the folders from src functions folder
const functionFolders = fs.readdirSync(`./src/functions`);
// iterate over functionFolders array and read the folders
for (const folder of functionFolders) {
  // grab the files that end with .js - use filter method
  // return an array of the files that end with .js
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));

  // for each of those files passing clients to each of those files
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

client.login(TOKEN);
