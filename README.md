# Nextion
espruino lib for the Nextion HMI display

Copyright (c) 2016 HyGy. See the file LICENSE for copying permission.

This is a basic nextion hmi lcd handling module. Tested with NX3224T028_011R  2.8”	320*240	LCD.
http://wiki.iteadstudio.com/Nextion_HMI_Solution

How to initialize the lib:
--------------------------

This is tested on ESP8266. You need to connect the ESP8266 trough network console. Serial console is needed for the nextion lcd.

```
Serial1.setup(9600);
var nextion=require('Nextion');
nextion.connect(Serial1);
```

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

get value
```
nextion.get(
  "t0.txt",
  function(data) {
    console.log("--->"+data+"<----");
  }
);
```

sendme -> get the current page
```
nextion.sendme();
```

get an element attributte
```
nextion.getAtt("t0.txt");
```

set value
```
nextion.setVal('t0.txt', "example string"); // set t0.txt value to "example string"
nextion.setVal('dim',50); // set the backlight to 50%
```
