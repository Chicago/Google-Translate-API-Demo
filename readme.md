# Google Translate API Demo
A proof-of-concept for using Google Translate in the browser (without caching translations) for web content.

![GIF of translate demo](/img/demo-recording.gif)

## Motivation

The City of Chicago is developing a web content translation strategy to comply with the [2015 language access ordinance](https://www.chicago.gov/content/dam/city/depts/mayor/Office%20of%20New%20Americans/PDFs/Language%20Access%20Ordinance.pdf). This repo demonstrates the viability of the [Google Translate v2 API](https://cloud.google.com/translate/docs/reference/rest/v2/translate) for translating web content. This demo uses the AutoML v2 API for simplicity; a city-wide deployment would likely use the new NMT v3 API for greater accuracy. 

## Next Steps

This demo is a minimal proof-of-concept for web-based translation. A more complete script would scan the DOM for text objects, make one API call containing all text to be translated, and replace all text objects. To ensure translation quality, the script could also send the source text for translation rather than the browser text, as the browser text can be translated back and forth between different languages and get a bit jumbled along the way.

## A Note on the Google Translate API

Google does not make it easy to get an API key. I recommend following the [Google codelabs tutorial](https://codelabs.developers.google.com/codelabs/cloud-translation-intro/index.html#0), specifically steps 2-5, to get started.
