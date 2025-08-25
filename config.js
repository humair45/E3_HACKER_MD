const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpZSEhsbTQ5cHE3MmN3UVN6SkxmMDlXcHV0UEtGZFVLdlZTM0w5Q2Yycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTlIRDFiVVRLNGxNQVpkY3ljVUIxM3FvRzRBdTc1MWZSRWovcHZWRTAzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTnU1QzgrZUhaUnM5bFM2QXUxVlRoN3hueUpTYm00UFliR1IxZzVwV2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTmtmRG1vT3BaalhheEJqOEpvUHE1NHJxc0w3WE1aWjZnMDZjL09hb1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFNVVo0UWRxRDFBNVZDTHNMb1lTTXVwNXdpUnRMVXpXRHlPQW85a3hFR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYyMzZmQlZzSzNudHU4V0V0R25qNU91UzZQV2h0L0F1Q1JNOTVHb3JsVTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZReUJ0TFpaMC80bGRGR21sM2xSTGEyeU1BK3o0MXhrOFo3SCtCRjJsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkFaU1pZdHpqY1Z3K2d5NXgzWlhIQlM5NXJkY21SYk44QjFKUUlwb0p4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5UUhzMTFJSlBZL2hIK1pDa2o2eXZTREdEaU9PUGw1Y3l6RVFpWW1TdXpaaWcxNUdva2xweGs4N0dWNHhnSk5DZk5BSHRqbE5kcUE2ejlMTVdDZ0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IlE1Vk5ZMEEzU2dlVjl4TW9pQXcwN0h1UnpLdnFtZ0ZobHJZMVNBUk9GR2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTM2NzMwNDQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI3NEVBNEVFMjJBRDQxMkZDRkM4RTM1MTgzQjE3NzkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMDk3OTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTEzNjczMDQ0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQzlFOTc2Qzc5N0Y4QTE0NUQ1REM5MzRDNDE3OUU4NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTA5Nzk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxMzY3MzA0NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUNDNjYwNENCMEM3OThFMkM4QzA5QjIxMkU3OUUyRjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjEwOTc5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRlZWMk1BWTEiLCJtZSI6eyJpZCI6Ijk4OTEzNjczMDQ0NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im9ubGluZSIsImxpZCI6Ijc1NDQxNzcxNjk2MzY4OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLclpyTHdDRU42M3NNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJETGU3R2VLS1hhWCtyRDZ3L3Rja3QyakNsT0F2RFhoSUJIM2J1ZGRNWXh3PSIsImFjY291bnRTaWduYXR1cmUiOiIzZklVdWduUU9EYTN2ZktQTXd4c0paYm9McDMyOTg1K1VmRlBneXd4Yi9MUXRrWVZTNVRkM3BhNVJ2ZE42Ump4d1FBbTZmNDFHeTRFaVpubEFQMzBDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRkQyb2FpcG5xUWdVZVlxc3gvM3kra1g2QzJGQWw4UzU4VE1OUUNvTXVlRTZUSzFUOEFtOENzcjVCTXV0ZVorZFBJUTMxUnptd080WnEwMDFoSjlwQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5ODkxMzY3MzA0NDY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJReTN1eG5paWwybC9xdytzUDdYSkxkb3dwVGdMdzE0U0FSOTI3blhUR01jIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMDk3OTIsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTENrIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Hacker",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Zoro_the Hacker",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Zoro_the Hacker*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
