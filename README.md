eventhook
=========
**(c)[Bumblehead][0], 2013-2015** [MIT-license](#license)

An object through which callbacks may be added and called through publish/subscribe model.

It associates named properties rather strings, for example `Event.Maximize` rather than `'Event.Maximize'`. For event publishing
with strings, see [eventpublish][1].

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://github.com/iambumblehead/eventpublish         "eventhook"

---------------------------------------------------------
#### <a id="install"></a>install

eventhook may be downloaded directly or installed through `npm`.

```bash
$ npm install eventhook
```

to run tests, use `npm test` from a shell.

```bash
$ npm test
```

---------------------------------------------------------
#### <a id="get-started">eventhook

```javascript
var fn = function (o) { console.log('help ' + o); };
var onChangeHook = eventhook();

onChangeHook.addFn(myfun);
onChangeHook.fire('me!'); // help me!
onChangeHook.rmFn(myfun);
onChangeHook.fire(); // [nothing happens]
```

---------------------------------------------------------
#### <a id="license">license
 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013-2015 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
