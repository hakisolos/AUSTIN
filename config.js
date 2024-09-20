//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tEb1V6bTJ5ZUlKVS9jejYzMFMzOE1uVTIrRFhEc2piWnhzTy9YOXVFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclN3bjNrblpmelBsTXdaN0FZTXNmOUdKcEo1K3lTMzNwWUxRR1BGU2hUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR2VzbzZSeGhMYklWVk5QdnRSVDdtZU4rWmxaU01mNjF5WE9hNWlWZFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTENzcXJpczhUemxnRVJ0aEp1WkhaV0F4YzFYOTdvYXMzdHZLVWIvNVQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIb1dCU3dtU0V2NlBxbDJiQmNvcHdGbEExUm1xZzJ2bUFxa3NZUWlaMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVkMkJINHMyZy9wT1c5TTFyV1dXK2xiSXJrM0h2M3RoeTRhMUE1RzRGSDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUl3LzcrQUozeGtZSUhDVXNOWHhxUGVpOUlmOTZjcDNpUmVIb1RpUnQwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXBQU2RGNkZSd0NMUGI2OThIdThIK2JEMk9LZ2drZXZYWHJnTW1oNlh5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNmdGNuenZoMUliZXBQV3k4N25TVS9MaHZFWmd3R1ltZE95bDJxVmhYMktHMHUzR24yakxaV2NGMGpkR0M0M2l3N0o0WWpscE5wWlN1ZnRCN21TU0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJYZ1NBcXpNdVhkY1lkSytqdEl0SHIyN2U2cTJoSlJzVkdDZHpNSmErR21nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjU5NzIzNzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREU3MkYwNUE4QjQxM0ZFNzQxM0UxNTBCNDI4NzdFMzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjg3NDU3Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2NTk3MjM3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQjg5REE5MkZENDJCODcwMzk2MjM3MUQ0RDIwRUY2QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODc0NTcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4RWttUGUzc1NQR0EtbDhjdlktWEJnIiwicGhvbmVJZCI6IjUzNTU2YzBkLWQwOGYtNGE2Ni1hMzIwLWRhOWQxMTY0M2M0OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MmJidzlYNUcwV0xsRXBtZHlURGpJMGtiMmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVJubXAxNGFxUmczaE9YbmtKSHpzRjgwU3dNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRYTjVZMjlTIiwibWUiOnsiaWQiOiIyMzQ5MDY1OTcyMzc0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUHJhaXNlX053b2tvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNN3MxcE1HRUx5SHVMY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrSzhkM2hMenBreWljZjI2NUREVGNGUDA1RjBLSXowYVJTd0dPNEZZakFBPSIsImFjY291bnRTaWduYXR1cmUiOiJCci83VEpyNUJubGdmSWszVGtJWUhyQkF0Skk2Vld1MWZoMWFXZVVnd0lzL3k1MVNRTERORk5zd3hxS1MrK0pBMXpxbUdKRTBwZmJSZ3EvSmxiS3NCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFF2Szh6dXM1bTBCeG5vOEduclMyLzducStSSVZ0UHNmS1ZUZndCOHZESzNhWEFxTGNIYS8xbSt6VkVvaUpMcXRKNUFselQvSys5TnVRNVBsRVZWQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDY1OTcyMzc0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZml2SGQ0Uzg2Wk1vbkg5dXVRdzAzQlQ5T1JkQ2lNOUdrVXNCanVCV0l3QSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjg3NDU2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQNGoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
