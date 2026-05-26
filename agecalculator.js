document.body.style.backgroundColor="skyblue";
var a=document.querySelector("#age");
var c=document.querySelector("#result");
a.addEventListener("input",function(){
var age=a.value;
var  year=2026-age;
c.innerHTML="your age is "+year;
});