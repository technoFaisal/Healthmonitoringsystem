 
function userLogin()
{
var userName = document.getElementById("UserN").value;
var userPassword = document.getElementById("UserP").value;

if (userName == "faisal" && userPassword == "password")
{var myWindow = window.open("", "MsgWindow", "width=200,height=100");
myWindow.document.write("<p>This is 'MsgWindow'. I am faisals");
alert("faisla logged in");
}

else if (userName == "jamil" && userPassword == "password")
{
    alert("Jamil logged in");
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
}
else
{
    alert("Login not Possible");
}
return true;
}

