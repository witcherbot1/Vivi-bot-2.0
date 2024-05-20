let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: ' *╮━━━⬣  قـائـمـة الـاوامــر  ⬣━━━╭*'
            },
            body: {
              text: ' ❖ افتح القائمة لاختيار المحتوى الذي\nتريده من خلال الضغط على الزر ادناه ☟\n\n⌫ احب اقول لكم ان البوت لسا ما جهز \nوذا نموذج اولي لسا باقي اوامر اضيفها.\n*╯━━━━━━━⬣ ❈ ⬣━━━━━━━╰*'
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

export default handler
