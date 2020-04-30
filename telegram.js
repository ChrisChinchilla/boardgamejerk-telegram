const Slimbot = require('slimbot');
require("dotenv").config();
const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN);
const http = require('http');

slimbot.on('message', message => {
  if (message.text === "game") {
    var messageText = '';

    http.get('http://localhost:8000', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        messageText = JSON.parse(data).message;
        slimbot.sendMessage(message.chat.id, messageText);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  } else {
    slimbot.sendMessage(message.chat.id, "If you want me to say something send 'game'");
  }
});

// Call API

slimbot.startPolling();