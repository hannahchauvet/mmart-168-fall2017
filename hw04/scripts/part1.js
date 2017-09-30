//--Hannah Chauvet's Homework04
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    //This function sets the innnerHTML of the span element whose id is
    //"language" to be whatever the language is that corresponds to the
    //parameter called code that is passed into the function.
    languageCode = code
    if (code === 'ru') {language = 'Russian'}
    else if (code === 'es') {language = 'Spanish'}
    else if (code === 'zh') {language = 'Chinese'}
    else if (code === 'fr') {language = 'French'}
    else if (code === 'de') {language = 'German'}
    else if (code === 'he') {language = 'Hebrew'}
    else if (code === 'ur') {language = 'Urdu'}
    else {language = 'English'}
    document.getElementById('language').innerHTML = language
}
