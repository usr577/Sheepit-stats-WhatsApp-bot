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

# Commands

|  Command  |  Syntax   | Usage |
| ----------| ----------|------ |
|  /stats  |  Just /stats |Get your stats  |
| /cookie  | /cookie username Cookie:  | "Register" your account |
|/delcookie| Just /delcookie | "Unregister" your acoount |
