let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `[✳️]لم يتم العثور على المستخدم في قاعدة* البيانات الخاصة بي*`

  await conn.sendMessage(m.chat, { react: { text: '🗃️', key: m.key } })
  
  
let videoUrl = 'https://telegra.ph/file/627c1a44192a5471767b1.mp4';
  let vn = './media/menu.mp3';

      const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `‬‬‬‬╮─━─═ ❆  〘🌟〙  ❆ ═─━─╭
  ⟐╡🇻 🇮 🇻 🇮   🇧 🇴 🇹 ╞⟐
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*✦ مرحبا بك* ${taguser}
 ❐ الـيـك قـائـمـة الاستمارات🗃️ : ⇓⇓
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـمـتـجـر🛒:↶*
 *⿻◄*『 *.اهداء* 』
 *⿻◄*『 *.تحويل* 』
 *⿻◄*『 *.تغيير_لقب* 』
 *⿻◄*『 *.لقب_خاص* 』
 *⿻◄*『 *.لقب_دائم* 』
 *⿻◄*『 *.تغيير_لقب_مؤقت* 』
 *⿻◄*『 *.تقييد* 』
 *⿻◄*『 *.حجز_لقب* 』
 *⿻◄*『 *.روليت* 』
 *⿻◄*『 *.منع_شراء* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الاسـتـقـبـال⛩️:↶*
 *⿻◄*『 *.استقبال* 』
 *⿻◄*『 *.ترحيب* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الادارة💅:↶*
 *⿻◄*『 *.ترقية* 』
 *⿻◄*『 *.اعفاء* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـفـعـالـيـات🏵️:↶*
 *⿻◄*『 *.فعالية* 』
 *⿻◄*『 *.انتهاء_فعالية* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـمـسـابـقـات🏆:↶*
 *⿻◄*『 *.مسابقة_100* 』
 *⿻◄*『 *.نتائج_100* 』
 *⿻◄*『 *.مسابقة_50* 』
 *⿻◄*『 *.نتائج_50* 』
 *⿻◄*『 *.مسابقة_تخمين* 』
 *⿻◄*『 *.نتائج_تخمين* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـتـفـاعـل📊:↶*
 *⿻◄*『 *.التفاعل_اليومي* 』
 *⿻◄*『 *.التفاعل_الاسبوعي* 』
 *⿻◄*『 *.ملوك* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـنـقـاش🧏‍♂️:↶*
 *⿻◄*『 *.نقاش_10* 』
 *⿻◄*『 *.نتيجة_10* 』
 *⿻◄*『 *.نقاش_6* 』
 *⿻◄*『 *.نتيجة_6* 』
 *⿻◄*『 *.نقاش_5* 』
 *⿻◄*『 *.نتيجة_5* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـبـيـانـات📁:↶*
 *⿻◄*『 *.مخالفة* 』
 *⿻◄*『 *.شراء* 』
 *⿻◄*『 *.طرف* 』
 *⿻◄*『 *.حاله* 』
 *⿻◄*『 *.عرض* 』
 *⿻◄*『 *.عضو* 』
 *⿻◄*『 *.دفع_مخالفة* 』
⟐──━═━─⬣  ❈  ⬣─━═━──⟐
*▢ قـسـم الـقـوانـيـن👨‍⚖️:↶*
 *⿻◄*『 *.قوانين* 』
╯─━─═ ❆  〘🌟〙  ❆ ═─━─╰`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['الاستمارات'
                   ,'الأستمارات'
                   ,'استمارات'
                   ,'أستمارات'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
