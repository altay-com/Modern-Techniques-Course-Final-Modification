var view = localStorage.getItem("view");
if(view==null || view==0 || view =="0")
{
location.href = "index.html";
}
new Vue({
  el:"#table",
  data:{
    q1:questions[0].content,
    q2:questions[1].content,
    q3:questions[2].content,
    q4:questions[3].content,
    ans1:questions[0].sulotion,
    ans2:questions[1].sulotion,
    ans3:questions[2].sulotion,
    ans4:questions[3].sulotion,
  }
});
