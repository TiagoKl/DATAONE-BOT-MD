let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
β οΈ πππππππ-πππ

     π DONACIΓN 
Hola ${name} π

PAYPAL: 
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/TheShadowBrokers133', 'πΏπ°ππΏπ°π»', null, null, [['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
