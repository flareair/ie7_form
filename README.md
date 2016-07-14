# IE7 Form

Supports RTL and IE7.

[Codepen demo](https://codepen.io/flareair/pen/pbAKyr)

## Comments (rus)

Работа в IE7 проверялась на [https://app.crossbrowsertesting.com](https://app.crossbrowsertesting.com).

К сожалению этот сервис проверяет только codepen-приложения, в которых полифиллы не работают (нужно отдавать правильные заголовки для .htc). Без box-sizing форма немного съезжает при включенном RTL.

На реальном IE7 с собственным сервером, который я написал, проверить не удалось, так-как не нашел нужную виртуалку с Win XP. Но думаю что все будет работать.

## Requirements

Tested with node.js 6.2+ on Ubuntu 14.04

Browsers: IE7+ , another modern browsers

## To start:

Run `npm i && npm start`;
