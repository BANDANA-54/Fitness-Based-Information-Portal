function validate(){
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message1 = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(address.length < 5){
    text = "Please Enter Correct Address";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    //return true;
  }
  else
  {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
}
  if(message1.length <= 5){
    text = "Please Enter at least 5 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}