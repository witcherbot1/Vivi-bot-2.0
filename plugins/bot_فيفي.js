import _0x3ec5fb from 'node-fetch';
import _0xdcffbe from '../lib/uploadImage.js';
let handler = async (_0x4f9075, {
  text: text,
  conn: conn,
  usedPrefix: usedPrefix,
  command: command
}) => {
  if (!text && !(_0x4f9075.quoted && _0x4f9075.quoted.text)) {
    // Fix Arabic error message
    throw `*❐┃صيغة غير صالحة┃❗❯*
 *▢* يجب عليك طرح سؤالك للاجابة

 *◄* مثال لاستخدام الامر *:*
 ↞ *.فيفي كيف طريقة تحضير الشكشوكه*`;
  }
  try {
    const encodedText = encodeURIComponent(text);
    let attachment = null;
    let mediaURL = '';
    let quotedMessage = _0x4f9075.quoted ? _0x4f9075.quoted : _0x4f9075;
    if ((quotedMessage.msg || quotedMessage).mimetype || quotedMessage.mediaType || '') {
      let mimeType = (quotedMessage.msg || quotedMessage).mimetype || quotedMessage.mediaType || '';
      if (mimeType.startsWith('video/')) {
        return _0x4f9075.reply("*❐┃الرد على الصورة فقط┃❗❯*");
      }
      attachment = await quotedMessage.download();
      let isImage = /image\/(png|jpe?g|gif)/.test(mimeType);
      mediaURL = await (isImage ? _0xdcffbe : _0xdcffbe)(attachment);
    }
    const endpointURL = mediaURL ? "https://api-darkman-3cf8c6ef66b9.herokuapp.com/googlegenai?query=" + encodedText + "&url=" + mediaURL : "https://api-darkman-3cf8c6ef66b9.herokuapp.com/googlegenai?query=" + encodedText + "&url=";
    conn.sendPresenceUpdate("composing", text.chat);
    const response = await _0x3ec5fb(endpointURL);
    const result = await response.json();
    const output = result.result;
    _0x4f9075.reply(output);
  } catch (error) {
    console.error("Error:", error);
    // Fix Arabic error message
    throw "*❐┃حدثت مشكله┃❗❯*";
  }
};
handler.help = ["googlegenai"];
handler.tags = ['AI'];
handler.command = ["فيفي", "vivi"];
export default handler;
