

function validation() {
    var flag = true;
    var yourName = document.getElementById("yourName").value;
    var yourEmail = document.getElementById("yourEmail").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (yourName == "") {
        document.getElementById("yourNamee").innerHTML = "* Please write your-Name";
        flag = false;
    } 
    document.getElementById("yourName").addEventListener("input", function () {
        document.getElementById("yourNamee").innerHTML = "";
    });
    
    

    if (yourEmail == "") {
        document.getElementById("yourEmaill").innerHTML = "* Please write your-Email";
        flag = false;
    } 

    document.getElementById("yourEmail").addEventListener("input", function () {
        document.getElementById("yourEmaill").innerHTML = "";
    });


    if (subject == "") {
        document.getElementById("subjectt").innerHTML = "* Please write subject";
        flag = false;
    }
    document.getElementById("subject").addEventListener("input", function () {
        document.getElementById("subjectt").innerHTML = "";
    });



    if (message == "") {
        document.getElementById("messagee").innerHTML = "* Please write message";
        flag = false;
    }


    document.getElementById("message").addEventListener("input", function () {
        document.getElementById("messagee").innerHTML = "";
    });
    

    if (flag) {
        
        document.getElementById("yourForm").reset();
    }

    return flag;
}





