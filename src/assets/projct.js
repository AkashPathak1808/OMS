
function validation()
{
    var flag=false;
var yourName =document.getElementById("yourName").value;
var yourEmail =document.getElementById("yourEmail").value;
var subject =document.getElementById("subject").value;
var message =document.getElementById("message").value;


if(yourName == "")
{
document.getElementById("yourNamee").innerHTML="**please write yourName**"; 
flag=false;
}


if(yourEmail == "")
{
document.getElementById("yourEmaill").innerHTML="**please write yourEmail**";
flag=false;
}


if(subject == "")
{
document.getElementById("subjectt").innerHTML="**please write subject**";
flag=false;
}


if(message == "")
{
document.getElementById("messagee").innerHTML="**please write message**";
flag=false;
}




if(yourName=="")
{
    flag=false;
}
else if(yourEmail=="")
{
    flag=false;
}
else if(subject=="")
{
    flag=false;
}
else if(message=="")
{
    flag=false;
}
else{

    document.getElementById("yourForm").reset();
    flag=true;
}
return flag;
}

