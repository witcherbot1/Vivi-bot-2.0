//كود تغير صورة الجروب

let handler = async (m, { conn, usedPrefix, command }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/image/.test(mime)) {
  let img = await q.download()
  if (!img) throw '*❐┃الرد على صورة فقط┃❗❯*'
  await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('*❐┃تم تغيير الصورة بنجاح┃✅❯*'))
  } else throw '*❐┃الرد على الصورة لتغيير الافتار┃❗❯*'}
  handler.command = /^(تغيير_افتار)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  export default handler
