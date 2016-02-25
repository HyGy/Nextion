# Nextion
espruino lib for the Nextion HMI display

Copyright (c) 2016 HyGy. See the file LICENSE for copying permission.

This is a basic nextion hmi lcd handling module. Tested with NX3224T028_011R  2.8”	320*240	LCD.
http://wiki.iteadstudio.com/Nextion_HMI_Solution

What is working now:
--------------------

var nextion=require('Nextion');

- all nextion command ended with 0xff 0xff 0xff
- when a new command recived, then give it to this call
- this waits a byte array without the 3 0xff colosing bytes
nextion.nextionCommandRecived(lastNextionCommand);

nextion.on(
  'touchevent',
  function(pageId, componentId, touchType)
  {
    console.log('touch event');
    console.log(pageId);
    console.log(componentId);
    console.log(touchType);
  }
);

nextion.on(
  'getpageid',
  function (pageId)
  {
    console.log('getPageId-> pageId: '+pageId);
  }
);
