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
*ミ💖 𝗛𝗢𝗟𝗔 _${username}_ 💖彡*
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗠𝗘𝗡𝗨 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play1 *<texto / enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play2 *<texto / enlace / link / url>*_
┣ ඬ⃟📥 _${usedPrefix}play *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
┣ ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
┗━━━━━━━━━━━━━┛
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
