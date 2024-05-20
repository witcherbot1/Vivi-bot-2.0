

const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.fun_formarpareja

  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`╮─◆────◈💍◈────◆─╭
  *${toM(a)}, ${tradutor.texto1[0]} ${toM(b)}, ${tradutor.texto1[1]}
╯─◆────◈💍◈────◆─╰`, null, {
    mentions: [a, b],
  });
}
handler.help = ['زواج'];
handler.tags = ['main', 'fun'];
handler.command = ['clos', 'clos'];
handler.group = true;
export default handler;
