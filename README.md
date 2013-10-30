eventhook
=========
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

An object through which callbacks may be added and called through publish/subscribe model.

It associates named properties rather strings, for example `Event.Maximize` rather than `'Event.Maximize'`. For event publishing
with strings, see [eventpublish][1].

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://github.com/iambumblehead/eventpublish         "eventhook"

---------------------------------------------------------
#### <a id="install"></a>Install:

eventhook may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install eventhook
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/eventhook.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------
#### <a id="get-started">GET STARTED:

Create a function before starting.

```
var myfun = function (o) { console.log('help ' + o); },
    onChangeHook = eventhook.getNew();
```

 1. **Add functions** with an associated event name.

 ```javascript
 onChangeHook.addFn(myfun);
 ```

 2. **Call functions** assocated with event, pass parameters to them.

 ```javascript
 onChangeHook.fire('me!'); // help me!
 ```

 3. **Remove functions**.

 ```javascript
 eventpublish.rmFn(myfun);
 eventpublish.fire(); // [nothing happens]
 ```

---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
