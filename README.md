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
1. go to https://www.sheepit-renderfarm.com/user/signin 
2. press F12 to open the debug menu
3. switch to the "network" tab
4. log in on the site
5. open any request that was made to www.sheepit-renderfarm.com and click on it
6. Select the "Cookies" Tab in the top right of the debug window
7. Send "/cookie Cookie: _ga=<your value>; gads=<your value>; gpi=<your value>; timezone=<your value>; phpbb3_h78im_u=<your value>; phpbb3_h78im_k=<your value(normally empty if so just wirte nothing so phpbb3_h78im_k=;)>; phpbb3_h78im_sid=<your value>; _gid=<your value>; REMEMBERME=<your value>; PHPSESSID=<your value>" to your bot

# Commands

|  Command  |  Syntax   | Usage |
| ----------| ----------|------ |
|  /stats  |  "/stats" |Get your stats  |
| /cookie  | "/cookie username Cookie: ..."  | "Register" your account |
|/delcookie| "/delcookie" | "Unregister" your acoount |

# Notes

1. The Solution with the cookies isn't perfect and I will be workin on using just your username and password
2. Feel free to share any bugs you may encounter
