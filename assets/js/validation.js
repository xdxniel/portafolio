document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email === "") {
      alert("Please enter your email.");
      return false;
  } else if(!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      return false;
  }
  console.log("Validado");
  document.getElementById('form').submit()
});
