
function doctorLogin() // function for storing Dr user name and passwords
{
    var DrName = document.getElementById("DocN").value;
    var DrPassword = document.getElementById("DocP").value;



    if (DrName == "doctorA" && DrPassword == "password")  //Doctor 1
    {
        window.location.assign("DocPortal/Doc1.html");
    }

    else if (DrName == "doctorB" && DrPassword == "password")  //Doctor 2
    {
        alert("DR B logged in");
    }
    else {
        alert("Login not Possible");
    }


}

