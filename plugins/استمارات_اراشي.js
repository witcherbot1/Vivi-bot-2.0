import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

const handler = async (m, { conn, command }) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.frase_frases

  global.frasesromanticas = tradutor.texto3;

  global.consejos = tradutor.texto4;

  //استمارات المتجر

  if (command === 'اهداء') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `*▪︎━━━━ ◦「 المتجر 」◦ ━━━━▪︎*

*· · • • • 「‏ إهداء بطاقة 」• • • · ·*

- لقد تم ‏إهدائك بطاقة (  )

- من @

- قيمة الاهداء مع الضريبة (بيلي)

*▪︎━━━━ ◦「 🛒 」◦ ━━━━▪︎*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'تحويل') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪︎━━━━ ◦「 إعلان 」◦ ━━━━▪︎*

*· · • • • 「 المتجر 🛒 」• • • · ·*

- لقد تم تحويل لـ @ (المبلغ) 

- من @

- المبلغ الكامل مع الضريبة (بيلي)

*▪︎━━━━ ◦「 🛒 」◦ ━━━━▪︎*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'تغيير_لقب') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • • 「 تغيير لقب 」• • • · ·*

*من اللقب :*

*إلى اللقب :*

*صاحب التغيير : @⁦ *

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'لقب_خاص') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • • 「 تغيير لقب خاص 」• • • · ·*

*من اللقب :*

*إلى اللقب :*

*المدة :*

*صاحب التغيير :⁦*@⁨⁩ 

*۞ عند تغيير لقبك إلى لقب خاص يصبح لقبك الأساسي غير محجوز ‏يفضل حجز اللقب باستخدام بطاقة حجز اللقب .*

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'لقب_دائم') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • •「 تغيير لقب لمدة "المدة" 」• • • · ·*

*من اللقب :*

*إلى اللقب :*

*صاحب التغيير : @*

*صاحب البطاقة : @*

*۞ يستطيع الرجوع لـ لقبه بعد انتهاء المدة ببطاقة تغير لقب .*

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'تغيير_لقب_مؤقت') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • • 「 تغير لقب مؤقت  لمدة 」• • • · ·*

*من اللقب :*

*إلى اللقب :*

*صاحب التغير : @⁦*

*صاحب البطاقة : @*⁦

*۞ سوف يعود إلى لقبه بعد انتهاء المدة .*

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة 〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'تقييد') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪︎━━━━ ◦「 المتجر 」◦ ━━━━▪︎*
 
*· · • • •「 بطاقة تقييد 」• • • · ·*

- لقد تم تقيدك @ من الرسائل لا تستطيع ارسال اي رسالة لمدة () . 

*- اذا ارسلت اي رسالة سوف يتم طردك من المجموعة لمدة انتهى فترة التقييد .*

*▪︎━━━━ ◦「🛒」◦ ━━━━▪︎*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'حجز_لقب') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • • 「 حجز لقب 」• • • · ·*

*اللقب :*

*المدة :*

*صاحب البطاقة : @⁦*⁨⁩ 

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'روليت') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪━━━━ ◦「 المتجر 」◦ ━━━━▪*

*· · • • • 「 روليت 」• • • · ·*

*تم لف روليت :*

*صاحب الروليت : @*

*▪━━━━ ◦「 🛒 」◦ ━━━━▪*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'منع_شراء') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*▪︎━━━━ ◦「 المتجر 」◦ ━━━━▪︎*

*· · • • •「 منع الشراء من المتجر القادم 」• • • · ·*


*- لقد تم منعك @ من الشراء من المتجر القادم .*

*▪︎━━━━ ◦「 🛒 」◦ ━━━━▪︎*

*۞ المسؤول🕴️:*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  //استمارات الاستقبال

  if (command === 'استقبال') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗

━━━━━━━༺۵༻━━━━━━━

~❄ املأ الاستمارة ✒️~
 
『اللقب👤: 』

『الانمي الي اخذت منه اللقب👥: 』

『ولد او بنت💁🏼‍♀️💁🏼‍♂️: 』

『من وين جبت الرابط📦: 』

『عدد الانميات الي شفته (اختياري الجواب): 』

『⁉️ملاحظة ممنوع الولد ياخذ لقب البنت والعكس』
`;
    await m.reply(mensaje);
  }

  if (command === 'ترحيب') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╆✤━━━━[❄️]━━━━✤╅

