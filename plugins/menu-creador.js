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
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐ฅ๐๐๐๐ข๐ฅ

โโโโโโโโโโโโโโโ
โ *<COMANDOS CREADOR/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโ๐ _${usedPrefix}cajafuerte_
โฃ เถฌโ๐ _${usedPrefix}enable *restrict*_
โฃ เถฌโ๐ _${usedPrefix}disable *restrict*_
โฃ เถฌโ๐ _${usedPrefix}enable *autoread*_
โฃ เถฌโ๐ _${usedPrefix}disable *autoread*_
โฃ เถฌโ๐ _${usedPrefix}enable *public*_
โฃ เถฌโ๐ _${usedPrefix}disable *public*_
โฃ เถฌโ๐ _${usedPrefix}enable *pconly*_
โฃ เถฌโ๐ _${usedPrefix}disable *pconly*_
โฃ เถฌโ๐ _${usedPrefix}enable *gconly*_
โฃ เถฌโ๐ _${usedPrefix}disable *gconly*_
โฃ เถฌโ๐ _${usedPrefix}banchat2_
โฃ เถฌโ๐ _${usedPrefix}add *<agrega nuevos comandos>*
โฃ เถฌโ๐ _${usedPrefix}unbanchat2_
โฃ เถฌโ๐ _${usedPrefix}banuser *<@tag>*_
โฃ เถฌโ๐ _${usedPrefix}unbanuser *<@tag>*_
โฃ เถฌโ๐ _${usedPrefix}banuser *<@tag>*_
โฃ เถฌโ๐ _${usedPrefix}bc *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}bcchats *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}bcgc *<texto>*_
โฃ เถฌโ๐ _${usedPrefix}autoadmin
โฃ เถฌโ๐ _${usedPrefix}create *<creas un grupo>*
โฃ เถฌโ๐ _${usedPrefix}restart_
โฃ เถฌโ๐ _${usedPrefix}update_
โฃ เถฌโ๐ _${usedPrefix}addprem *<@tag>*_
โฃ เถฌโ๐ _${usedPrefix}delprem *<@tag>*_
โโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = false
export default  handler
