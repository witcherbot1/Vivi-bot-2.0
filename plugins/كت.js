let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^كت$/i.test(m.text)) { 
     responses = [
                   `*∞──────「كـت」──────∞*

*『بروك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لاكسس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ايرين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ماي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『جيغن』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هشيراما』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『روك لي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『استا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لاو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『روجر』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『جيرايا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لولوش』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لايت』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ال』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『موب』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ريكا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاغويا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『شينرا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『فيفي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『واكاسا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『سانجي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『اكاشي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يوكيكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يوميكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ثورز』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『عبدول』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ويليام』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『اكامي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『مادارا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『جوزيف』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كينغ』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لاك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هيناتا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كانيكي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كوراما』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيسامي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيسكي』*

*∞──────「كـت」──────∞*`, 
                     `*∞──────「كـت」──────∞*

*『غوكو』*

*∞──────「كـت」──────∞*`,                                
                   `*∞──────「كـت」──────∞*

*『غوكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ليفاي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هيراكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『روكيا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاناو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『دازاي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『دازاي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيروتو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هوكس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ناغاتو』*

*∞──────「كـت」──────∞*`, 

                   `*∞──────「كـت」──────∞*

*『غاي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『مارلين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميراجين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زورو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كورابيكا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『فيجيتا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『راينر』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『سوكونا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيزارو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ارثر』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『روبين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زابوزا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هيستوريا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يوليوس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『نيزوكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ناخت』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زاك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيلربي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『اسكانور』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『شويفو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『غيو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『جوناثان』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميريوم』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『اول مايت』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هيدان』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لوفي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يوهان』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『رين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كورو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『شانكس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاكاشي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لوتشي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كوين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ايتاتشي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『بياكويا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『اكاي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『تاكيميتشي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاتسورا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاتاكوري』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『نانامي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ديو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ساي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كوشينا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميهوك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميدوريا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『تانجيرو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『هيسوكا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『مليوداس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاناو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاناي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『غوجيتا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زيك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميناتو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『نورمان』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『شيريو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『جاك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كايتو كيد』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيد』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زينتسو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『رينغوكو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『توبيراما』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لابون』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ليون』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كاواكي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『شارلوك』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كورو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زاراكي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ساسكي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ساكورا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميتسكي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『بوروتو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『سارادا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يوتا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ريم』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ميكا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『نامي』*

*∞──────「كـت」──────∞*`, 

                   `*∞──────「كـت」──────∞*

*『راينر』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『نيترو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لوسي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『سابو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『يامي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『زينو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『فيونا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『عبسي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ديدرا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كابتن ثابت』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『صنديد』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『موكا موكا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لافي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كالوس』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『أكيرا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『حنين』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『سامبي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『ماوكلي』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كيرو』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『تاما』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『كبتن ماجد』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『فيروزة』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『لينا』*

*∞──────「كـت」──────∞*`, 
                   `*∞──────「كـت」──────∞*

*『عدنان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『رامي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『حكمت』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『حمزة』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『عبد الرحمن』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سوسان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سندريلا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سندباد』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سمبا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『حسان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سالي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『روبن هود』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سامي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『نوبي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ريمي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ميكا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『الوكا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ارتوريا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كايدو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『هانجي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ميكاسا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『اني』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كيلوا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『بين بيكمان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『هوك』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ايروين』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『شيسوي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『غاتس』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『شنايدر』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『زيلدريس』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『سايتاما』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『غوثر』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كيوكاي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ويس』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ماركو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ران』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『يونو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『زيريف』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『نيجي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『غوهان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ستارك』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ديدارا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『فيونا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『زينو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『يامي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『غوجو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『نيرو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『مايكي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『هاناكو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ناروتو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『يوريتشي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『جوزو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『هيرو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『يور』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『فيتان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『جين』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『جينتوكي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『تسونا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『اوكابي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『غارب』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『دانزو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『بان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ديانا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『بيلامي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『اوبيتو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ادوارد』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『شيكامارو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『تاكيميتشي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ميليوداس』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『لويد』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『دوفلامينغو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『موزان』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『باين』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『نوبارا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『اكاينو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كيوكاي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『باكوغا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『توكا』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『البيرت』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ارمين』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كرولو』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『كيوراك』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『فايوليت』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『جيمبي』*

*∞──────「كـت」──────∞*`,           
                   `*∞──────「كـت」──────∞*

*『ساشا』*

*∞──────「كـت」──────∞*`,     
       
     ];
    }  
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
