# rooms-bot

A simple Slack Bot example, using botkit. 

This 'Rooms Bot' will start a chat with the user to reserve a room. As you can see in bot.js, to keep things simple, this is a very hard-coded example for the moment.

In the following steps we'll cover how to:
```
0. Adding the Bot to Slack
1. Clone a copy of the Rooms Bot locally.
2. Install the require node packages (botkit).
3. Run and test the Rooms Bot locally.
4. Invite the Bot to a Slack Channel.
5. Testing the Bot
```

Adding the Bot to Slack:
```
1. Go to the following url:
  https://<your-slack-team-name>.slack.com/apps/new/A0F7YS25R-bots
2. Enter the following username:
  rooms
3. Note down the token for the bot.
```

Clone the command server:
```
git clone git@github.com:gregmercer/rooms-bot.git
cd rooms-bot
```

Install the require packages:
```
npm i --save botkit
```

Edit run.sh. Enter your Slack token (be sure to remove the < and >)
```
token=<your-bot-token-goes-here> node bot.js
```

Run the Rooms Bot locally:
```
sh run.sh
```

Once the bot is started, you can invite the bot to a Slack Channel
```
1. Go to the channel
2. Type the following: 
  /invite @rooms
```

Testing the Bot
```
Type the following to start a direct message with the Rooms Bot:
  @rooms open
```

