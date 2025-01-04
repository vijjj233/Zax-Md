const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zaxmd001@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github = process.env.GITHUB || "https://github.com/Xiangzaoh/Zax-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaZlD9sHltY52Bg1Vy2k";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255688930205";
global.sudo = process.env.SUDO || "255688930205";
global.owner = process.env.OWNER_NUMBER || "255688930205";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "ZAX;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUEzcm1nUUd2TVo3L2NYSG9Qa2l0elBsMjlHYUp4N3p6dVU4UmhsYmpGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic21Va0VtVHVpUS9YVHl0S3dFeDU5ZW1mNFVBa0hKU2IyNFVSd1B5ckpCMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTWFKaWV1SnZDdllKeUxkenNualZJam9rRGF1Y29QN3BCNXlnNDN0K2tJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYzV2OUVPTDdGb3hkVGsxSEZEUXo5VHdZQlhjY3lHL0J2SEFrYU9rV0NvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPUEVHdkdTbnV4ekxybUU2blI4Ym1ETmF0ak1BS2RQUHA2bEZYL0Y2VVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9LbWFlR1NYSGZaUE1WYXBZRWVLM005NjZpdCtlK21iZXNJeXFqYU13a1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVMNFN3ME1jc21zLysyM2czV0NZRXYyQ3BMdFduRUJnb1piZzdDZjZWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXhNOHBPQmJvaGpSZ0FtNWliQnBhMzZ3eU9qRG9oN2VNU2krTTBReGFpST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHSEZBUFhvaHVFdEFPNVRIUnR4d2V6dkJ6d1hVRWE5WTdEbm93YnEwU2E0OGxFRzBjMlJIV2VabThZOENPV2xqUGtUdG9tczJyK1Zrc09Fbk5sUmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6ImlNSVVhMDVVbCs0NGo4OEFIK2FqYmRES3NrYVlheDc2NlRDajdBUlc2YnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpZd3RHbU9CU2FHNlNnU0FXdXprQVEiLCJwaG9uZUlkIjoiNjI0ZTI2ZDYtY2EwNC00Y2Y1LTg1NDctZjZlNDQyNzYzNGYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink3WCtucHpGMnRTM3V4VDA4OHNGU0dsaHk1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEL2FFRVRCQXNLWjlpcnNlUGw4U0t4R1dQQ3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRE4zQjI4R0YiLCJtZSI6eyJpZCI6IjUwOTM2NDgzMTk0OjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRMQi1WQVdPVUxFTkNFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVFVyZGdMRUltVTU3c0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYT2VEcUNZRUJOaWtxZldvWHJ3VDNUTGJsUTlGc2Fob25JTnhBcGpVR0d3PSIsImFjY291bnRTaWduYXR1cmUiOiIzb2pjQXFBQTZXamNBeThDQnVrVDUxVTJqTk42Q1dmbThRLytyZ2xvSEFtU0xKRnY1TUZCSWVLLzdERmVhMnNJUk1zVkVjSkc2QWJwcmw3cmpCYWVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia0h1WTRzaVY0dnRQMnByRDhDU2c3M1gyWEZnaVZTSXNqamVYcHdBU0RRYjJ1M3Z2a2xjSTdDOENhV085dFZtOVcvZmVINkhhMkNxWXpiOTgxcmxXaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNjQ4MzE5NDozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWem5nNmdtQkFUWXBLbjFxRjY4RTkweTI1VVBSYkdvYUp5RGNRS1kxQmhzIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MDM0ODM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU4zTSJ9";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©zᴀxᴍᴅ",
  author: process.env.PACK_AUTHER || "zᴀx-ᴍᴅ",
  packname: process.env.PACK_NAME || "zᴀx-bot",
  botname: process.env.BOT_NAME || "zᴀx ᴍᴅ",
  ownername: process.env.OWNER_NAME || "MrXhriss",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "zᴀx").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
