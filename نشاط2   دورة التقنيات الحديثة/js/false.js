$(document).ready(()=>{
   "use strict"
   const btnViewResult = '<button class="col-xs-12" id="cnfbtn"><span><img src="imags/arrow-left-fal.png"> </span>عرض النتائج</button>';
   const btnReturnQuestion = '<button class="col-xs-12" id="cnfbtn"><span><img src="imags/arrow-left-fal.png"> </span>السؤال التالي</button>';
    var qn = Number(localStorage.getItem("qn"));
    localStorage.setItem("qn" , qn+1);
     const falseAnswer = new Audio("audio/falseAnswer.mp3");
     falseAnswer.play();
     if(localStorage.getItem("qn")>3){
       $("#cnfbtn").replaceWith(btnViewResult);
     }else{
       $("#cnfbtn").replaceWith(btnReturnQuestion);
     }
     $("#cnfbtn").on("click", reQuestion);
  function reQuestion(){
     "use strict"
   window.location.href = "questions.html";
}
});
