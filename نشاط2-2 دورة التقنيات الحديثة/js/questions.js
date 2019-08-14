 $(document).ready(function(){
   'use strict'
   var view = localStorage.getItem("view");
   var answer = null;
   var qn = Number(localStorage.getItem("qn"));
   var times = Number(localStorage.getItem("times"));

  //view the result after 4 questions
  if(qn>3){
    window.location.href = "review.html";
  }
  //paths for audios
  var audiosrc = "audio/tName.mp3";
  var audioQuestionsrc = "audio/10"+(qn+1)+".mp3";

  //audio objects
  const chooseAudio = new Audio(audiosrc);
  const questionAudio = new Audio(audioQuestionsrc);


  //running the audios
  if(qn ==0){
    chooseAudio.play();
    var timedoutId= setTimeout(()=>{
      questionAudio.play();
    } , 2500);
  }else{
      questionAudio.play();
  }
  var imgsrc = "imags/num0"+(qn+1)+".png";
  $("#numberOfQuestion").attr('src' ,imgsrc );

 //loading the Questions
  $("#content").text(questions[qn].content);
  $("#ch1").text(questions[qn].op1);
  $("#ch2").text(questions[qn].op2);
  $("#ch3").text(questions[qn].op3);
  $("#ch4").text(questions[qn].op4);

    //event for changing the img on the sound
    $("#1,#change").click(function(){
      "use strict"
     var src = ($("#selectImg").attr('src') === 'imags/Recta.png')?'imags/mute.png':'imags/Recta.png';
     $("#selectImg").attr('src' , src) ;
     if(src == "imags/Recta.png"){
      questionAudio.play();
     }else{
      chooseAudio.pause();
      questionAudio.pause();
      questionAudio.currentTime = 0 ;
      if(timedoutId!=null){
        clearTimeout(timedoutId);
      }
     }
     });

   //disable the submit to the server
   $("form").on("submit" , (e)=>{
     "use strict"
     e.preventDefault();
   })

   //getting values from option 1
   $("#choose1").on('click' , ()=>{
     "use strict"
     answer = ($("#ch1").text()).trim();
   });
   //getting values from option 2
   $("#choose2").on('click' , ()=>{
     "use strict"
     answer = ($("#ch2").text()).trim();
   });
   //getting values from option 3
   $("#choose3").on('click' , ()=>{
     "use strict"
     answer = ($("#ch3").text()).trim();
   });

   //getting values from option 4
   $("#choose4").on('click' , ()=>{
     "use strict"
     answer = ($("#ch4").text()).trim();
   });

     //event for conform the answer
     $("#cnfbtn").on("click" ,()=>{
       "use strict"
       if(answer == null){
         Swal.fire({
           type: 'error',
           title: 'أنت لم تجب بعد',
           text: 'الرجاء اختيار خيار من الخيارات',
         });
       }else{
         if(questions[qn].sulotion == answer){
         localStorage.setItem("qn" ,qn+1 );
         localStorage.setItem(qn , "1");
         window.location.href = "true.html";
         }else{
         localStorage.setItem(qn , "0");
         window.location.href = "false.html";
         }
       }
     });

     switch(qn){
      case 0:
       $(".q1").css("background-color", "#AE71BF");
       $(".q1").css("color", "white");

      break;
      case 1:
       $(".q1").css("background-color", "#AE71BF");
       $(".q2").css("background-color", "#AE71BF");
       $(".q1").css("color", "white");
       $(".q2").css("color", "white");

        break;
      case 2:
       $(".q1").css("background-color", "#AE71BF");
       $(".q2").css("background-color", "#AE71BF");
       $(".q3").css("background-color", "#AE71BF");
       $(".q1").css("color", "white");
       $(".q2").css("color", "white");
       $(".q3").css("color", "white");

       break;
      case 3:
       $(".q1").css("background-color", "#AE71BF");
       $(".q2").css("background-color", "#AE71BF");
       $(".q3").css("background-color", "#AE71BF");
       $(".q4").css("background-color", "#AE71BF");
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
