exports.handler = function(event, context) {
  var response;

  // If the intent is missing, ignore the request.
  if (event.request.intent === undefined) return;

  // white_tea intent
  if (event.request.intent.name == "WhiteTea") {
    response = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "OK, I've set the timer for 1 minute."
        },
        "directives": [{
          "type": "AudioPlayer.Play",
          "playBehavior": "REPLACE_ALL",
          "audioItem": {
            "stream": {
              "url": "https://s3-us-west-2.amazonaws.com/onemiinute/timer_1_minute.mp3",
              "token": "0",
              "offsetInMilliseconds": 0
            }
          }
        }],
        "shouldEndSession": true
      }
    }

    context.succeed(response);
    return;
  }

  if (event.request.intent.name == "GreenTea") {
    response = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "OK, I've set the timer for 3 minutes."
        },
        "directives": [{
          "type": "AudioPlayer.Play",
          "playBehavior": "REPLACE_ALL",
          "audioItem": {
            "stream": {
              "url": "https://s3-us-west-2.amazonaws.com/threeminute/timer_3_minutes.mp3",
              "token": "0",
              "offsetInMilliseconds": 0
            }
          }
        }],
        "shouldEndSession": true
      }
    }

    context.succeed(response);
    return;
  }

  if (event.request.intent.name == "BlackTea") {
    response = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "OK, I've set the timer for 5 minutes."
        },
        "directives": [{
          "type": "AudioPlayer.Play",
          "playBehavior": "REPLACE_ALL",
          "audioItem": {
            "stream": {
              "url": "https://s3-us-west-2.amazonaws.com/300seconds/timer_5_minutes.mp3",
              "token": "0",
              "offsetInMilliseconds": 0
            }
          }
        }],
        "shouldEndSession": true
      }
    }

    context.succeed(response);
    return;
  }

  if (event.request.intent.name == "Tisane") {
    response = {
      "version": "1.0",
      "response": {
        "outputSpeech": {
          "type": "PlainText",
          "text": "No Thanks! ... OK ... Fine. I've set the timer for 7 minutes."
        },
        "directives": [{
          "type": "AudioPlayer.Play",
          "playBehavior": "REPLACE_ALL",
          "audioItem": {
            "stream": {
              "url": "https://s3-us-west-2.amazonaws.com/sevenminute/timer_7_minutes.mp3",
              "token": "0",
              "offsetInMilliseconds": 0
            }
          }
        }],
        "shouldEndSession": true
      }
    },

    context.succeed(response);
    return;
  }

  // unknown intent handling
  response = {
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "I don't know how to do that, but I will learn."
      },
      "shouldEndSession": true
    },
  }
  context.succeed(response);
  return;
};