✨| 🇼 🇪 🇱 🇨 🇴 🇲 🇪 |✨

⊱ - @ ⊰

🎖️ مـرحـبـًا بـك فـي 

〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗

رابط قروب الإعلانات ☟︎︎︎

 https://chat.whatsapp.com/BXj4A6muVZt1YIfhhCRcGW  

╆✤━━━━[❄]━━━━✤╅
`;
    await m.reply(mensaje);
  }

//استمارات الإدارة 
  
  if (command === 'ترقية') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `‌ *~【❈◦👤اعـلان تـرقـية👤◦❈】~*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*
*✠┇تُعلن نقابة آراشي الوقيرة عن ترقية :*

*✠┇اللـقب 👤╎『  』*

*✠┇مـــن ↙️╎ ◞◜*

*✠┇إلــى ↖️╎ ◞◜*

*✠┇المنـشن 📧 ╎ ◞@◜*


*❋┇الـمـسؤول🕴️╎『  』*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*⟐╎متمنين له دوام التوفيق و النجاح في مسيرته 🤍.*
   
*▪︎━━━━━ ◦❄️◦ ━━━━━▪︎*
*༺ مـع تـحـيات إدارة ↯*
*〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'اعفاء') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `‌  *~【❈◦👤اعـلان إعـفـاء👤◦❈】~*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*✠┇تُعلن نقابة آراشي الوقيرة عن اعفاء :*

*✠┇اللـقب 👤╎『  』*

*✠┇مـــن ↖️╎ ◞◜*

*✠┇إلــى ↙️╎ ◞◜*

*✠┇المنـشن 📧 ╎ ◞@◜*


*❋┇الـمـسؤول🕴️╎『  』*

*▪︎━━━━━━  ◦❄️◦ ━━━━━━▪︎*

*⟐╎متمنين له دوام التوفيق و النجاح و شاكرين له جهوده 🤍.*
   
*▪︎━━━━━ ◦❄️◦ ━━━━━▪︎*
*༺ مـع تـحـيات إدارة ↯*
〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  //استمارات الفعاليات

  if (command === 'فعالية') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*⏣◦【﻿ ◞إعــلان╎فـعـالـيـة◜ 】◦⏣*

*⌘ ━───❆〘❄️〙❆───━ ⌘*

*❐┃نـوع  الـفـعالـية🎪『』*

*❐┃الـسـؤال ❔『』*

*❐┃الـمـستـوى 📊『』*

*❐┃الـوقـت ⏳『』*

*❐┃الـجائـزة💰『』*

*⌘ ━───❆〘❄️〙❆───━ ⌘*

*❐┃المسـؤول 🕴️『』*

*⌘ ━───❆〘❄️〙❆───━ ⌘*

*⟐╎مـع تـحيـات إدارة : ↶*

*〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  if (command === 'انتهاء_فعالية') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*⏣◦【﻿ ◞إعـلان╎نتائج الفـعالـية◜ 】◦⏣*

*⌘ ━───❆〘❄️〙❆───━ ⌘*

*❐┃الإجـابـة ❔『』*

*❐┃الـفـائـز 🥇『』*

*❐┃الـجـائـزة💰『』*

*❐┃المسـؤول 🕴️『』*

*⌘ ━───❆〘❄️〙❆───━ ⌘*

*⟐╎مـع تـحيـات إدارة : ↶*

*〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

//استمارات المسابقات 
  
  if (command === 'مسابقة_100') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『💯┇إعلان مسابقة 100 سؤال┇💯』*


*۞ الـمـقـدم 🕴️『』*

*۞ الـوقـت ⏱️『』*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ انـواع الاسـئـلـة :*

*الاسـئلهـﮧ⁉️『』*
*صـور 📸『』*
*طلـبات🗳『』الحد 20*
*اعـرف اللـقب 🧧『』*
*ايمـوجي🙂『』الحد 20*
*ترتـيب 🔀『』*
*معـنى الكـلمة 🔍『』*
*تعـداد🔢 『』*
*مقـولات💭『』*
*كـتابـة💬『』الحد 25*
*اصـوات 🔊『』*
*اول حرف🔠『』الحد 20*
*التفكيك ↔️『』الحد 20*

*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*➊ - يُمنع إرسال الصور أو الفيد وقت المسابقة .*

*➋ - التكليجات او الاخطاء اللغوية لا تحسب .* 

*➌ - يُسمح بـالتعديل في نفس السطر و تحسب له نقطة .*

*➍ - يمنع الزيادة على اسم الشخصية في الكتابة ، مثال : كينما الحلو .*

*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  if (command === 'نتائج_100') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『💯┇نتائج مسابقة 100 سؤال┇💯』*
*⌘ ━───❆〘🌟〙❆───━ ⌘*

*۞ الـمـقـدم 🕴️『』*
*۞ الـجـائـزة 🪙 【 40K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ الـمـركـز الأول🥇『』*
*۞ الـجـائـزة 🪙 【 35K 】*

*۞ الـمـركـز الـثـانـي🥈『』*
*۞ الـجـائـزة 🪙 【 30K 】*

*۞ الـمـركـز الـثـالـث🥉『』*
*۞ الـجـائـزة 🪙 【 25K 】*

*۞ الـمـركـز الـرابـع🎖️『』*
*۞ الـجـائـزة 🪙 【 20K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ بـاقـي الـمـشـاركـيـن 👥 :*
*『』*
*『』*
*『』*
*『』*
*『』*
*『』*
*۞ الـجـائـزة 🪙 【﻿ 2K 】*

*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  if (command === 'مسابقة_50') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『❄️┇إعلان مسابقة 50 سؤال┇❄️』*


*۞ الـمـقـدم 🕴️『』*

*۞ الـوقـت ⏱️『』*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ انـواع الاسـئـلـة :*

*الاسـئلهـﮧ⁉️『』*
*صـور 📸『』*
*طلـبات🗳『』الحد 10*
*اعـرف اللـقب 🧧『』*
*ايمـوجي🙂『』الحد 10*
*ترتـيب 🔀『』*
*معـنى الكـلمة 🔍『』*
*تعـداد🔢 『』*
*مقـولات💭『』*
*كـتابـة💬『』الحد 15*
*اصـوات 🔊『』*
*اول حرف🔠『』الحد 10*
*التفكيك ↔️『』الحد 10*


*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*➊ - يُمنع إرسال الصور أو الفيد وقت المسابقة .*

*➋ - التكليجات او الاخطاء اللغوية لا تحسب .* 

*➌ - يُسمح بـالتعديل في نفس السطر و تحسب له نقطة .*

*➍ - يمنع الزيادة على اسم الشخصية في الكتابة ، مثال : كينما الحلو .*

*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  if (command === 'نتائج_50') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『❄️┇نتائج مسابقة 50 سؤال┇❄️』*
*⌘ ━───❆〘🌟〙❆───━ ⌘*

*۞ الـمـقـدم 🕴️『』*
*۞ الـجـائـزة 🪙 【 30K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ الـمـركـز الأول🥇『』*
*۞ الـجـائـزة 🪙 【 25K 】*

*۞ الـمـركـز الـثـانـي🥈『』*
*۞ الـجـائـزة 🪙 【 20K 】*

*۞ الـمـركـز الـثـالـث🥉『』*
*۞ الـجـائـزة 🪙 【 15K 】*

*۞ الـمـركـز الـرابـع🎖️『』*
*۞ الـجـائـزة 🪙 【 10K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ بـاقـي الـمـشـاركـيـن 👥 :*
*『』*
*『』*
*『』*
*『』*
*『』*
*『』*
*۞ الـجـائـزة 🪙 【﻿ 1K 】*

*▪︎━━━━ ◦「 📊 」◦ ━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  if (command === 'مسابقة_تخمين') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🔍┇مـسـابـقـة الـتـخـميـن┇🔎』*


*۞ المـقـدم🕴️『 』*
*۞ الوقـت ⏱️『 』*
*۞ الـعـدد 🔢『 』*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*⤦〖📜شـرح الـمـسـابـقـة📜〗⤥*

❶ باختصار فكرة الفعالية المارد الأزرق ، المقدم بيحط بعقله شخصية و المشاركين دورهم يسألوا المقدم أسئلة و هو يقوم بالاجابة على اسئلتكم بأحد هذه الأجوبة التالية  " نعم - لا - لا اعلم - من الممكن " .

❷ يتوقف المشاركون عن طرح الأسئلة عندما يغلقها المقدم .

❸ المقدم بيعلن عن الشخصية بعد ما يجاوب احد المشاركين .

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*
*◈ مـلاحـظـات╎❗*

*➊ - تنتهي المسابقة عندما يحصل ثلاث أشخاص 10 نقاط .*

*➋ - يُمنع إرسال الصور أو الفيد أثناء المسابقة .* 

*➌ - التكليجات او الاخطاء اللغوية لا تحسب .*

*➍ - يُسمح بالتعديل في نفس الرسالة و تحسب له نقطة .*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  if (command === 'نتائج_تخمين') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🔍┇نتائج مسابقة التخمين┇🔎』*


*۞ الـمـقـدم 🕴️『 』*
*۞ الـجـائـزة 🪙 【 35K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ الـمـركـز الأول🥇『 』*
*۞ الـجـائـزة 🪙 【 25K 】*

*۞ الـمـركـز الـثـانـي🥈『 』*
*۞ الـجـائـزة 🪙 【 20K 】*

*۞ الـمـركـز الـثـالـث🥉『 』*
*۞ الـجـائـزة 🪙 【 15K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*۞ بـاقـي الـمـشـاركـيـن 👥 :*
*『』*
*『』*
*『』*
*『』*
*『』*
*『』*
*۞ الـجـائـزة 🪙 【﻿ 3K 】*

*▪︎━━━━━━ ◦❄️◦ ━━━━━━▪︎*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟 〗*

*╚═────▒ 🌟 ▒────═╝*
`;
    await m.reply(mensaje);
  }

  //الملوك
  
  if (command === 'التفاعل_اليومي') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*~【❈◦👤 ملـوك التـفاعـل👤◦❈】~*

