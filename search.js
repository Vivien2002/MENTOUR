var start = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name=';
var end = "&api_key=pt92hVtVAjbfC8HT6whu4NYB0L2yfT48vzdhJrGb";



function getData() {

  var college = document.getElementById("college-name").value;
  //
  while (college.indexOf(" ") >= 0) {
    college = college.replace(' ', "%20");
  }

  var query = start + college + end;

  var req = new XMLHttpRequest();
  req.open('GET', query, false);

  req.send();

  if (req.readyState != 4 || req.status != 200 || req.responseText == ""){
    window.console.error("Request had an error!");
    return;
  }


  var reqInformation = JSON.parse(req.responseText);

  var x = 'SAT score: ' +reqInformation.results[0].latest.admissions.sat_scores.average.overall;
  var y = 'ACT score: ' + reqInformation.results[0].latest.admissions.act_scores.midpoint.cumulative;
  var z = 'Admission Rate: ' + reqInformation.results[0].latest.admissions.admission_rate.overall;
  var a = 'Net Tuition: ' + reqInformation.results[0].latest.cost.avg_net_price.overall;

  document.getElementById("text").innerHTML = x;
  document.getElementById("oop").innerHTML = y;
  document.getElementById("woof").innerHTML = z;
  document.getElementById("yikes").innerHTML = a;

}
