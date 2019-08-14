API_KEY = "your-api-key"

$("#translateButton").click(function () {

  var url = "https://translation.googleapis.com/language/translate/v2";
  url += "/?key=" + API_KEY;
  url += "&target=" + $("#targetLanguage").val(); // https://stackoverflow.com/questions/50719010/google-translate-api-translate-page-using-js
  url += "&q=" + encodeURI($("#translateText").text());

  var request = new XMLHttpRequest();
  request.open('POST', url);
  request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    $("#translateText").text(data.data.translations[0].translatedText);
  }
}

request.send();

});