╔═───━▒ 📈 ▒━───═╗

~*〘 ◞التفـاعـل اليـومي╎يوم◜ 〙*~

*✠╎المركز الأول 🥇╎《》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎8K بيلي*


*✠╎المركز الثاني 🥈╎《》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎6K بيلي*


*✠╎المركز الثالث 🥉╎《》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎4K بيلي*


*⟐╎عدد رسائل اليوم :*

╚═───━▒ 📈 ▒━───═╝

*༺ المسؤول🕴️:* 

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'التفاعل_الاسبوعي') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*~【❈◦👤 ملـوك التفـاعل 👤◦❈】~*

╔═───━▒ ❄️ ▒━───═╗

~*〘 ◞التفـاعـل الأسبـوعي◜ 〙*~

*✠╎المركز الأول 🥇╎《 》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎15K بيلي*


*✠╎المركز الثاني 🥈╎《 》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎12K بيلي*


*✠╎المركز الثالث 🥉╎《 》*
*❆ عدد الرسائل╎*
*❆ الجائزة╎10K بيلي*


*⟐╎عدد رسائل الأسبوع :*

╚═───━▒ ❄️ ▒━───═╝

*༺ المسؤول🕴️:* 

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'ملوك') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*〘 ◞◈ مـلـوك النقابة╎👑◜ 〙*

