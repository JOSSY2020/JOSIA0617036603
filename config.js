//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "255617036603";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01nSXRVMlNVeFB0eGJzRGxRUlBPZUcxVU95UVkxVDMySjlJWmgxTUVVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnlxS2FmRlBYNWs2enF5Z09XU1BScFVKWHA1SmJXckg5RlB0eGIwSnMxVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVQ4Yk0vR1VHTGpuTS81YnRkUk02WE1heTY1R3BKQVoyUDVzMStDb25nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUUp6UDFJQjN2V2NJMkx3STBSSHR6UmZtZzhSYWx3ZVZidWJSSjlvbnlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLdjVKRW10QXZFamRjNlRhdUU5elVFNnJ5dFZIa3lMVnZMSVVlTmNPMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp0QW5JeEphOXZjRms5cHBRSEVlSlJQc3RDRnBjWElKQTNvWkg3dEQ0Mm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZHTG9OMTRZeGIzMkQyQzU2T0NRREZGUG1KajYzZlNvYStmNDI3OUtIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmowUHp0U2FJa1MxMzRjS1Q2MWp6UXpFN0dWbzVTWUJFSkRYRkNzM21Wbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2Q3J3Znc4VlBNZkdQdUI3SXNsdmxSdG5tZVNYa2ZsNk1ySG1PSmJpUUNTaFlvNnM4QTdOL281anZ1QW9oTmVacGpWSnhuenpkWTR4VmNlMnhTR0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJJRTRaRUdZclVKaEwzZ1YvN0VYQi85TXM0c0N0VnM1RHl6SlJDdDJxVzhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxNzAzNjYwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRENGODU3N0JDN0UzNDg0OUZGNUIxMDIzRkRCRkREQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzY5OTg4fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLTS1CWDZDd1JJeWJUTTRtM3ZhQURRIiwicGhvbmVJZCI6ImNlNTQxNTAwLTI5NTEtNGVkNC05M2UzLTUwYmE1MDllMmUxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQnhQRFltc2JBbnVMM3lvSkdyNDFJcXljQ2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWE1aDNYdzRORFJuK3dEdTJnVGhUb2krUTJBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNLUEdXV05QIiwibWUiOnsiaWQiOiIyNTU2MTcwMzY2MDM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKT1NTWTIwMjAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMeDN0VUhFTFNQcGJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImE1MDZEazVFYThsZEl6ckRrdmN5OVAxdlBmSzgyak5pajQ5eVZFbmZ2U2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZZVXE3NzdtK0MxRU9VUmttd2lBV09KeGdsSzF5M1IvaUp0UGxCQm5ua0dvRTNIMFFlNmVSU3RUZ29CL2ZBK1NTZHVuNmZZcUdoOU9TanZuZVQ0NEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVM3gwOEpnMVUrenJNSnJFNTJMaExDNWV6VjhDY2xVN3djYk1TTHorQ0N5eEJxRUVPTU1BTVRBYk9HRVpJMmZTSVhiMXlkZWZReE5GY2l3bXdBKzNEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYxNzAzNjYwMzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld1ZE9nNU9SR3ZKWFNNNnc1TDNNdlQ5YnozeXZOb3pZbytQY2xSSjM3MG4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzNjk5ODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGovIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "JOSIA HALOTEL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
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


