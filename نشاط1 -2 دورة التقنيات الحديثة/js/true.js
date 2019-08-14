$(document).ready(()=>{

  const btnView = '<button class="aaa col-xs-12 animated bounceInRight" id="cnfbtn"> <span><img src="imags/arrow-left-tr.png"> </span> عرض النتائج </button> ';
  const btnNextQuestion = '<button class="aaa col-xs-12 animated bounceInRight" id="cnfbtn"> <span><img src="imags/arrow-left-tr.png"> </span> السؤال التالي </button> ';

   var qn = Number(localStorage.getItem("qn"));
      setTimeout(function(){
          const falseAnswer = new Audio("audio/trueAnswer.mp3");
          falseAnswer.play();
      },1000);

      if(qn>3){

         $("#cnfbtn").replaceWith(btnView);
         $("#cnfbtn").on('click' ,review );
      }else{

         $("#cnfbtn").replaceWith(btnNextQuestion);
         $("#cnfbtn").on('click' ,nextQuestion);
      }

      function nextQuestion(){
        "use strict"
          window.location.href = "questions.html";
      }

      function review(){
        "use strict"
         window.location.href = "review.html";
      }
      qn = qn - 1;
      switch(qn){
        case 0:
         $(".q1").css("background-color", "#2AAA80");
         $(".q1").css("color", "white");

        break;
        case 1:
         $(".q1").css("background-color", "#2AAA80");
         $(".q2").css("background-color", "#2AAA80");
         $(".q1").css("color", "white");
         $(".q2").css("color", "white");

          break;
        case 2:
         $(".q1").css("background-color", "#2AAA80");
         $(".q2").css("background-color", "#2AAA80");
         $(".q3").css("background-color", "#2AAA80");
         $(".q2").css("color", "white");
         $(".q3").css("color", "white");
         $(".q1").css("color", "white");

         break;
        case 3:
         $(".q1").css("background-color", "#2AAA80");
         $(".q2").css("background-color", "#2AAA80");
         $(".q3").css("background-color", "#2AAA80");
         $(".q4").css("background-color", "#2AAA80");
         $(".q1").css("color", "white");
         $(".q2").css("color", "white");
         $(".q3").css("color", "white");
         $(".q4").css("color", "white");

        break;
        default:
        window.localStorage.setItem("qn" , 0);
        window.location.href = "questions.html";
         }
  });
