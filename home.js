var x;

function login(){
  x = document.getElementById("username123").value;
  document.cookie = "username="+x+";";
  window.location.href='user.html';
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function greeting() {
  document.getElementById("greeting").innerHTML = getCookie("username");
}
