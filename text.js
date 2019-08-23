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

  var name5 = reqInformation.articles[5].title;
  var author5 = reqInformation.articles[5].author;
  var publish5 = reqInformation.articles[5].publishedAt;
  var description5 = reqInformation.articles[5].description;
  var content5 = reqInformation.articles[5].content;
  var imgUrl5 = reqInformation.articles[5].urlToImage;


  var name6 = reqInformation.articles[6].title;
  var author6 = reqInformation.articles[6].author;
  var publish6 = reqInformation.articles[6].publishedAt;
  var description6 = reqInformation.articles[6].description;
  var content6 = reqInformation.articles[6].content;
  var imgUrl6 = reqInformation.articles[6].urlToImage;

  var name7 = reqInformation.articles[7].title;
  var author7 = reqInformation.articles[7].author;
  var publish7 = reqInformation.articles[7].publishedAt;
  var description7 = reqInformation.articles[7].description;
  var content7 = reqInformation.articles[7].content;
  var imgUrl7 = reqInformation.articles[7].urlToImage;

  var name8 = reqInformation.articles[8].title;
  var author8 = reqInformation.articles[8].author;
  var publish8 = reqInformation.articles[8].publishedAt;
  var description8 = reqInformation.articles[8].description;
  var content8 = reqInformation.articles[8].content;
  var imgUrl8 = reqInformation.articles[8].urlToImage;

  var name9 = reqInformation.articles[9].title;
  var author9 = reqInformation.articles[9].author;
  var publish9 = reqInformation.articles[9].publishedAt;
  var description9 = reqInformation.articles[9].description;
  var content9 = reqInformation.articles[9].content;
  var imgUrl9 = reqInformation.articles[9].urlToImage;

  var name10 = reqInformation.articles[10].title;
  var author10 = reqInformation.articles[10].author;
  var publish10 = reqInformation.articles[10].publishedAt;
  var description10 = reqInformation.articles[10].description;
  var content10 = reqInformation.articles[10].content;
  var imgUrl10 = reqInformation.articles[10].urlToImage;

  var name11 = reqInformation.articles[11].title;
  var author11 = reqInformation.articles[11].author;
  var publish11 = reqInformation.articles[11].publishedAt;
  var description11 = reqInformation.articles[11].description;
  var content11 = reqInformation.articles[11].content;
  var imgUrl11 = reqInformation.articles[11].urlToImage;


  var name12 = reqInformation.articles[12].title;
  var author12 = reqInformation.articles[12].author;
  var publish12 = reqInformation.articles[12].publishedAt;
  var description12 = reqInformation.articles[12].description;
  var content12 = reqInformation.articles[12].content;
  var imgUrl12 = reqInformation.articles[12].urlToImage;


  var name13 = reqInformation.articles[13].title;
  var author13 = reqInformation.articles[13].author;
  var publish13 = reqInformation.articles[13].publishedAt;
  var description13 = reqInformation.articles[13].description;
  var content13 = reqInformation.articles[13].content;
  var imgUrl13 = reqInformation.articles[13].urlToImage;


  var name14 = reqInformation.articles[14].title;
  var author14 = reqInformation.articles[14].author;
  var publish14 = reqInformation.articles[14].publishedAt;
  var description14 = reqInformation.articles[14].description;
  var content14 = reqInformation.articles[14].content;
  var imgUrl14 = reqInformation.articles[14].urlToImage;

  var name15 = reqInformation.articles[15].title;
  var author15 = reqInformation.articles[15].author;
  var publish15 = reqInformation.articles[15].publishedAt;
  var description15 = reqInformation.articles[15].description;
  var content15 = reqInformation.articles[15].content;
  var imgUrl15 = reqInformation.articles[15].urlToImage;

  var name16 = reqInformation.articles[16].title;
  var author16 = reqInformation.articles[16].author;
  var publish16 = reqInformation.articles[16].publishedAt;
  var description16 = reqInformation.articles[16].description;
  var content16 = reqInformation.articles[16].content;
  var imgUrl16 = reqInformation.articles[16].urlToImage;
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

  document.getElementById("korea").innerHTML = name5;
  document.getElementById("kore").innerHTML = author5;
  document.getElementById("k").innerHTML = publish5;
  document.getElementById("kor").innerHTML = description5;
  document.getElementById("ko").innerHTML = content5;
  document.getElementById("img").src = imgUrl5;

  document.getElementById("lawss").innerHTML = name6;
  document.getElementById("laws").innerHTML = author6;
  document.getElementById("lawsss").innerHTML = publish6;
  document.getElementById("law").innerHTML = description6;
  document.getElementById("la").innerHTML = content6;
  document.getElementById("l").src = imgUrl6;

  document.getElementById("adamsh").innerHTML = name7;
  document.getElementById("adams").innerHTML = author7;
  document.getElementById("adam").innerHTML = publish7;
  document.getElementById("ada").innerHTML = description7;
  document.getElementById("ad").innerHTML = content7;
  document.getElementById("a").src = imgUrl7;

  document.getElementById("hannek").innerHTML = name8;
  document.getElementById("hanne").innerHTML = author8;
  document.getElementById("hann").innerHTML = publish8;
  document.getElementById("han").innerHTML = description8;
  document.getElementById("ha").innerHTML = content8;
  document.getElementById("h").src = imgUrl8;

  document.getElementById("police").innerHTML = name9;
  document.getElementById("polic").innerHTML = author9;
  document.getElementById("poli").innerHTML = publish9;
  document.getElementById("pol").innerHTML = description9;
  document.getElementById("po").innerHTML = content9;
  document.getElementById("p").src = imgUrl9;

  document.getElementById("mathew").innerHTML = name10;
  document.getElementById("mathe").innerHTML = author10;
  document.getElementById("math").innerHTML = publish10;
  document.getElementById("mat").innerHTML = description10;
  document.getElementById("ma").innerHTML = content10;
  document.getElementById("m").src = imgUrl10;

  document.getElementById("robbyyy").innerHTML = name11;
  document.getElementById("robbyy").innerHTML = author11;
  document.getElementById("robby").innerHTML = publish11;
  document.getElementById("robb").innerHTML = description11;
  document.getElementById("rob").innerHTML = content11;
  document.getElementById("ro").src = imgUrl11;

  document.getElementById("karenn").innerHTML = name12;
  document.getElementById("karen").innerHTML = author12;
  document.getElementById("kare").innerHTML = publish12;
  document.getElementById("kar").innerHTML = description12;
  document.getElementById("ka").innerHTML = content12;
  document.getElementById("karennn").src = imgUrl12;

  document.getElementById("brayan").innerHTML = name13;
  document.getElementById("braya").innerHTML = author13;
  document.getElementById("bray").innerHTML = publish13;
  document.getElementById("bra").innerHTML = description13;
  document.getElementById("br").innerHTML = content13;
  document.getElementById("b").src = imgUrl13;

  document.getElementById("alexxxx").innerHTML = name14;
  document.getElementById("alexxx").innerHTML = author14;
  document.getElementById("alexx").innerHTML = publish14;
  document.getElementById("alex").innerHTML = description14;
  document.getElementById("ale").innerHTML = content14;
  document.getElementById("al").src = imgUrl14;

  document.getElementById("mariaaaa").innerHTML = name15;
  document.getElementById("mariaaa").innerHTML = author15;
  document.getElementById("mariaa").innerHTML = publish15;
  document.getElementById("maria").innerHTML = description15;
  document.getElementById("mari").innerHTML = content15;
  document.getElementById("mar").src = imgUrl15;

  document.getElementById("angelll").innerHTML = name16;
  document.getElementById("angell").innerHTML = author16;
  document.getElementById("angel").innerHTML = publish16;
  document.getElementById("ange").innerHTML = description16;
  document.getElementById("ang").innerHTML = content16;
  document.getElementById("an").src = imgUrl16;

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
