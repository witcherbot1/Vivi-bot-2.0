let timeout = 60000
let poin = 1000
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.Vivieyes = conn.Vivieyes ? conn.Vivieyes : {}
    let id = m.chat
    if (id in conn.Vivieyes) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة على السؤال بعد┃❌ ❯', conn.Vivieyes[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Brook-88/Game/main/game-eyes.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `╮─┈〈 *تخمين الشخصية👤*〉┈─⟐
*▢❯* الوقت : *${(timeout / 1000).toFixed(2)}* ثانيه
*▢❯* اكتب : *"استسلم"* للانسحاب
*▢❯* الجائزة : *${poin}* EXP
*▢❯* الرد على هذه الرسالة مع الاجابة!
╯┈──┈┈─┈┈┈┈──┈┈─┈⟐`.trim()
    conn.Vivieyes[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.Vivieyes[id]) conn.reply(m.chat, `❮ ⌛┇انتهى الوقت┇⌛❯\n\n❐┇الاجـابـة✅↞ ${json.name}┇`, conn.Vivieyes[id][0])
            delete conn.Vivieyes[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^عيون/i

export default handler
