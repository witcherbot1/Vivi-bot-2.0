let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامــر*'
            },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الانمي',
                            title: '.الانمي',
                            description: 'ون بيس عمك',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.المهام',
                            description: 'ون بيس عمك',
                            id: 'te'
                          },
                          {
                            header: 'قسم الالعاب',
                            title: '.العاب',
                            description: 'ون بيس عمك',
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
