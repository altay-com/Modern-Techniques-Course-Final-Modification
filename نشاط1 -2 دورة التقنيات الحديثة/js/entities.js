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

  var content1 = "هي العملية المرتبطة بالعنصر البشري في المشروعات بكافة أنواعها";
  var sulotion1 ="إدارة الموارد البشرية";
  var op11 ="إدارة الانتاج";
  var op21 ="إدارة الموارد البشرية";
  var op31 ="إدارة التسويق";
  var op41 ="إدارة الاعمال";

  var content2 = "عبارة عن الأنشطة المتعلقة بخلق السلع والخدمات وذلك من خلال تحويل المدخلات إلى مخرجات";
  var sulotion2="إدارة العمليات والإنتاج";
  var op12 ="إدارة التسويق";
  var op22 ="إدارة الصيانة";
  var op32 ="إدارة العمليات والإنتاج";
  var op42 ="إدارة الافراد";

  var content3 = " تعني تحويل كافة الأعمال والخدمات الإدارية التقليدية إلى أعمال وخدمات إلكترونية تنفذ بسرعة عالية ودقة متناهية باستخدام تقنيات تكنولوجيا المعلومات";
  var sulotion3 = "الإدارة الإلكترونية";
  var op13 ="الإدارة التقليدية";
  var op23 ="الإدارة الإلكترونية";
  var op33 ="ادارة الإنتاج";
  var op43 ="ادارة الاعمال";

  var content4 =  "من ضمن أهداف وفوائد الإدارة الإلكترونية";
  var sulotion4 = "سهولة الإدارة وسهولة متابعة الأعمال";
  var op14 ="صعوبة إدارة الاعمال";
  var op24 ="صعوبة الإدارة وسهولة متابعة الأعمال";
  var op34 ="سهولة الإدارة وسهولة متابعة الأعمال";
  var op44 ="تصعوبة متابعة الأعمال";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

