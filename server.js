//:server.js
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://sarbazewn.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("========> TestBot <========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");
///
//الاكواد

const dev = ["676576122720223275"]; ///تعديل مهم ايدي حسابك
const admin = "=";
var owner = "676576122720223275"; // Owner Bot Mention /// تعديل مهم ايدي حسابك
var number = "1"; // Unmber Bot
var ex = "2019/10/08";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.send("> **# - `Premium Info` » **" + `${message.author}`);
    message.channel.sendMessage(
      `> **# - Premium Number:** **[** ${number} **]**\n> **# - Ends in:** **[** ${ex} **]**\n> **# - Owner:** **[** <@${owner}> **]**`
    );
  }
});


client.on("ready", () => {
  console.log(`----------------`);
  console.log(`chenar tech`);
  console.log(`----------------`);
  console.log(`ON ${client.guilds.size} Servers '     Script By : chenar tech  `);
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`شعورتان ھەبێ کەسێکی ترتان ناسی ئێمە لەبیر مەکەن`, "http://twitch.tv/Rad-Bot"); ///تعديل مهم غير كلمة هيلب وبرميوم للوتشينق اللي بدك اياه مثل اسم سيرفرك
  client.user.setStatus("o");
});


client.on("message", lupine => {
  if (lupine .content === "=bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("#00000")
      .addField(
        "✽ **Bot Ping** : ",
        `» ${Date.now() - lupine .createdTimestamp}` + " ms",
        true
      )
      .addField("**Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**Channels** : ", `» ${client.channels.size} `, true)
      .addField("**Users** : ", `» ${client.users.size} `, true)
      .addField("**Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**Bot Owner** :  ", `» <@676576122720223275>`, true) /////
      .setImage(
        "https://cdn.discordapp.com/attachments/648610669058326549/688850407673561152/image0.gif"
      )
      .setFooter(lupine .author.username, lupine .author.avatarURL);
    lupine .channel.send(bot);
  }
});
client.on("error", err => {
  console.log(err);
});
const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g => (!members[g.id] ? (members[g.id] = {}) : null));
});

function saveChanges() {
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
}

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

client.on("ready", () => {
  // ready ?
  client.guilds.forEach(g => {
    // for each guilds ?
    g.fetchInvites().then(guildInvites => {
      // fetch invites ?
      invites[g.id] = guildInvites; // push guild invites on invites ^^
    }); // end
  }); // end
}); // end
SQLite.open(path.join(__dirname, "links.sql")) // read path ?
  .then(() => {
    // then ?
    console.log("Opened"); // seccussfull opened
    SQLite.run(
      `CREATE TABLE IF NOT EXISTS linkSysteme (code TEXT, id VARCHAR(30))`
    ); // create table if not exisit
  }) // end
  .catch(err => console.error(err)); // on error

client.on("message", message => {
  if (message.content === "^close") {
    if (!message.channel.guild)
      return message.reply(" ئەمە تەنها بۆ سێرڤەرە !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" تۆ توانات نيە");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("چات کردن وەستێندرا");
      });
  }
  if (message.content === "^open") {
    if (!message.channel.guild)
      return message.reply(" ئەمە تەنها بۆ سێرڤەرە !!");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("تۆ توانات نيە");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("چات کردن ئازادە  ");
      });
  }
});

////////////////////////////////////////////////////////////////////


client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send( `${user}`)
          ch.send('دەستەکەو کەشف بوو ئەوە خۆت ۆفلاین ئەکەی خێرا خۆت ۆنلاین کە:joy:')

          .then(msg => {
              msg.delete(30000)
          })
      }
  })

client.on("error", err => {
  console.log(err);
});
const m= JSON.parse(fs.readFileSync("./members.json")) || {};
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g => (!members[g.id] ? (members[g.id] = {}) : null));
});


client.on('message', function(message) {
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermission(0x2000)){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': ژمارەی نامەی سڕاوە' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': ژمارەی نامەی سڕاوە' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    });

  
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === "=help"){
    if (message.author.id !== message.guild.owner.user.id) return message.channel.send(`**تۆ ناتوانیت ئەم فەرمانە بەكار بهێنيت**`);
     

    message.channel.send(`
>  فەرمانى كارگێڕى تایبەت بەسەرۆک

>  =settings limitsban •  سنورێک بۆ باند کردن۳بۆ٤ کەس 
>  =settings limitskick • سنورێک بۆ کیک کردن۳بۆ٤ کەس
>  =settings limitsroleD •  سنورێک بۆ سڕینەوەی ۳بۆ٤ ڕۆڵ 
>  =settings limitsroleC •  سنورێک بۆ سڕینەوەی ۳بۆ٤ ڕووم
>  =settings limitschannelD • سنورێک بۆ سڕینەوەی ۳بۆ٤ ڕووم بۆ ئەوکەسانەی پلەدارن
>  =settings limitstime • كات ديارى بكە لەماوەى كە پۆلێن كردنەكە ئەنجام دەدرێت هەروەك نموونەيێك ئەگەرێك كەس ٥ برگە لە خولەك پلە دا دەبەزێت
>  =antibots on  •  بوت هێنا قفڵە
>  =antibots off •  بوت هێنان ئازادە
>  =bot   • زانیاری دەربارەی بوت
>  =clear • سڕینەوەی چات
>  =open  • کردنەوە ژوور 
>  =close • قفڵ کردن ژوور 

`);
  }
});


