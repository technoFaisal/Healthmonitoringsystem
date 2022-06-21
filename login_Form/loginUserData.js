
function userLogin() {
    var userName = document.getElementById("UserN").value;
    var userPassword = document.getElementById("UserP").value;

    if (userName == "user1" && userPassword == "p") // user 1
    {
        window.location.assign("http://192.168.0.106/localhost/IOTHEALTHGEE/login_Form/users/user1.php/")

    }

    else if (userName == "user2" && userPassword == "p") // user 2
    {
       
        window.location.assign("localhost/IOTHEALTHGEE/login_Form/users/user1.php/")

    }
    else if (userName == "user3" && userPassword == "password") // user 3
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else if (userName == "user4" && userPassword == "password") // user 4
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else if (userName == "user5" && userPassword == "password") // user 5
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else if (userName == "user6" && userPassword == "password") // user 6
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else if (userName == "user7" && userPassword == "password") // user 7
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else if (userName == "user8" && userPassword == "password") // user 8
    {
        alert("Jamil logged in");
        var myWindow = window.open("", "MsgWindow", "width=200,height=100");
        myWindow.document.write("<p>This is 'MsgWindow'. I am Jamil");
    }
    else {
        alert("Login not Possible");
    }
    //return true;
}

