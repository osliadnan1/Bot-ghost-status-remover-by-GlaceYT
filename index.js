/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */



    const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
    require('dotenv').config();
    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const { Client } = require("discord.js");
    const readline = require("readline");

    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v9");
    const { DataResolver } = require("discord.js");

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
   const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((a) => {
      return GatewayIntentBits[a];
    }),
  });
  const app = express();
  const port = 3000;
  app.get('/', (req, res) => {
    res.send('YaY Your Bot Status Changed✨');
  });
  app.listen(port, () => {
    console.log(`🔗 Listening to Osli: http://localhost:${port}`);
    console.log(`🔗 Powered By Osli`);
  });
  


console.log("\x1b[36m=========================================\x1b[0m");
console.log("\x1b[35;47m          Welcome to GIF Master          \x1b[0m");
console.log("\x1b[36m=========================================\x1b[0m");
console.log("\x1b[35;47m        Developed by Science Gear        \x1b[0m");
console.log("\x1b[36m=========================================\x1b[0m");
console.log(" ");
console.log("\x1b[31mIf you don't trust us, you can reset your token after you've completed your work.\x1b[0m");
console.log(" ");
  
  const statusMessages = ["OsTeam™ Studio","Powerd By Osli"];
  
  
  let currentIndex = 0;
  const channelId = '';
  
  async function login() {
    try {
      await client.login(process.env.TOKEN);
      console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
    } catch (error) {
      console.error('Failed to log in:', error);
      process.exit(1);
    }
  }
  
  /**
   ██████╗░████████╗██╗░░██╗           
   ██╔══██╗╚══██╔══╝╚██╗██╔╝          
   ██████╔╝░░░██║░░░░╚███╔╝░          
   ██╔══██╗░░░██║░░░░██╔██╗░          
   ██║░░██║░░░██║░░░██╔╝╚██╗          
   ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
    DISCORD SERVER : https://discord.gg/FUEHs7RCqz
    YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
   * **********************************************
   *   Code by RTX GAMING
   * **********************************************
   */
  
  
  function updateStatusAndSendMessages() {
    const currentStatus = statusMessages[currentIndex];
    const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];
  
    client.user.setPresence({
      activities: [{ name: currentStatus, type: ActivityType.Custom}],
      status: 'dnd',
    });
  
    
    const textChannel = client.channels.cache.get(channelId);
  
    if (textChannel instanceof TextChannel) {
     
      textChannel.send(`Bot status is: ${currentStatus}`);
    } else {
  
    }
  
    currentIndex = (currentIndex + 1) % statusMessages.length;
  }

  const Client = new Client({ intents: "Guilds" });
  rl.question("Enter your Discord bot token: ", async (token) => {
    process.env.TOKEN = token;
  client.once('ready', () => {
    rl.question("Enter the URL for your avatar (or press Enter to skip): ", async (avatarURL) => {
        // Setting avatar
        if (avatarURL) {
          try {
            await client.user.setAvatar(avatarURL);
            console.log("Avatar changed successfully!");
          } catch (error) {
            console.error("Error changing avatar:", error);
          }
        }
  
        // Banner URL input
        rl.question("Enter the URL for your banner (or press Enter to skip): ", async (bannerURL) => {
          // Setting banner
          if (bannerURL) {
            const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);
            try {
              await rest.patch(Routes.user(), {
                body: { banner: await DataResolver.resolveImage(bannerURL) },
              });
              console.log("Banner changed successfully!");
            } catch (error) {
              console.error("Error changing banner:", error);
            }
          }
  
          // Close readline interface and exit process
          rl.close();
          process.exit(0);
        });
      });
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
    console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
    updateStatusAndSendMessages();
  
    setInterval(() => {
      updateStatusAndSendMessages();
    }, 10000);
  });
  login();
});
