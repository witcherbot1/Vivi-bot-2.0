let handler = async (m, { conn, args, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '╮━─═❆ ❮قـائـمـة الـاوامــر❯ ❆═─━╭'
            },
    contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: false,
    },
            body: {
              text: `*▢ مرحبا بك يا :* @${who.replace('@s.whatsapp.net', '')}
      ──━━━══⟐══━━━──
 • # اختر القائمه من خلال الزر ☟
 • # اكتب *" . "* قبل كل امر
 • # مازال هذا البوت تحت التطوير اذا
      واجهتك اي مشكله يرجى التواصل
      مع المطور
      ──━━━══⟐══━━━──
▢ اسم البوت : *فـيـفـي - Vivi*
▢ المطور : *بروك - 𝐾 ͟͟𝐿 ͟͟⁩*
▢ مدة التشغيل : *${uptime}*
*╯─━━──═❆ ❮ ❖ ❯  ❆═──━━─╰*
> *_˼‏ 𝙑 𝙞 𝙫 𝙞  𝘽 𝙤 𝙩 – 2.0 – 𝘽 𝙧 𝙤 𝙤 𝙠 ˹_*`
            },
        
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضـغـط هـنـا ➥',
                    sections: [
                      {
                        title: '⟐═━─⏣─━═❪🇻 🇮 🇻 🇮   🇧 🇴 🇹❫═━─⏣─━═⟐',
                        highlight_label: '☚',
                        rows: [
                          {
                            header: '# قـسـم الـمـطـور⚙️ ⍅',
                            title: '.مطور',
                            description: '',
                            id: '.مطور'
                          },
                          {
                            header: '# قـسـم الـمـهـام🗂️ ⍅',
                            title: '.مهام',
                            description: '',
                            id: '.مهام'
                          },
                          {
                            header: '# قـسـم الـطـلـبـات📥 ⍅',
                            title: '.طلبات',
                            description: '',
                            id: '.طلبات'
                          },
                          {
                            header: '# قـسـم الـانـمـي⛩️ ⍅',
                            title: '.انمي',
                            description: '',
                            id: '.انمي'
                          },
                          {
                            header: '# قـسـم الـتـرفـيـه🎮 ⍅',
                            title: '.ترفيه',
                            description: '',
                            id: '.ترفيه'
                          },
                          {
                            header: '# قـسـم الـديـن📿 ⍅',
                            title: '.دين',
                            description: '',
                            id: '.دين'
                          },
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامر']

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

export default handler
