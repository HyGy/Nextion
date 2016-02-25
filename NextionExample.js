Serial1.setup(9600);

var nextion = require('Nextion');
nextion.connect(Serial1);

// this is to connect trough wifi, and get the ip if needed
var Wifi = require("Wifi");


nextion.on(
  'touchevent',
  function (pageId, componentId, touchEvent) {
    console.log('touchevent-> pageId: '+pageId + '; componentId: '+componentId+'; touchEvent: '+touchEvent);
  }
);

nextion.on(
  'getpageid',
  function (pageId) {
    console.log('getPageId-> pageId: '+pageId);
  }
);

nextion.on(
  'stringdatareturned',
  function(stringData) {
    console.log(stringData);
  }
);