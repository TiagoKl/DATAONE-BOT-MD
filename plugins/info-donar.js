let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
☠️ 𝐃𝐀𝐓𝐀𝐎𝐍𝐄-𝐁𝐎𝐓

     🌍 DONACIÓN 
Hola ${name} 🍁

PAYPAL: 
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
