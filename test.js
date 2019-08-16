var url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=c5fc2fc57506461e92dd1bb90f5976c6'

function getData() {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);

  req.send();

  if (req.readyState != 4 || req.status != 200 || req.responseText == "") {
    window.console.error("Request had an error!");
    return;
  }

  var reqInformation = JSON.parse(req.responseText);

  var name = reqInformation.articles[0].title;


  document.getElementById("text").innerHTML = name;

  // window.open("news.html");


}
