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

  var content1 = "هي مجموع الأفراد والجماعات التي تكون في المنظمة في وقت معين";
  var sulotion1 ="الموارد البشرية";
  var op11 ="الموارد المادية";
  var op21 ="الموارد الطبيعية";
  var op31 ="الموارد البشرية";
  var op41 ="الموارد المالية";

  var content2 = "من ضمن  وظائف إدارة الموارد البشرية ما يلي";
  var sulotion2="تخطيط القوى العاملة والاختيار والتعيين";
  var op12 ="تخطيط النشاط التسويقي";
  var op22 ="تخطيط القوى العاملة والاختيار والتعيين";
  var op32 ="تخطيط العمليات الإنتاجية";
  var op42 ="تخطيط العمليات المالية";

  var content3 =  "يأمر بالقيام بـــــ"+ " Yammer "  + "يمكنك استخدام برنامج";
  var sulotion3 ="الحصول على أفضل العاملين للعمل بمشروعك";
  var op13 ="إدارة مخازن مشروعك";
  var op23 ="إدارة عمليات مشروعك";
  var op33 ="الحصول على أفضل العاملين للعمل بمشروعك";
  var op43 ="إجراء الاتصال داخل مشروعك";

  var content4 =  "إذا لم تستطيع كرائد أعمال الاستفادة من التوجهات الحديثة في تكنولوجيا المعلومات بسبب عدم قدرتك على اقتناع بعض الأفراد بأهمية التحول للتكنولوجيا ونظم المعلومات, فيعتبر ذلك من ضمن المعوقات";
  var sulotion4 = "البشرية";
  var op14 ="المالية";
  var op24 ="البشرية";
  var op34 ="الإدارية";
  var op44 ="التسويقية";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

