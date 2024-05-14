const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.fun_reto

  global.bucin = tradutor.texto1;

  conn.reply(m.chat, `╮━━━━━⬣ *تحدي* ⬣━━━━━╭
\n*“${pickRandom(global.bucin)}”*\n
╯━━━━━⬣ *تحدي* ⬣━━━━━╰`, m);
};
handler.help = ['reto'];
handler.tags = ['fun'];
handler.command = /^تحدي/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
