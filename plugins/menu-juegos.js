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

𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔𝗟 𝗠𝗘𝗡𝗨 𝗧𝗢𝗣𝗦/𝗝𝗨𝗘𝗚𝗢𝗦 

° 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
° 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
° 🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
° 🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
° 🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
° 🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° 🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° 🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° 🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° 🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° 🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° 🎖️ _${usedPrefix}love *<nombre / @tag>*_
° 🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
° 🎖️ _${usedPrefix}pregunta *<texto>*_
° 🎖️ _${usedPrefix}slot *<apuesta>*_
° 🎖️ _${usedPrefix}pvp *<@tag>*_
° 🎖️ _${usedPrefix}simi *<texto>*_
° 🎖️ _${usedPrefix}topgays_
° 🎖️ _${usedPrefix}topotakus_
° 🎖️ _${usedPrefix}formarpareja_
° 🎖️ _${usedPrefix}verdad_
° 🎖️ _${usedPrefix}reto_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['🗒️𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧𝗔🗒️', '.menu'],
['🥵𝗖𝗥𝗘𝗔𝗗𝗢𝗥🥵', '.creador'],
['📮𝗗𝗢𝗡𝗔𝗥📮', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = false
export default  handler