⏣═────━ ❆〘❄️〙❆ ━────═⏣

*✠┋العضو الذهبي╎👑╎『』*

*✠┋ملك التفاعل╎📈╎『』*

*✠┋ملك المسابقات╎📊╎『』*

*✠┋ملك الفعاليات╎🧮╎『 』*

*✠┋مشرف الأسبوع╎👤╎『』*

*✠┋ملك النقاشات╎📜╎『』*

*✠┋ملك المنطقية╎🗣️╎『』*

⏣═────━ ❆〘❄️〙❆ ━────═⏣

*كل شخص أخذ ملك سوف يأخذ جائزة 20K بيلي .*

⏣═────━ ❆〘❄️〙❆ ━────═⏣

*✠╎المسـؤول 👤↫『』*

*إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗*
`;
    await m.reply(mensaje);
  }

  //النقاشات

  if (command === 'نقاش_10') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇ إعـلان نـقـاش ┇🗣️』*

           *【﻿ أكـثـر مـن 10 أسـئـلـة 】*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـسـؤال❓↶*

¹.

².

³.

⁴. 

⁵.

⁶.

⁷.

⁸.

⁹.

¹⁰.

¹¹.

¹².

¹³.

¹⁴. 

¹⁵.

*۞ الجائزة 🪙 ↶*

* C : 4K  |  B : 8K  |  A : 12K  |  S : 15K  لـشـخـص واحـد*

*الـجـواب فـي الـعـام❕*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـمـقـدم 🕴️『』* 

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
*╚═────▒ 🌟 ▒────═╝*`;
    await m.reply(mensaje);
  }

  if (command === 'نتيجة_10') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇إعلان نـتـائـج الـنـقـاش┇🗣️ 』*

       *「 أكثر من 10 أسئلة 」*

