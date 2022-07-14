let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓

🔥CREADOR: +51 946 352 266
🔥CHAT DIRECTO: wa.me//51946352266
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/TiagoKl/DATAONE-BOT-MD` },
'mimetype': `application/${document}`,
'fileName': `☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓`,
'fileLength': 26,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/TiagoKl/DATAONE-BOT-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': '☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://github.com/TiagoKl/DATAONE-BOT-MD' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}piopio`, buttonText: {displayText: '☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓'}, type: 1}, 
{buttonId: `${usedPrefix}MIAMIAU`, buttonText: {displayText: '🌍'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
