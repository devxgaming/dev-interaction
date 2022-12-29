# dev-interaction
interaction resource with keyboard keys icons for Alt:V

# colors
black<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/black.png)
<br>green<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/green.png)
<br>red<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/red.png)
<br>blue<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/blue.png)
<br>yellow<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/yellow.png)
<br>pink<br>
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/pink.png)

* [Keyboard Keys](https://github.com/omar-othmann/dev-interaction/blob/6fc9764568027619cbe225f6c5d161406c86b1ee/dev-interaction/client/main.js#L5)
* [Positions](https://github.com/omar-othmann/dev-interaction/blob/6fc9764568027619cbe225f6c5d161406c86b1ee/dev-interaction/client/main.js#L400)
* [Colors](https://github.com/omar-othmann/dev-interaction/blob/6fc9764568027619cbe225f6c5d161406c86b1ee/dev-interaction/client/main.js#L412)
# function parameters
* DrawSingleKey client side
(key, text, color, position, rtl, timeout, onClick, onDestroyed)
* DrawSingleKey server side
(player, key, text, color, position, rtl, timeout, onClick, onDestroyed)

* DrawMultipleKey client side
(keys, text, color, position, rtl, timeout, onClick, onDestroyed)
* DrawMultipleKey server side
(player, keys, text, color, position, rtl, timeout, onClick, onDestroyed)
# example
```js
import * as inter from 'dev-interaction'
inter.DrawSingleKey(inter.KeyCodes.E, 'Open shop', inter.Color.BLUE, inter.Position.TOP_LEFT, false, 30000,
() => {
  console.log('Target key clicked')
},
() => {
  console.log('Timeout or view has replaced with other.')
})

// server side is same like client side but only the first parm should be player example
inter.DrawSingleKey(player, inter.KeyCodes.E, 'Open shop', inter.Color.BLUE, inter.Position.TOP_LEFT, false, 30000,
() => {
  console.log('Target key clicked')
},
() => {
  console.log('Timeout or view has replaced with other.')
})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/blue.png)

```js
// ~key~ to put key image on text position
inter.DrawSingleKey(inter.KeyCodes.E, 'Press ~key~ to open shop', inter.Color.BLACK, inter.Position.TOP_LEFT, false, 30000,
() => { /*clicked*/},() => {/*destroyed or timeout*/})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/press_multi.png)

```js
// put text before image
inter.DrawSingleKey(inter.KeyCodes.E, 'open shop ~key~', inter.Color.RED, inter.Position.TOP_LEFT, false, 30000,
() => { /*clicked*/},() => {/*destroyed or timeout*/})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/text_before.png)

```js
// support rtl
inter.DrawSingleKey(inter.KeyCodes.E, 'أضغط ~key~ لفتح المتاجر', inter.Color.BLACK, inter.Position.TOP_LEFT, true, 30000,
() => { /*clicked*/},() => {/*destroyed or timeout*/})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/rtl.png)

# multiple keys
```js
const id = inter.DrawMultipleKey([inter.KeyCodes.ArrowUp, inter.KeyCode.ArrowDown], 'Press some of this keys', inter.Color.BLACK, inter.Position.TOP_LEFT, true, 3000,
(key) => {
  console.log(`key ${key.icon} code: ${key.code} pressed.`) // some of target keys has been pressed.
  // hide it?
  inter.Hide(id)
  // key checker
  if(inter.isEquals(key, inter.KeyCodes.ArrowUp)){
    // arrow up has clicked.
  }
},
() => { /*timeout or destroyed.*/})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/double_key.png)
```js
// also we can parse our keys positions.
const id = inter.DrawMultipleKey([inter.KeyCodes.ArrowUp, inter.KeyCode.ArrowDown], 'Press ~key~ to move up or ~key~ to move down', inter.Color.BLACK, inter.Position.TOP_LEFT, true, 3000,
(key) => {
  console.log(`key ${key.icon} code: ${key.code} pressed.`) // some of target keys has been pressed.
  // hide it?
  inter.Hide(id)
  // key checker
  if(inter.isEquals(key, inter.KeyCodes.ArrowUp)){
    // arrow up has clicked.
  }
},
() => { /*timeout or destroyed.*/})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/arrow_dobule.png)
```js
// or groub to text position.
const id = inter.DrawMultipleKey([inter.KeyCode.ArrowUp, inter.KeyCode.ArrowDown], 'Press some of this keys ~keys~ to do something.', inter.Color.BLACK, inter.Position.TOP_LEFT, true, 3000,
(key) => {
  console.log(`key ${key.icon} code: ${key.code} pressed.`) // some of target keys has been pressed.
  // hide it?
  inter.Hide(id)
  // key checker
  if(inter.isEquals(key, inter.KeyCodes.ArrowUp)){
    // arrow up has clicked.
  }
},
() => { /*timeout or destroyed.*/})

// serve side is also same like client side only first parm should be player
const id = inter.DrawMultipleKey(player, [inter.KeyCodes.E, inter.KeyCodes.F], 'Press ~key~ from server side ~key~ this also', inter.Color.BLACK, inter.Position.TOP_LEFT, false, 3000,
(key) => {
  console.log(inter.isEquals(key, inter.KeyCodes.E))
  inter.Hide(id)
})
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/groub_position.png)
* [q2apro](https://github.com/q2apro/keyboard-keys-speedflips) thanks for icons

* don't forget to install packages by npm for Alt:V client & server side
* note: you can show key with text without background color. use inter.Color.NONE
