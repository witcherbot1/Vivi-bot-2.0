/* Created by https://github.com/unptoadrih15 */

const handler = async (m, {conn}) => {
  conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
  const id = m.chat;
  if (!(id in conn.tebaklagu)) throw false;
  const json = conn.tebaklagu[id][1];
  const nya = json.jawaban;
  const nyanya = nya.replace(/[ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي]/g, '_');
  m.reply('' + nyanya + '');
};
handler.command = /^تلميح|غششيني$/i;
export default handler;
