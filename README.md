Т.к. gulp работает на js, то ему треб-ся сервер node.js.

Устанавливаем node.js. Проверяем командой node -v.

Вместе с node.js авт-ки ставится npm(пакетный менеджер).

npm init --yes - создать файл package.json

Установить gulp глобально(npm i gulp-cli -g) и локально(npm i gulp)(после чего появляются папка node_modules(галп и завис-ти галпа) и файл package-lock.json). Проверяем командой gulp -v

Создать файл gulpfile.js

npm i browser-sync gulp-less gulp-notify gulp-plumber - подключили пакеты, к. авт-ки прописались в файле package.json

Настроить файл gulpfile.js

Запустить gulp командой gulp и вести разработку

Подсоединяем bootstrap и jQuery

На Google Fonts настраиваем шрифты и добавляем их в index.html
