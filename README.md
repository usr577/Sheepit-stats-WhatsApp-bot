# Sheepit-stats-whatsapp-bot
A simple WhatsApp bot written in JavaScript using Venom-bot to send the current stats of your sheepit-renderfarm account (Note, if you want to use it yourself 2 phone numbers are required, one for the bot and one for you to chat with it.) To connect the bot without having to switch accounts in the WhatsApp app you can use "WhatsApp Business" or a app like "Paralell Space" to create a copy of your normal WhatsApp.

# Setup:
1. Download the main.js file and create an empty file called cookie.txt in the same directory.
2. Change directory to where main.js and cookie.txt are located.
3. Install https://github.com/orkestral/venom using ` npm i --save venom-bot `.
4. Run main.js using ` node main.js `.
5. Scan the QR-code that appers in the terminal using WhatsApp.

# Registration

To register your account:
1. download the cookiehelper.py
2. change the username and password variables accordingly
3. run it with python3
7. Send "/cookie Cookie: REMEMBERME=<your value from coockiehelper>; PHPSESSID=<your value from coockiehelper>" to your bot

# Commands

|  Command  |  Syntax   | Usage |
| ----------| ----------|------ |
|  /stats  |  "/stats" |Get your stats  |
| /cookie  | "/cookie username Cookie: ..."  | "Register" your account |
|/delcookie| "/delcookie" | "Unregister" your acoount |

# Notes

1. The Solution with the cookies isn't perfect and I will be working on implementing cookiehelper in the main.js file
2. Feel free to share any bugs you may encounter
