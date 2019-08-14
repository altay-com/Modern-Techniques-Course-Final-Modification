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

  var content1 = "يعتبر أحد أهم التقنيات المرتبطة بالتسويق حالياً معوقات إدارية فقط";
  var sulotion1 ="التسويق الإلكتروني";
  var op11 ="التسويق الإلكتروني";
  var op21 ="التسويق من خلال الموزعين";
  var op31 ="التسويق من خلال المندوبين";
  var op41 ="التسويق بالطرق التقليدية";

  var content2 = "التسويق من خلال ........................ هو علم يعني بترتيب موقعك في نتائج محركات البحث وخاصة جوجل عن طريق إدراجه في الصفحة الأولى من خلال البرامج الإعلانية المدفوعة قوة التخطيط لبرامج الإدارة الالكترونية";
  var sulotion2="SEM"+"محركات البحث";
  var op12 ="البريد الإلكتروني";
  var op22 ="مواقع التواصل الاجتماعي";
  var op32 = "SEM"+"محركات البحث";
  var op42 ="تطبيقات الجوال";

  var content3 = "هو أحد قنوات التواصل الاجتماعي الذي يعطى انتشارا أكبر ويساهم في الوصول بشكل أكثر تفصيلاً إلى معلومات حول المنتج";
  var sulotion3 ="جوجل بلس";
  var op13 ="تويتر";
  var op23 ="جوجل بلس";
  var op33 ="يوتيوب";
  var op43 ="انستجرام";

  var content4 =  "هو أحد أدوات التسويق الالكتروني من خلال البريد الإلكتروني يمكنك من إرسال 4000 رسالة بريدية شهرياً لأكثر من 1000 بريد إلكتروني.";
  var sulotion4 = "Vertical Response-فيرتيكال ريسبونس";
  var op14 ="ActiveCampaign-آكتيف كامبينج";
  var op24 ="instagram-انستجرام";
  var op34 ="youtube-اليوتيوب";
  var op44 ="Vertical Response-فيرتيكال ريسبونس";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

