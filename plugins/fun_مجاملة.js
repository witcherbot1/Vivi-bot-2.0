/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */


const handler = async (m, {conn, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.frase_piropos
  
  global.piropo = tradutor.texto1

  m.reply(`╮─◆─────◈⚘◈─────◆─╭
❥ *"${pickRandom(global.piropo)}"*
╯─◆─────◈⚘◈─────◆─╰`);
};
handler.tags = ['frases'];
handler.command = ['مجاملة'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
