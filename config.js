const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_46_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICA3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgODgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDYU13SDRWSXJvN3hkVEc2WGV6ZmorUE4rWVkxWUMyejVZMndTYTZESVdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1NDUzMjkyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzQwRDEyQjk2REUwQTc4MDJDQjI1RkI2QUYxQkJFMTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzM1MTU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzU0NTMyOTI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMTQ5NjRENUQ5QjZGRjM4MEMyMDg5M0U4QjFDNEY2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3MzUxNThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmNqWkpRWVhTUmFMcFJLbmRCOEsyQVwiLFxuICBcInBob25lSWRcIjogXCI3ZTNkNWRmNi02NGEzLTQwYTAtOGVlZS1hMmZlNjBiNzQyMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAyMzgsXG4gICAgICAyNixcbiAgICAgIDAsXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDIzOSxcbiAgICAgIDk4LFxuICAgICAgMjE1LFxuICAgICAgMTczLFxuICAgICAgODQsXG4gICAgICAxNDQsXG4gICAgICAyMzIsXG4gICAgICA1NSxcbiAgICAgIDE1MSxcbiAgICAgIDI0MSxcbiAgICAgIDU5LFxuICAgICAgMjE3LFxuICAgICAgMTg3LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgNzYsXG4gICAgICAyMjEsXG4gICAgICA5MSxcbiAgICAgIDEyOCxcbiAgICAgIDMsXG4gICAgICA0NyxcbiAgICAgIDE0OCxcbiAgICAgIDE2MyxcbiAgICAgIDgsXG4gICAgICAyMDAsXG4gICAgICAxNixcbiAgICAgIDE1MCxcbiAgICAgIDcyLFxuICAgICAgMzUsXG4gICAgICA0MyxcbiAgICAgIDY0LFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDFNSFdYV1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NDUzMjkyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5hbWFyeVwiLFxuICAgIFwibGlkXCI6IFwiMTg4MTM3Mjg0MzIxMzAyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZ5OWpBUTY2Lyt0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0NGQwcWxzVEM0bThKNXhkVVA2d0FmS2RINHZCYXRpd2t6OCtkejltRVM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlzL1pkRW5tbStsZHY5aENGd3FWUE5iR3dqaGdKY25sbktEZmtPS0ZNRFFmUGN3amFTQzVabnY2bkNpMXRmcHpualRENjlRMmRLQ3pTL1JmWk5qWkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImEvUW5FbTJQN0pMRHVWRXZzSUg0MEtTVDUzMEh5SjZveWgyQVE0N3Z5VGtzOEg2cUszODZ2VVhvVGZlV0R2L1BMT2xDK3RTNlBwWmxNbHJlTW5jTkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1NDUzMjkyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTczNTE1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpmM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmYzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHQ3SkdkWjlSVHJzR3Y0eHF6Rk5wL2hWT2NPOXRLeDFOai9uNmltTVk3WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI2MDMwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTczNTE1MzQ2N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
