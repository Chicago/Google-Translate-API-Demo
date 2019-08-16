API_KEY = "your-api-key" // replace with google api key, available from google console project

// when the translate button is clicked, pull text from objects with ID "translateText" 
// and replace with a translated version.
$("#translateButton").click(function () {

  // construct url to translate content in #translateText to the language selected by #targetLanguage 
  var url = "https://translation.googleapis.com/language/translate/v2";
  url += "/?key=" + API_KEY;
  url += "&target=" + $("#targetLanguage").val(); // https://stackoverflow.com/questions/50719010/google-translate-api-translate-page-using-js
  url += "&q=" + encodeURI($("#translateText").text()); // encodeURI converts strings to url-safe text

  // POST to google translate api
  var request = new XMLHttpRequest();
  request.open('POST', url);
  // after the request is complete, extract translated text and replace in the web page
  request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      $("#translateText").text(data.data.translations[0].translatedText);
    }
  }
  request.send();

});
