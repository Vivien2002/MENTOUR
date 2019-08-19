var x;

function login(){
  x = document.getElementById("username123").value;
  document.cookie = x;
  window.location.href='user.html';
}

function greeting() {
  document.getElementById("greeting").innerHTML = document.cookie.substring(0, document.cookie.length - 1);
  document.cookie="username123=;expires = Mon,19 Aug 2019 00:00:00 EST";
}
