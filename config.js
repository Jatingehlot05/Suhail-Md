const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="tempmail1ff@gmail.com"
global.location="Bharat"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/Jatingehlot05/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va5J2l489inmnfP8jQ1Z";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va5J2l489inmnfP8jQ1Z" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919650985680";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,919xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919650985680,919xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_41_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU0LFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlTOERnRGFySFBsYXZNdmswSWpEbi80SUlENzNDdDd6TmxsVmcySlRESlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NjUwOTg1NjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMjAyNjdFNUQ3RjFFRjI1N0NERkQ1MUEwRjc3MjZENVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4Mjg0NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk2NTA5ODU2ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZFQzRBQjIwOUU4ODVFNjAzMkQ1REY1NURFMDFGQjEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgyODQ3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRUS1sWXdyVFJZdVI4QVRRWmF6SFRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2M2RlOGY0LTA1ZjMtNGRiOC1hM2ZhLWFhNzQ3ZjU1ODllNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAyMzgsXG4gICAgICAyMTUsXG4gICAgICA2LFxuICAgICAgMTg0LFxuICAgICAgMTAwLFxuICAgICAgMzAsXG4gICAgICAyNDEsXG4gICAgICA4NixcbiAgICAgIDk2LFxuICAgICAgNCxcbiAgICAgIDI0MyxcbiAgICAgIDIzMixcbiAgICAgIDQzLFxuICAgICAgMTI5LFxuICAgICAgMzksXG4gICAgICAxMTEsXG4gICAgICAxMTIsXG4gICAgICAyNDQsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMjA3LFxuICAgICAgMTgzLFxuICAgICAgNDAsXG4gICAgICAxNjEsXG4gICAgICA0OSxcbiAgICAgIDE1MCxcbiAgICAgIDE1NyxcbiAgICAgIDE4NixcbiAgICAgIDcxLFxuICAgICAgMTYyLFxuICAgICAgMTY4LFxuICAgICAgMTQ3LFxuICAgICAgOTAsXG4gICAgICAxMjgsXG4gICAgICA4NyxcbiAgICAgIDQzLFxuICAgICAgNDcsXG4gICAgICAyMTAsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBTUpZOUtKUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NjUwOTg1NjgwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDk4MzEzNDU5NzE5MDo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlZlZGljb25jZXB0cyBCb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVFVvcDhDRVBDSWhMVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBaRmtlekwxemEybG1uU2JtM2ZYUUdwb0E2TnVobmtFRGRodmF1TllEU289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2lmcmt1b0xqMlFwTzl0Q3NKbEd2UGl5dXpvUGdQMmN6bjF6Yi9UUlIrWi90eXI2cUd6NGM4cXc4dU4wa3BWWUM3K0NqT3VvYkdBVkNLOGg2VVVtRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlV0MkhjcVJQRTB4NmRCaVBZdWVuVEZBNjB5TWx2TGhqamsvWldHRGJBOUYvTk55TGNkMHZKSFdNNjNtWW5lNERCL29rMnU5MldnSUxHeEtodVZaQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NjUwOTg1NjgwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyODQ2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUl5MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2NLWVFiYVM4N2dUamx1MThsTW1Jd0FHMFVGRUh6Rm9qWVNiaDNOV2Zpaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDI0NTA0ODQsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTUyNzg5MjI3NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VC Bot",
  ownername:process.env.OWNER_NAME|| "IAMJ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
