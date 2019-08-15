var url = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name=new%20york%20institute%20of%20technology&api_key=pt92hVtVAjbfC8HT6whu4NYB0L2yfT48vzdhJrGb'

function getData() {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);


  req.send();

  if (req.readyState != 4 || req.status != 200 || req.responseText == ""){
    window.console.error("Request had an error!");
    return;
  }
  alert(req.responseText);

    var reqInformation = JSON.parse(req.responseText);

    var x = reqInformation.metadata.total;

    document.getElementById("text").innerHTML = x;
}
