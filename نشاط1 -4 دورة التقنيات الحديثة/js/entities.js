  "use strict"
  class Question{
    constructor(content , sulotion , op1 , op2 , op3 , op4){
      this.content = content;
      this.sulotion= sulotion;
      this.op1 = op1;
      this.op2 = op2;
      this.op3 = op3;
      this.op4 = op4;
    }
  }

  var content1 = "هو عبارة عن عملية تبادل للمعلومات بين مرسل ومستقبل من خلال استخدام وسائل معينة";
  var sulotion1 ="الاتصال";
  var op11 ="الإنتاج";
  var op21 ="التسويق";
  var op31 ="التعيين";
  var op41 ="الاتصال";

  var content2 = "من وسائل الاتصال الحديثة التي يمكنك استخدامها لإجراء الاتصالات داخل مشروعك وخارجة تخفيضاً للتكاليف";
  var sulotion2="كل ما سبق";
  var op12 ="Apper.in-أبير دوت ان";
  var op22 ="Taikatone-تيكاتون";
  var op32 ="كل ما سبق";
  var op42 ="Tango-تانجو";

  var content3 = "عندما ترغب في الاستفادة من التقنيات الحديثة في مجال إجراء الاتصالات داخل مشروعك أو من خارجه , فأي التطبيقات التالية يمكن استخدامه لتحقيق ذلك برنامج في القيام بـــــ";
  var sulotion3 = "Skype-سكايب";
  var op13 ="Jive-جيف";
  var op23 ="Skype-سكايب";
  var op33 ="Minitab-ميني تاب";
  var op43 ="Yammer-يامار";

  var content4 =  "أحد التقنيات المرتبطة " + "(Xender-يعتبر برنامج (زيندر";
  var sulotion4 = "بالاتصال";
  var op14 ="بالاتصال";
  var op24 ="بالتسويق";
  var op34 ="بإدارة العمليات";
  var op44 ="بالمالية";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

