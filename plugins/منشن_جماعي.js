
const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `${tradutor.texto1[0]} ${pesan}`;
  let teks = `${tradutor.texto1[1]}  ${oi}\n\n${tradutor.texto1[2]}\n`;
  for (const mem of participants) {
    teks += `▢❯ @${mem.id.split('@')[0]}\n`;
  }
  teks += `
                 𝐕𝐢𝐯𝐢 𝐁𝐨𝐭 2.0
╯═━───━═⬣❈⬣═━───━═╰`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