*۞ الـتـقـيـيـم ↶*

*S :『』*
            *15k*

*A :『』*
            *12K*

*B :『』*
            *8K*

*C :『』*
            *4K*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـمـقـدم 🕴️『』*

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'نقاش_6') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇ إعـلان نـقـاش ┇🗣️』*

           *【﻿ مـن 6 الـى 9 أسـئـلـة 】*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـسـؤال❓↶*

¹.

².

³.

⁴. 

⁵.

⁶.

⁷.

⁸.

⁹.

*۞ الجائزة 🪙 ↶*

* C : 3K  |  B : 6K  |  A : 9K  |  S : 10K  لـشـخـص واحـد*

*الـجـواب فـي الـعـام❕*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـمـقـدم 🕴️『』* 

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'نتيجة_6') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇إعلان نـتـائـج الـنـقـاش┇🗣️ 』*

      *「 من 6 الـى 9 أسئلة 」*

*۞ الـتـقـيـيـم ↶*

*S :『』*
            *10k*

*A :『』*
            *9K*

*B :『』*
            *6K*

*C :『』*
            *3K*


*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـمـقـدم 🕴️『』*

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'نقاش_5') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇ إعـلان نـقـاش ┇🗣️』*

           *【﻿ أقـل مـن 5 أسـئـلـة 】*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـسـؤال❓↶*

¹.

².

³.

⁴. 

⁵.

*۞ الجائزة 🪙 ↶*

* C : 2K  |  B : 4K  |  A : 6K  |  S : 8K  لـشـخـص واحـد*

*الـجـواب فـي الـعـام❕*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎*

*۞ الـمـقـدم 🕴️『』* 

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  if (command === 'نتيجة_5') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*『🗣️┇إعلان نـتـائـج الـنـقـاش┇🗣️ 』*

	 *「 أقـل مـن 5 اسـئـلـة 」*

*۞ الـتـقـيـيـم ↶*

