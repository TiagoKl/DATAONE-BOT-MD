const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓

𝗛𝗢𝗟𝗔 _${username}

𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦

° 📥 _${usedPrefix}facebook *<enlace / link / url>*_
° 📥 _${usedPrefix}instagram *<enlace / link / url>*_
° 📥 _${usedPrefix}mediafire *<enlace / link / url>*_
° 📥 _${usedPrefix}instagram *<enlace / link / url>*_
° 📥 _${usedPrefix}gitclone *<enlace / link / url>*_
° 📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
° 📥 _${usedPrefix}gdrive *<enlace / link / url>*_
° 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
° 📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
° 📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
° 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° 📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
° 📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
° 📥 _${usedPrefix}play *<texto>*_
° 📥 _${usedPrefix}playdoc *<texto>*_
° 📥 _${usedPrefix}playlist *<texto>*_
° 📥 _${usedPrefix}playlist2 *<texto>*_
° 📥 _${usedPrefix}spotify *<texto>*_
° 📥 _${usedPrefix}imagen *<texto>*_
° 📥 _${usedPrefix}pinteret *<texto>*_
° 📥 _${usedPrefix}wallpaper *<texto>*_
° 📥 _${usedPrefix}wallpaper2 *<texto>*_
° 📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
° 📥 _${usedPrefix}igstalk *<nombre de usuario>*_
° 📥 _${usedPrefix}igstory *<nombre de usuario>*_
° 📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.menu'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menudescarga|menudescargas|memudescarga|memudescargas)$/i
handler.fail = null
handler.register = false
export default  handler
