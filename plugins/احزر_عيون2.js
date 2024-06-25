import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/.استسلم|مدري/i.test(m.quoted.text) || /.hhint/i.test(m.text))
        return !0
    this.vivieyes = this.vivieyes ? this.vivieyes : {}
    if (m.quoted.id == this.vivieyes[id][0].id) {
        let isSurrender = /^(استسلم|مدري)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.vivieyes[id][3])
            delete this.vivieyes[id]
            return this.reply(m.chat, '*❐┃طلع فاشل واستسلم┃🤭❯*', m)
        }
        let json = JSON.parse(JSON.stringify(this.vivieyes[id][1]))

        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.vivieyes[id][2]
            this.reply(m.chat, `*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n\n*❐┇الـجـائـزة💰↞${this.vivieyes[id][2]} EXP*`, m)
            clearTimeout(this.vivieyes[id][3])
            delete this.vivieyes[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*❐┃قـريـب جـدااا┃🫣❯*`)
        else
            this.reply(m.chat, `❐┃اجـابـة خـاطـئـة┃❌ ❯`, m)
    }
    return !0
}
export const exp = 0
