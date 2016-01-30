var Botkit = require('botkit');
var rooms_storage = require(__dirname+'/rooms_storage.js');

rooms_storage_provider = rooms_storage(null);

var controller = Botkit.slackbot({
  debug: false,
  storage: rooms_storage_provider
});

// connect the bot to a stream of messages
controller.spawn({
  token:process.env.token,
}).startRTM()


controller.hears('open','direct_message,direct_mention,mention',function(bot,message) {
  bot.startPrivateConversation(message, askBuilding);
});

askBuilding = function(response, dm) {

  var askText = 'What building?\n'
    + '[B] Bass, [C] Class of, [FE] Fac East, [FW] Fac West\n'
    + '[G] Gunn, [M] McClell, [N] North, [P] Patter, [Z] Zam\n';

  dm.ask(askText, function(response, dm) {
    if (response.text == 'N') {
      dm.say("Ok. Let me look for open rooms in the North building.");
    }
    askRoom(response, dm);
    dm.next();
  });

}

askRoom = function(response, dm) {

  var askText = '';

  if (response.text == 'N') {
    askText = 'Rooms available now:\n'
      + '[N203] 10p, 1t, 2m\n'
      + '[N216] 5p, 1t, 0m\n'
      + '(To book for 2:30 - 3pm type the room number)';
  } else {
    askText = 'What?';
  }

  dm.ask(askText, function(response, dm) {
    dm.say("Ok.")
    askRoomConfirm(response, dm);
    dm.next();
  });

}

askRoomConfirm = function(response, dm) {

  var askText = '';

  if (response.text == 'N203') {
    askText = 'Please confirm room N203 for 2:30 - 3pm\n'
      + '[Y] for Yes [N] for No';
  } else {
    askText = 'What?';
  }

  dm.ask(askText, function(response, dm) {
    if (response.text == 'Y') {
      dm.say("Room N203 booked for gmercer from 2:30 - 3pm");
    }
    dm.next();
  });

}

// give the bot something to listen for.
controller.hears('help','direct_message,direct_mention,mention',function(bot,message) {

  bot.reply(message,'rooms help:\n@rooms open - list of rooms available');

});