*S :『』*
            *8k*

*A :『』*
            *6K*

*B :『』*
            *4K*

*C :『』*
            *2K*

*▪︎ ━━━━━━ ◦「🗣️」◦ ━━━━━━ ▪︎* 

*۞ الـمـقـدم 🕴️『』*

إدارة :〖 𝑨𝒓𝒂𝒔𝒉𝒊 ⋞❄️⋟ 𝑷𝒆𝒂𝒓𝒍 🌟〗
`;
    await m.reply(mensaje);
  }

  //بيانات

  if (command === 'مخالفة') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*[ بطاقة المخالفة ]*

*【 اللقب 🖋 : 】*
*【 العقوبة : 】*
*【 المنشن📌: ⁩】*
*【 السبب : 】*

╰━─━━─≪🌟≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'شراء') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*[ بطاقة الشراء من المتجر ]*

*【 اللقب 🖋 : 】*
*【 قيمة البطاقة : 】*
*【 المنشن📌: 】*
*【 البطاقة : 】*

╰━─━━─≪🌟≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'طرف') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*[ بطاقة الطرف ]*

*【 اللقب 🖋 : 】*
*【 الطرف 👥: 】*
*【 المنشن📌: ⁩】*
*【 إكمال أسبوع : 】*

╰━─━━─≪🌟≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'حاله') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*[ تغيير الحالة ]*

*【 اللقب🖋 : 】*
*【 الحالة✍🏻 : 】*
*【 المنشن📌: 】*

╰━─━━─≪🥀≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'عرض') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*【 صاحب تغيير العرض 🖼️ : 】*
*【 المدة 🕐 : 】*
*【 السبب✍️: 】*

╰━─━━─≪🥀≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'عضو') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*【 اللقب🖋 : 】*
*【 الحالة✍🏻 : 】*
*【 المنشن📌: ⁩】*
*【 الطرف👥: 】*
*【 الرابط📌: 】*
*【 القوانين : 】*

╰━─━━─≪🥀≫─━━─━╯
`;
    await m.reply(mensaje);
  }
  
  if (command === 'دفع_مخالفة') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `*[ بطاقة دفع المخالفة ]*

*【 اللقب 🖋 : 】*
*【 قيمة المخالفة : 】*
*【 المنشن📌: ⁩】*

╰━─━━─≪🌟≫─━━─━╯
`;
    await m.reply(mensaje);
  }

  if (command === 'قوانين') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╮─━━──═ ❆〘🌟〙❆ ═──━━─╭

*⟐┇↫ الـقـوانـيـن ↬┇⟐*

•────≪°•❋•°≫────•

*⟐╎مخالفات الانذار 🚫 : ↶*

*⓵ | إرسال اكثر من 6 رسائل / 8 صور او فيد /3 ملصقات ورا بعض او بشكل متقطع  .*

*⓶ | التلفظ بكلمات مسيئة مثل ( كل زق - حمار - الخ…) "اكرمكم الله" (يطبق اذا ابلغ العضو).*

*⓷ | مناقشة حلقة أنمي لم يمر على نزولها 6 ساعات .*

*⓸ | الحذف بدون سبب .*

*⓹ | المعلومات الشخصية مثل : ( العمر و المنطقة و الخ… ) .*

*⓺ | إرسال صور / فيد خارج الانمي .*

*⓻ | التحدث عن مواضيع خارج الانمي .*

*⓼ | الاستغباء .*

⌘ ─━━──═ ❆〘🌟〙❆ ═──━━─ ⌘

*⟐╎مخالفات الانذارين ⛔ : ↶*

*⓵ | اتخاذ دور مشرف .*

*⓶ | الإساءة للمشرفين .*

*⓷ | التحدث عن نقابات او ممالك اخرى .*

*⓸ | تسجيل صوت ( البنات ) .*

*⓹ | ارسال اعلام الشذوذ أو المثلية او ايموجيات / ملصقات تدل على ذلك .*

