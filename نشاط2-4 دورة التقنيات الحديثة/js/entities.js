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

  var content1 = "يعد من صور رأس المال المدخرة في صور سلع أو منتجات أو مواد خام تقوم الشركة بتخزينها لحين الحاجة إليها";
  var sulotion1 ="المخزون";
  var op11 ="المخزون";
  var op21 ="كمية الإنتاج";
  var op31 ="كمية المبيعات";
  var op41 ="المصروفات";

  var content2 = "من ضمن العمليات المرتبطة بالمخازن التي يجب أن تقوم بها كصاحب مشروع";
  var sulotion2="كل ما سبق";
  var op12 ="عمل جرد دوري لمتابعة حال المخزون";
  var op22 ="تصنيف المنتجات وعمل كود لكل صنف";
  var op32 ="كل ما سبق";
  var op42 ="تحديد الأرصدة المتاحة ومتابعتها";

  var content3 ="دابل كليك -Double Click ERP"+" يمكنك استخدام برنامج اي آر بي"
  var sulotion3 ="الأمور المالية وإدارة المخازن معاً";
  var op13 ="التسويق الإلكتروني";
  var op23 ="الأمور المالية وإدارة المخازن معاً";
  var op33 ="إدارة الموارد البشرية";
  var op43 ="إدارة العمليات";

  var content4 =  "يعتبر برنامج سهل أحد التقنيات المرتبطة";
  var sulotion4 = "بالمخازن";
  var op14 ="بالمخازن";
  var op24 ="بالاتصال";
  var op34 ="بالتسويق";
  var op44 ="بالموارد البشرية";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

