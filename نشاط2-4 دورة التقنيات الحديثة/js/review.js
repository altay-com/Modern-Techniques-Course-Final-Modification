$(document).ready(()=>{
    "use strict"

    const returnToQuestions = '<button class="bbb animated bounceInRight col-lg-6 " id="cnfbtn"><span><img src="imags/arrow-left.png"> </span>إعادة النشاط</button>';
    const viewAnswers = '<button class="bbb animated bounceInRight col-lg-6 " id="cnfbtn"><span><img src="imags/arrow-left.png"> </span>عرض الإجابات</button>';
    var wrongAnswer = 0;
    var correctAnswer = 0;
    const times =  Number(localStorage.getItem("times"));
    localStorage.setItem("times" , times+1);
    localStorage.setItem("qn" , 0);
    $( ".tr2 td:nth-child(3)" ).html(
        questions[0].content
    );

    $( ".tr3 td:nth-child(3)" ).html(
        questions[1].content
    );

    $( ".tr4 td:nth-child(3)" ).html(
        questions[2].content
    );

    $( ".tr5 td:nth-child(3)" ).html(
        questions[3].content
    );

    if(localStorage.getItem(0)==0){
        $( ".tr2 td:nth-child(1) img:nth-child(1)" ).attr("src", "imags/i-remove.png");
        $( ".tr2 td:nth-child(2)" ).html("-");

        wrongAnswer++;

    }else{
        $( ".tr2 td:nth-child(1)" ).html("-");

        $( ".tr2 td:nth-child(2) img:nth-child(1)" ).attr("src", "imags/d-check-2.png");
        correctAnswer++;
    }



    if(localStorage.getItem(1)==0){
        $( ".tr3 td:nth-child(2)" ).html("-");
        $( ".tr3 td:nth-child(1) img:nth-child(1)" ).attr("src", "imags/i-remove.png");
       wrongAnswer++;
    }else{
        $( ".tr3 td:nth-child(1)" ).html("-");
        $( ".tr3 td:nth-child(2) img:nth-child(1)" ).attr("src", "imags/d-check-2.png");
        correctAnswer++;

    }

    if(localStorage.getItem(2)==0){
        $( ".tr4 td:nth-child(2)" ).html("-");
        $( ".tr4 td:nth-child(1) img:nth-child(1)" ).attr("src", "imags/i-remove.png");
        wrongAnswer++;

    }else{
        $( ".tr4 td:nth-child(1)" ).html("-");
        $( ".tr4 td:nth-child(2) img:nth-child(1)" ).attr("src", "imags/d-check-2.png");
        correctAnswer++;

    }


    if(localStorage.getItem(3)==0){
        $( ".tr5 td:nth-child(2)" ).html("-");
        $( ".tr5 td:nth-child(1) img:nth-child(1)" ).attr("src", "imags/i-remove.png");
        wrongAnswer++;

    }else{
        $( ".tr5 td:nth-child(1)" ).html("-");
        $( ".tr5 td:nth-child(2) img:nth-child(1)" ).attr("src", "imags/d-check-2.png");
        correctAnswer++;
    }

    $("#correct").html( correctAnswer +"  :"+"عدد الإجابات الصحيحة");
    $("#wrong").html(wrongAnswer+"  :"+"عدد الإجابات الخاطئة");

    if(wrongAnswer>0){
      if(times>=2){
       localStorage.clear();
       localStorage.setItem("view" , 1);
        $("#cnfbtn").replaceWith(viewAnswers);
         $("#cnfbtn").on('click' , ()=>{
            "use strict"
            window.location.href = "viewAnswer.html";
           });
      }else{
        $("#cnfbtn").replaceWith(returnToQuestions);
         $("#cnfbtn").on('click' , ()=>{
            "use strict"
            window.location.href = "questions.html";
           });
      }
    }else{
      localStorage.clear();
      localStorage.setItem("view" , 1);
      $("#cnfbtn").replaceWith(viewAnswers);
       $("#cnfbtn").on('click' , ()=>{
          "use strict"
          window.location.href = "viewAnswer.html";
         });
    }

    });
