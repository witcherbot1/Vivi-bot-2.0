let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*〖 𝑲𝒊𝒏𝒈𝒅𝒐𝒎 ⋞🌟⋟ 𝑷𝒆𝒂𝒓𝒍 〗*

╮━━━━━━༺۵༻━━━━━━╭

~🌟 املأ الاستمارة ✒️~
 
❖『اللقب👤: 』
❖『الانمي : 』
❖『ولد او بنت💁🏼‍♀️💁🏼‍♂️: 』
❖『من وين جبت الرابط📦: 』
❖『عدد الانميات الي شفته (اختياري الجواب): 』

『⁉️ملاحظة ممنوع الولد ياخذ لقب البنت والعكس』
╯━━━━━━༺۵༻━━━━━━╰
`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/a20647a5ca6036f881fb4.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(استمارة)$/i;
handler.command = new RegExp;

export default handler;