*⓺ | التحدث بِأمور خاصة بالمشرفين / الإدارة .*

*⓻ | ازعاج الاعضاء / الإدارة .*

*⓼ | طلب إشراف / ترقية .*

⌘ ─━━──═ ❆〘🌟〙❆ ═──━━─ ⌘

*⟐╎مخالفات الاربع إنذارات 📛 : ↶*

*⓵ | التشفير بجميع أنواعه ( قد تصل الى الطرد المؤبد ) .*

*⓶ | التحدث عن السياسة او الدين .*

*⓷ | التحريض وبدأ المشاكل .*

*⓸ | التهديد او المزح بالحرق .*

*⓹ | كلام او ملصق فاضح أو مسيئ ( يحدد القائد اذا كان يستحق مؤبد ) .*

*⓺ | القذف أو الشتم ( يحدد القائد اذا كان يستحق مؤبد ) .*

⌘ ─━━──═ ❆〘🌟〙❆ ═──━━─ ⌘

*⟐╎الطرد المؤبد 🛑 : ↶*

*⓵ | إرسال صورة شخصية .*

*⓶ | إرسال مقطع 18+ .*

*⓷ | التحدث عن المانغا / حرق احداث منها .*

*⓸ | النشر بجميع انواعه .*

*⓹ | الاحتكاك بين الجنسين ( بالخاص او الاساسي ) .*

*⓺ | انشاء قروبات تضم أعضاء النقابة / المملكة .*

⌘ ─━━──═ ❆〘🌟〙❆ ═──━━─ ⌘
*⟐╎مـلاحـظات❗ : ↶*

*4 إنذارات = طرد تأديبي يومين .*

*8 إنذارات = طرد تأديبي أسبوع .*

*10 إنذارات = طرد مؤبد .*

━────━ • ⟐ • ━────━

*❋ | يحق لِلقائد والنائب اتخاذ إجراء غير الذي تم ذكره .*

*❋ | الإنذارات يُدفع 50K بيلي لحذفها .*

⌘ ─━━──═ ❆〘🌟〙❆ ═──━━─ ⌘

*⟐╎#دمتم بود وحفظ الله 🩵.*

╯─━━──═ ❆〘🌟〙❆ ═──━━─╰
`;
    await m.reply(mensaje);
  }

  if (command === 'تست') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `تست`;
    await m.reply(mensaje);
  }
  
  
};
handler.tags = ['frases'];
handler.command = handler.help = [
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
  
'اهداء',
'تحويل',
'تغيير_لقب',
'لقب_خاص',
'لقب_دائم',
'تغيير_لقب_مؤقت',
'تقييد',
'حجز_لقب',
'روليت',
'منع_شراء',
  
'استقبال',
'ترحيب',
  
'ترقية',
'اعفاء',
  
'فعالية',
'انتهاء_فعالية',
  
'مسابقة_100',
'نتائج_100',
'مسابقة_50',
'نتائج_50',
'مسابقة_تخمين',
'نتائج_تخمين',
  
'التفاعل_اليومي',
'التفاعل_الاسبوعي',
'ملوك',
  
'نقاش_10',
'نتيجة_10',
'نقاش_6',
'نتيجة_6',
'نقاش_5',
'نتيجة_5',
  
'مخالفة',
'شراء',
'طرف',
'حاله',
'عرض',
'عضو',
'دفع_مخالفة',
  
'قوانين',
'تست'         
];
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page)
      .then((get) => {
        const $ = cheerio.load(get.data);
        const link = [];
        $('article.post').each(function (a, b) {
          link.push($(b).find('a').attr('href'));
        });
        const random = link[Math.floor(Math.random() * link.length)];
        axios.get(random).then((res) => {
          const $$ = cheerio.load(res.data);
          const hasil = {
            title: $$('#content > article > h1').text(),
            author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
            kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
            lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
            cerita: $$('#content > article > p').text(),
          };
          resolve(hasil);
        });
      });
  });
}
