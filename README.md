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

* [Keyboard Keys](https://github.com/omar-othmann/dev-interaction/blob/797453eef4811cd778ba7b9a352f2430014fd0fb/dev-interaction/client/main.js#L5)
* [Positions](https://github.com/omar-othmann/dev-interaction/blob/797453eef4811cd778ba7b9a352f2430014fd0fb/dev-interaction/client/main.js#L116)
* [Colors](https://github.com/omar-othmann/dev-interaction/blob/797453eef4811cd778ba7b9a352f2430014fd0fb/dev-interaction/client/main.js#L128)

# example
```js
import * as inter from 'dev-interaction'
inter.DrawText(inter.KeyCode.E, 'Open shop', inter.Color.BLUE, inter.Position.TOP_LEFT)

// server side
inter.DrawText(player, inter.KeyCode.E, 'Open shop', inter.Color.BLUE, inter.Position.TOP_LEFT)
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/blue.png)

```js
// ~key~ to put key image on text position
inter.DrawText(inter.KeyCode.E, 'Press ~key~ to open shop', inter.Color.BLACK, inter.Position.TOP_LEFT)
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/press_multi.png)

```js
// put text before image
inter.DrawText(inter.KeyCode.E, 'Open shop ~key~', inter.Color.RED, inter.Position.TOP_LEFT)
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/text_before.png)

```js
// support rtl
inter.DrawText(inter.KeyCode.E, 'أضغط ~key~ لفتح المتاجر', inter.Color.BLACK, inter.Position.TOP_LEFT, true)
```
![alt text](https://github.com/omar-othmann/dev-interaction/blob/main/images/rtl.png)

```js
// hide client side
inter.Hide()
// hide server side
inter.Hide(player)

// or hide it after timeout if there no press

inter.DrawText(inter.KeyCode.E, 'أضغط ~key~ لفتح المتاجر', inter.Color.BLACK, inter.Position.TOP_LEFT, true)
inter.Hide(30000) // 30 sec.
```

* [q2apro](https://github.com/q2apro/keyboard-keys-speedflips) thanks for icons

* don't forget to install packages by npm for Alt:V client & server side
* note: you can show key with text without background color. use inter.Color.NONE
