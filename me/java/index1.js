function myFun() {  
            alert ("welcome to our site");}
function ptr() {
   var text=document.getElementById("gmail");
   var person=document.getElementById("password");
   if(text=="team@gmail.com" && person==" teamsoul")
   {
       alert("logged is successful");
   }
   else{
       alert("it is not valid");
   }
}
function tast()
{
    alert("thant for your comment");
}
var icon=document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src="sun.svg";
    }
    else{
        icon.src="moon.svg";
    }
}

