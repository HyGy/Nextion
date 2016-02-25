# Nextion
espruino lib for the Nextion HMI display

Copyright (c) 2016 HyGy. See the file LICENSE for copying permission.

This is a basic nextion hmi lcd handling module. Tested with NX3224T028_011R  2.8”	320*240	LCD.
http://wiki.iteadstudio.com/Nextion_HMI_Solution

How to initialize the lib:
--------------------------

Serial1.setup(9600);
var nextion=require('Nextion');
nextion.connect(Serial1);

# recived events

touch event:

```
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
```

getpageid
```
nextion.on(
  'getpageid',
  function (pageId)
  {
    console.log('getPageId-> pageId: '+pageId);
  }
);
```

# commands to send

setPage

```
nextion.setPage(1);
```

getAtt
```
nextion.getAtt("attr");
```

sendme -> get the current page

```
nextion.sendme();
```
