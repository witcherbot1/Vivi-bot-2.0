let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: ' *╮━━━⬣  قـائـمـة الـاوامــر  ⬣━━━╭*'
            },
            body: {
              text: '  ❖ افتح القائمة لاختيار المحتوى الذي\nتريده من خلال الضغط على الزر ادناه ☟\n *╯━━━━━━━⬣ ❈ ⬣━━━━━━━╰*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضـغـط هـنـا ➥',
                    sections: [
                      {
                        title: '▣ قـوائـم الـبـوت',
                        highlight_label: '☚',
                        rows: [
                          {
                            header: '# قـسـم الـمـطـور ⍅',
                            title: '.مطور',
                            description: 'خاص لصاحب البوت',
                            id: 'te'
                          },
                          {
                            header: '# قـسـم الـانـمـي ⍅',
                            title: '.انمي',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '# قـسـم الـالـعـاب ⍅',
                            title: '.العاب',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '# قـسـم الـديـن ⍅',
                            title: 'اذكار المساء',
                            description: '',
                            id: 'te'
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