client.on("ready", () => {
  var x = client.channels.get("676576122720223275");
  if (x) x.join();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (message.author.id !== message.guild.owner.user.id) return message.channel.send(`** تەنها سەرۆکەکەم ئەتوانێت ئەم کارەبکات:blush:**`);
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ: ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) { 
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ |تەنھا ژمارە ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە  ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | تەنھا ژمارە ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | تکایە ژمارەیەک لەگەڵ نوسینەکە بنوسە ! **");
            if (isNaN(num)) return message.channel.send("**⇏ |تەنھا ژمارە  ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | کارەکە جێبەجێکرا وگۆرا بۆ: ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    } 
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} ژووریان سڕیەوە **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username}ڕۆڵیان سڕیەوە  **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} ڕۆڵیان دروست کرد**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});


 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username}میمبەریان باند کرد​  **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} میمبەریان کیک کرد **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username}هەوڵ دەدەن بۆ  کیک کردنی هەموو میمبەرەکان **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
  if (codes.content.startsWith(prefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("دژە هێنانی بوت چالاکە");
  }
  if (codes.content.startsWith(prefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("دژە هێنانی بوت وەستا");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.band();
});
/////////////////////////////////////////////////////////////

let channelc = {};

client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_MESSAGES")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`تو ناتوانی لینکی هیچ سێرفەرێک دانیت بە بێ پرسی ڕۆڵبەدەستەکان ٫ سزادراو⚠️ : بلاوکردنەوەی لینکی دیسکۆرد⚠️`)
            .setColor("#00000")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('``تۆ سزای میوی چاتی پێوەکرا بەهۆی بلاو کردنەوەی لینک جا چ بە هەلە بێت یان نا ، تکایە لەگەل رۆل بەدەستەکان قسە بکە``');
       
    }
})///////sender with 123
  client.login("NzUwNDEwNjY4NjMyNTcyMDQ1.X06IZQ._ti70P3VeQEv0kDk0-xC_IoVrL0");  
//////////////////////////////////////////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find(
  channel => channel.id === "746666787667"/////// id chanali welcom lera dani.ok dlm
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale('en-ly');
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .addField( " بەخێربێیت بۆ سێرڤەرەکەمان بە ھیوای بەسەر بردنی کاتێکی خۆش",`${member}`)
      .addField(" **__بەخێربێی بۆ سێرڤەری__**", `**${member.guild.name}**`)
      .addField(" تۆ میمبەری ژمارە :-", member.guild.memberCount)
      .addField('کاتی دانانی ئەکاونتی دیسکۆرد', `${moment(member.user.createdAt).format('Do MMMM YYYY')} **\n** \`${moment(member.user.createdAt).fromNow()}\``, true)
      .addField('کاتی هاتنە ناوەوەی سێرڤەر', `${moment(member.joinedAt).format('Do MMMM YYYY')}  \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
      .setImage("https://cdn.discordapp.com/attachments/689944182273605740/689953126731612317/image0.gif")////lera rasmek ba dle xot dani
      .setFooter(`𝐒𝐖 𝐔𝐏`, "https://media.discordapp.net/attachments/675724283405926410/676764239070887947/trhh.gif")//////lera rasmi sar server dani
      .setTimestamp()
   
    welcomer.send({ embed: norelden });


  }
});
client.on("guildMemberRemove", member => {
  //FOG
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`ئەی ئەی خۆ لێفتی کرد:sweat_smile:`)
    .setDescription(`مەگەر نەیەیتە وە خۆم ئەزانم چی ولێ ئەکەم:sweat_smile:`)
    .setColor("RANDOM")
    .setImage(
      "https://cdn.discordapp.com/attachments/697927286434824222/697998110173036615/hyeyejyur.gif"
    )
    .setTimestamp()

  var channel = member.guild.channels.find("name", "┊𝙻𝙸𝙵𝚃");
  if (!channel) return;
  channel.send({ embed: embed }); //FOG
})
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("?|**`ADMINISTRATOR`تۆتوانات نییە`**  ");

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});
///////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("?|**`ADMINISTRATOR`تۆتوانات نییە`**  ");

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});
///////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage(
        ""
      )

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});
//////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith("=avatar")) {
    var mentionned = message.mentions.users.first();
    var x5bzm;
    if (mentionned) {
      var x5bzm = mentionned;
    } else {
      var x5bzm = message.author;
    }
    const embed = new Discord.RichEmbed()

      .setImage(
        ""
      )
      .setTitle(`✽ **Premium Bot**`)
      .setColor("black")
      .setImage(`${x5bzm.avatarURL}`);
    message.channel.sendEmbed(embed);
  }
});
///////////////////////////////////
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته:heart:**");
    message.channel.sendFile("");
  }
});

client.on("message", msg => {
  if (msg.content === "سلاو") {
    msg.reply("** سڵاو جەرگم بەخێربێیت بۆ سێرڤەرەکەمان:sparkling_heart: :wink:**  ");
  }
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("** سڵاو جەرگم بەخێربێیت بۆ سێرڤەرەکەمان:kissing_heart: :heart: **");
  }
});

client.on("message", msg => {
  if (msg.content === "kwa mama chenar") {
    msg.reply("**سڵاو جەرگم من لە جێگای ئەوم جه‌نابی دکتۆر لێرە نیین خەریکی خوێندنن ئەتوانی لە چاتی تایبەت نامەی بۆ بنێریت بەقوربان:heart: **");
  }
});


client.on("message", msg => {
  if (msg.content === "kwa mama rebo") {
    msg.reply("**mama rebo xareke aeshea dwkane dwea waraw **");
  }
});
//////////////////////////////////////////
//////////////////////////////////////////////////////





client.on('message', message => {
 
if(message.content.includes("@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("تۆ ناتوانیت ئێڤریوەن لێبدەیت")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("تۆ ناتوانیت ئێڤریوەن لێبدەیت")
}
 
}
 
});