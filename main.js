// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const axios = require('axios');
const fs = require('fs');
const { verify } = require('crypto');
var match;
global.accname = "";
global.usrpoints = "";
global.rendered = "";
global.trendered = "";
global.ordered = "";
global.rank = "";
global.mdata = "";

venom
  .create({
    session: 'venom', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === '/stats' && message.isGroupMsg === false) {  
      fs.readFile('cookie.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        datar = data.split("/")
        if (datar.includes(message.from)) {
          var cl = datar.indexOf(message.from) + 2;
          var nl = datar.indexOf(message.from) + 1;
          var cookie = datar[cl];
          var name = datar[nl];
          axios.get('https://www.sheepit-renderfarm.com/user/' + name + '/profile', {
            headers: {
              'Cookie': cookie
            }
          })
          .then(profileResponse => {
            let arr = profileResponse.data.split(/\r?\n/);
            arr.forEach((line, idx)=> {
              if(line.includes("<title>")) {
                const Ar1 = line.split("<title>");
                const Ar2 = Ar1[1].split(" |");
                global.accname = Ar2[0] + "'s stats:\n" + "⎯⎯⎯⎯⎯⎯⎯\n"
              }
              if(idx == match + 1){
                if(line.includes('Points')){
                  const Ar1 = line.split("span");
                  const Ar2 = Ar1[1].split("ul>");
                  const Ar3 = line.split("dd>");
                  const points = "Points: " + Ar2[2] + "\n";
                  global.rendered = "Frames rendered: " + Ar3[5].replace("</","\n")
                  global.ordered = "Frames ordered: " + Ar3[3].replace("</","\n")
                  global.trendered = "Time rendered: " + Ar3[7].replace("</","\n")
                  global.rank = "Rank: " + Ar3[9].replace("</","\n")
                  global.usrpoints = points.replace('">','').replace('</','').replace(',','.');
                }
              }
              if(line.includes('<div class="col-md-4">')){
                match = idx;
              }
            });
            client
              .sendText(message.from, accname + usrpoints + rendered + trendered + rank + ordered.replace("\n",""))
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
          })
        } else {
          client
            .sendText(message.from, `You aren't registered yet!\nRegister using the "/cookie Username Cookie: ..." command.`)
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
      }); 
    }
    if (message.body.includes("/cookie ") && message.isGroupMsg === false) {
      fs.readFile('cookie.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        datar = data.split("/")
        if (datar.includes(message.from)) {
          client
            .sendText(message.from, `You are already registered!\nRetrive your stats using the "/stats" command or unregister using the "/delcookie" command.`)
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        } else {
          fs.readFile('cookie.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            arr = message.body.split(" ");
            verifier = message.body.split(":")
            cookie = message.body.replace("/cookie " + arr[1] + " ", "")
            if(verifier[0] == "/cookie " + arr[1] + " Cookie") {
              axios.get('https://www.sheepit-renderfarm.com/user/' + arr[1] + '/profile', {
                headers: {
                  'Cookie': cookie
                }
              })
              .then(profileResponse => {
                if(profileResponse.data.includes("Points")){
                  fs.stat('cookie.txt', (err, stats) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    if (stats.size === 0) {
                      global.mdata = message.from + "/" + arr[1] + "/" + cookie;
                    } else {
                      global.mdata = data + "/" + message.from + "/" + arr[1] + "/" + cookie;
                    }
                    fs.writeFile('cookie.txt', mdata, function(err) {
                      if (err) {
                        console.error(err);
                      }
                    });
                  });
                  client
                    .sendText(message.from, `You sucessfully registered, you can now delete the message for safety measures and retrieve your stats using "/stats"`)
                    .then((result) => {
                      console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                      console.error('Error when sending: ', erro); //return object error
                    });
                } else {
                  client
                    .sendText(message.from, `Your Username or cookie isn't correct, the syntax of "/cookie" is "/cookie Username Cookie: ..."`)
                    .then((result) => {
                      console.log('Result: ', result); //return object success
                    })
                    .catch((erro) => {
                      console.error('Error when sending: ', erro); //return object error
                    });
                }
              });
            } else {
              client
                .sendText(message.from, `The syntax of "/cookie" is "/cookie Username Cookie: ..."`)
                .then((result) => {
                  console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //return object error
                });
            }
          });
        }
      });
    }
    if (message.body === "/delcookie" && message.isGroupMsg === false) {
      fs.readFile('cookie.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        datar = data.split("/")
        if (datar.includes(message.from)) {
          var cl = datar.indexOf(message.from);
          datar.splice(cl, 1);
          datar.splice(cl, 1);
          datar.splice(cl, 1);
          var data = datar.join('/');
          fs.writeFile('cookie.txt', data, function(err) {
            if (err) {
              console.error(err);
            }
          });
          client
            .sendText(message.from, `Sucessfully unregistered!`)
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        } else {
          client
            .sendText(message.from, `You aren't registered yet, you can register using "/cookie Username Cookie: ..."`)
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
      });
    }
  });
}