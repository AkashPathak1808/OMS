
document.addEventListener("DOMContentLoaded", function () {
    var sendMessageBtn = document.getElementById("sendMessageBtn");
    var nameInput = document.getElementById("yourName");
    var emailInput = document.getElementById("yourEmail");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");


    function checkInputs() {
      var nameValue = nameInput.value.trim();
      var emailValue = emailInput.value.trim();
      var subjectValue = subjectInput.value.trim();
      var messageValue = messageInput.value.trim();

      var isInputsEmpty =
        nameValue === "" ||
        emailValue === "" ||
        subjectValue === "" ||
        messageValue === "";

      var isEmailValid = validateEmail(emailValue);

      sendMessageBtn.disabled = isInputsEmpty || !isEmailValid;
    }

    function validateEmail(email) {
      
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function validateInputs(input, errorElement, errorMessage) {
      if (input.value.trim() === "") {
        errorElement.innerHTML = errorMessage;
        return false;
      } else {
        errorElement.innerHTML = "";
        return true;
      }
    }
   

    nameInput.addEventListener("input", function () {
      checkInputs();
      validateInputs(
        nameInput,
        document.getElementById("yourNamee"),
        "* Please write your Name"
      );
    });

    emailInput.addEventListener("input", function () {
      checkInputs();
      validateInputs(
        emailInput,
        document.getElementById("yourEmaill"),
        "* Please write your Email"
      );

      var isEmailValid = validateEmail(emailInput.value.trim());
      if (!isEmailValid) {
        sendMessageBtn.disabled = true;
      }
    });

    subjectInput.addEventListener("input", function () {
      checkInputs();
      validateInputs(
        subjectInput,
        document.getElementById("subjectt"),
        "* Please write subject"
      );
    });

    messageInput.addEventListener("input", function () {
      checkInputs();
      validateInputs(
        messageInput,
        document.getElementById("messagee"),
        "* Please write message"
      );
    });
     


  function formSubmit() {
    document.getElementById("yourForm").reset();
  }
  var form = document.getElementById("yourForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    formSubmit();
  });

  function formSubmit() {
    sendMessageBtn.disabled = true;
    document.getElementById("yourForm").reset();
  }

  


  });
  


