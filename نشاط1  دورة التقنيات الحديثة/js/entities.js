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

  var content1 = "تعمل ................... على توفير معلومات دقيقة لإدارة المشروعات للقدرة على اتخاذ القرارات ومتابعة سير العمل ومستوى الانجاز بشكل جيد";
  var sulotion1 ="تقنية المعلومات";
  var op11 ="تقنية التصنيع";
  var op21 ="تقنية التسويق";
  var op31 ="تقنية المعلومات";
  var op41 ="تقنية الحفاظ على البيئة";

  var content2 = "هي هيكل متراكم من التقنيات المتطورة والمستخدمة من قبل إدارة أي منظمة ومواردها البشرية للوصول إلى أفضل الحالات في تحسين الأداء وتعزيز الموقع التنافسي للمنظمة";
  var sulotion2="تكنولوجيا المعلومات";
  var op12 ="التسويق";
  var op22 ="تكنولوجيا المعلومات";
  var op32 ="الإدارة";
  var op42 ="الإنتاج";

  var content3 = " .................... من ضمن فوائد التقنية للمشروعات";
  var sulotion3 = "إزالة الكثير من الحواجز والعوائق";
  var op13 ="زيادة الحواجز أمام المشروعات";
  var op23 ="صعوبة عملية الاتصال";
  var op33 ="زيادة العوائق أمام المشروعات";
  var op43 ="إزالة الكثير من الحواجز والعوائق";

  var content4 =  "هي كل ما يقوم به الإنسان من تغييرات أو تعديلات أضافها إلى الأشياء المتواجدة في الطبيعة";
  var sulotion4 = "التقنية";
  var op14 ="تكنولوجيا التعليم";
  var op24 ="تكنولوجيا التسويق";
  var op34 ="التقنية";
  var op44 ="تكنولوجيا الاتصالات";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

