
function validation()
{
var yourName =document.getElementById("yourName").value;
var yourEmail =document.getElementById("yourEmail").value;
var subject =document.getElementById("subject").value;
var message =document.getElementById("message").value;


if(yourName == "")
{
document.getElementById("yourNamee").innerHTML="**please write yourName in the box**"; 
}


if(yourEmail == "")
{
document.getElementById("yourEmaill").innerHTML="**please write yourEmail in the box**";
}


if(subject == "")
{
document.getElementById("subjectt").innerHTML="**please write subject in the box**";
}



if(message == "")
{
document.getElementById("messagee").innerHTML="**please write message in the box**";
}





if(yourName=="")
{
    alert("something went wrong");
   
}
else if(yourEmail=="")
{
   
}
else if(subject=="")
{
    
}
else if(message=="")
{
  
}
else{
    alert("form submitted successfully");
    
}


}

