/* Copyright (c) 2016 HyGy. See the file LICENSE for copying permission. */
/*
This is a basic nextion hmi lcd handling module. Tested with NX3224T028_011R  2.8”	320*240	LCD.
http://wiki.iteadstudio.com/Nextion_HMI_Solution

What is working now:
--------------------

var nextion=require('Nextion');

// all nextion command ended with 0xff 0xff 0xff
// when a new command recived, then give it to this call
// this waits a byte array without the 3 0xff colosing bytes
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
*/

var C = {
};

function NEXTION() {
}

/** 'public' constants here */
NEXTION.prototype.C = {
};

/** Set the given page */
exports.setPage = function (pageNum)
{
  this.serialPort.print('page '+pageNum+'\xff\xff\xff');
};

/** Set the given page */
exports.getAtt = function (att)
{
  this.serialPort.print('get att'+att+'\xff\xff\xff');
};

exports.sendme = function ()
{
  this.serialPort.print('sendme\xff\xff\xff');
}

/** Put most of my comments outside the functions... */
exports.commandRecived = function(lastNextionCommand) {
  var me = this;
  console.log('nextionCommandRecived called');
  console.log(lastNextionCommand);
     switch (lastNextionCommand[0])
     {
       case 0x1a: // variable name is invalid
         console.log('0x1a: variable name is invalid');
         break;
       case 0x65: // touch event
         console.log('touch event');
         me.emit(
           'touchevent',
           lastNextionCommand[1], // pageId
           lastNextionCommand[2], // componentId
           lastNextionCommand[3]===0x0 ? 'release' : 'press' // touchEvent press: 0x01, release 0x00
         );
         break;
       case 0x00:
         console.log('0x00: Invalid instruction sent.');
         break;

       case 0x66: // Current page ID number returns
         me.emit(
           'getpageid',
           lastNextionCommand[1]
         );
         break;

       case 0X70: // String variable data returns
         console.log('String variable data returns');
         var stringToSend="";
         for (var cikl=0; cikl<lastNextionCommand.length; cikl++)
         {
           stringToSend+=lastNextionCommand[cikl];
         }

         me.emit(
           'stringdatareturned',
           stringToSend
         );
         break;

       default:
         console.log('unknown command started with: 0x' + lastNextionCommand[0].toString(16));
     }

};

exports.connect = function(_port)
{
  this.serialPort=_port;
  return new NEXTION();
}
