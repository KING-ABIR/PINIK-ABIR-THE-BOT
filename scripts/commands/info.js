module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐀𝐛𝐢𝐫 𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐀𝐛'𝐢𝐫 𝐦𝐚'𝐫𝐚 𝐠𝐞'𝐜𝐡𝐞
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐒𝐞𝐧𝐛𝐚𝐠 𝐍𝐨𝐚𝐤𝐡𝐚𝐥𝐢
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐩𝐮𝐫 𝐃𝐡𝐚𝐤𝐚
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐌𝐚𝐫𝐤𝐞𝐭𝐢𝐧𝐠 𝐌𝐚𝐧𝐚𝐠𝐞𝐫
𝐆𝐦𝐚𝐢𝐥       : abirak289@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+966505720462
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/Badshaabir321
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/www.xnxx.com169`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.postimg.cc/445nzLrk/inbound2798689236606089084.png`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
