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
𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦

┏━━━━━━━━━━━━━┓
┃ *<𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👽 _${usedPrefix}s_ < *responde al archivo para crear el sticker* >
┣ ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟👽 _${usedPrefix}ttp *<texto>*_

┣ ඬ⃟👽 _${usedPrefix}pat *<@tag>_
┣ ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
┣ ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
┗━━━━━━━━━━━━━┛
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.menu'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = false
export default  handler
