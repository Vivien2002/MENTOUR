var url= "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=barnard%20college&api_key=SVN3ZmmNNclMNZr6LxgJVZZGRPZ6rh1NdeyZEap9"

function getData() {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);

  req.send();

  if (req.readyState != 4 || req.status != 200 || req.responseText == ""){
    window.console.error("Request had an error!");
    return;
  }
  var reqInformation = JSON.parse(req.responseText);

  document.write(JSON.stringify(reqInformation));


}
