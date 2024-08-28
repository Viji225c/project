function emailSend(){
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "name" + userName +
    "<br/> phone " + phone +  
    "<br/> email " + email ;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vijaykumar0027309@gmail.com",
    Password : "E739900A24F6A9B34AD35595E695B3E98C4F",
    To : 'vijay00231v@gmail.com',
    From : "vijaykumar0027309@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
    if(message=='OK'){
        swal("Good job !", "Your Registration Request is received successfully!", "success");
    }
    else{
        swal("Error!", " please enter the valid G-mail or Password !", "error");
    }
  }
);
}