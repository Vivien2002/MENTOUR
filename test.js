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
  var author = reqInformation.articles[0].author;
  var description = reqInformation.articles[0].description;
  var publishedAt = reqInformation.articles[0].publishedAt;
  var content = reqInformation.articles[0].content;
  var imgUrl = reqInformation.articles[0].urlToImage;


  var name1 = reqInformation.articles[1].title;
  var author1 = reqInformation.articles[1].author;
  var description1= reqInformation.articles[1].description;
  var publishedAt1= reqInformation.articles[1].publishedAt;
  var content1 = reqInformation.articles[1].content;
  var imgUrl1= reqInformation.articles[1].urlToImage;


  var name2 = reqInformation.articles[2].title;
  var author2 = reqInformation.articles[2].author;
  var description2 = reqInformation.articles[2].description;
  var publishedAt2 = reqInformation.articles[2].publishedAt;
  var content2 = reqInformation.articles[2].content;
  var imgUrl2= reqInformation.articles[2].urlToImage;


  var name3 = reqInformation.articles[3].title;
  var author3 = reqInformation.articles[3].author;
  var description3 = reqInformation.articles[3].description;
  var publishedAt3= reqInformation.articles[3].publishedAt;
  var content3 = reqInformation.articles[3].content;
  var imgUrl3= reqInformation.articles[3].urlToImage;


  var name4 = reqInformation.articles [4].title;
  var author4 = reqInformation.articles[4].author;
  var description4= reqInformation.articles[4].description;
  var publishedAt4 = reqInformation.articles[4].publishedAt;
  var content4 = reqInformation.articles[4].content;
  var imgUrl4 = reqInformation.articles[4].urlToImage;

    //17-19 articles

  var name17 = reqInformation.articles [17].title;
  var author17= reqInformation.articles [17].author;
  var description17= reqInformation.articles[17].description;
  var publishedAt17= reqInformation.articles[17].publishedAt;
  var content17= reqInformation.articles[17].content;
  var imgUrl17= reqInformation.articles[17].urlToImage;

  var name18= reqInformation.articles [18].title;
  var author18= reqInformation.articles[18].author;
  var description18= reqInformation.articles[18].description;
  var publishedAt18= reqInformation.articles[18].publishedAt;
  var content18= reqInformation.articles[18].content;
  var imgUrl18= reqInformation.articles[18].urlToImage;

  var name19= reqInformation.articles[19].title;
  var author19= reqInformation.articles[19].author;
  var author19= reqInformation.articles[19].description;
  var description19= reqInformation.articles[19].description;
  var publishedAt19= reqInformation.articles[19].publishedAt;
  var content19= reqInformation.articles[19].content;
  var imgUrl19= reqInformation.articles[19].urlToImage;


  document.getElementById("name").innerHTML = name;
  document.getElementById("author").innerHTML = author;
  document.getElementById("description").innerHTML = description;
  document.getElementById("publishedAt").innerHTML = publishedAt;
  document.getElementById("content").innerHTML = content;
  document.getElementById("imgUrl").src = imgUrl;

  document.getElementById("name1").innerHTML = name1;
  document.getElementById("author1").innerHTML = author1;
  document.getElementById("description1").innerHTML = description1;
  document.getElementById("publishedAt1").innerHTML = publishedAt1;
  document.getElementById("content1").innerHTML = content1;
  document.getElementById("imgUrl1").src = imgUrl1;

  document.getElementById("name2").innerHTML = name2;
  document.getElementById("author2").innerHTML = author2;
  document.getElementById("description2").innerHTML = description2;
  document.getElementById("publishedAt2").innerHTML = publishedAt2;
  document.getElementById("content2").innerHTML = content2;
  document.getElementById("imgUrl2").src = imgUrl2;

  document.getElementById("name3").innerHTML = name3;
  document.getElementById("author3").innerHTML = author3;
  document.getElementById("description3").innerHTML = description3;
  document.getElementById("publishedAt3").innerHTML = publishedAt3;
  document.getElementById("content3").innerHTML = content3;
  document.getElementById("imgUrl3").src = imgUrl3;

  document.getElementById("name4").innerHTML = name4;
  document.getElementById("author4").innerHTML = author4;
  document.getElementById("description4").innerHTML = description4;
  document.getElementById("publishedAt4").innerHTML = publishedAt4;
  document.getElementById("content4").innerHTML = content4;
  document.getElementById("imgUrl4").src = imgUrl4;

//17-19 articles

  document.getElementById("name17").innerHTML = name17;
  document.getElementById("author17").innerHTML = author17;
  document.getElementById("description17").innerHTML= description17;
  document.getElementById("publishedAt17").innerHTML= publishedAt17;
  document.getElementById("content17").innerHTML = content17;
  document.getElementById("imgurl17").src = imgurl17;

  document.getElementById("name18").innerHTML= name18;
  document.getElementById("author18").innerHTML= author18;
  document.getElementById("description18").innerHTML= description18;
  document.getElementById("publishedAt18").innerHTML = publishedAt18;
  document.getElementById("content18").innerHTML= content18;
  document.getElementById("imgUrl18").src= imgUrl18;

  document.getElementById("name19").innerHTML= name19;
  document.getElementById("author19").innerHTML= author19;
  document.getElementById("description19").innerHTML= description19;
  document.getElementById("publishedAt19").innerHTML= publishedAt19;
  document.getElementById("content19").innerHTML= content19;
  document.getElementById("imgUrl19").src= imgUrl19;


  // window.open("news.html");


}
