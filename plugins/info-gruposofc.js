let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
β οΈ πππππππ-πππ

LISTA DE GRUPOS QUE PROMOCIONO
1-
2-
3-
4-
5-

SI QUIERES QUE TU ENLACE APAREZCA ACΓ AVISALE AL CREADOR DEL BOT
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
