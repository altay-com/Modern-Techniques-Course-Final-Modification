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

  var content1 = "هي المنتجات أو الخدمات التي تعتمد على التطور التكنولوجي في تحسين وتطوير الخدمات المالية التقليدية";
  var sulotion1 ="التكنولوجيا المالية";
  var op11 ="التكنولوجيا المالية";
  var op21 ="تكنولوجيا الاتصالات";
  var op31 ="التكنولوجيا الإنتاجية";
  var op41 ="التسويق الالكتروني";

 // var content2 = " أحد التقنيات المرتبطة قوة التخطيط لبرامج الإدارة الالكترونية"+ " (QuikBook -يعتبر برنامج (كويك بوك";
 var content2 = "يعتبر برنامج  كويك بوك  أحد التقنيات المرتبطة  قوة لبرامج (QuikBook) الإدارة الإلكترونية";

  var sulotion2="بالمالية";
  var op12 ="بالموارد البشرية";
  var op22 ="بالتسويق";
  var op32 ="بالمالية";
  var op42 ="بالإدارة الالكترونية";

  var content3 = " من المزايا المالية للتحول من نظام الإدارة التقليدية إلى نظام الإدارة الإلكترونية ما يلي ودقة متناهية باستخدام تقنيات تكنولوجيا المعلومات";
  var sulotion3 = "الاقتصاد في الجهد والمال";
  var op13 ="سوء الأداء";
  var op23 ="الاقتصاد في الجهد والمال";
  var op33 ="عدم مرونة الإدارة";
  var op43 ="عدم القدرة على تحقيق الأهداف";

  var content4 =  "تتعدد المعوقات البشرية للاستفادة من التوجهات الحديثة في تكنولوجيا المعلومات";
  var sulotion4 = "كل ما سبق";
  var op14 ="ارتفاع تكاليف خدمة الصيانة";
  var op24 ="قلة الموارد المالية المتاحة توفير التقنيات";
  var op34 ="كل ما سبق";
  var op44 ="ارتفاع تكاليف البنية التحتية اللازمة";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

