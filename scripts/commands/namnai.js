const fs = require("fs");
module.exports.config = {
  name: "reply",
  version: "1.1.0",
  permission: 0,
  credits: "Farhan",
  description: "noprefix",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("love") ||
     react.includes("love") || 
react.includes("Janu") || react.includes("xan") || react.includes("jan") || react.includes("sona") ||
react.includes("xn") ||
react.includes("xona") || react.includes("xuna") || react.includes("ভালবাসি") ||
react.includes("ব্রেকাপ") ||
react.includes("break up") ||
react.includes("sex") ||
react.includes("nude") ||  
react.includes("Fucking") ||
react.includes("🤤")) {
  var msg = {
    body: "- ভালোবাসা নামক আব্লামি করতে মন চাইলে ABIR BOSS এর ইনবক্স চলে জাও-!!🌚"
   }
   api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😤", event.messageID, (err) => {}, true)
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
