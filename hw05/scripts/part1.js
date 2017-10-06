let language = 'English'
let languageCode = 'en'
let jsonData


const clearData = () => {
    const element = document.getElementById('results')
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {language = 'Russian'}
    else if (code === 'es') {language = 'Spanish'}
    else {language = 'English'}
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

// ---------------------- TASK 1 -----------------------------------
// 1. Write a function called 'reverseText' that takes a single
// string as an input. It should return that string with all
// characters reversed e.g., 'Hello, world' will return 'dlrow ,olleH'
// You can test this in the browser by updating the forEach function
// to reverse every tweet's text.
// HINT: This is a common interview question to screen out javascript
// devs who don't understand the language's native functions.
// Google around - you might find a good solution for this problem.
// Once you've written your reverse text function, write a comment
//describing how it works.

//This first attempt works now that I know where to use it
const reverseText1 = (text) => {
  let newStr = '' //Declaring new string variable
  for (let i = text.length-1; i >= 0;i--)
  // For loop iterates backwards through string parameter and adds
  // each character to the new string variable
  {
    newStr = newStr + text[i]
  }
  // New string variable is returned from the function
  return newStr;
}

//Second attempt also works fine when used in the proper place
const reverseText2 = (str) => {
  // New string variable is declared
    let txt = ''
    txt = str
  // Parameter is assigned to new string and then three function
  // are chained to split it into an array of characters, reverse
  // the array and then join the array back into a sptring
    return txt.split('').reverse().join('')
  // the string resulting from the chaining of the three functions is
  // returned.
}



// ---------------------- TASK 2 -----------------------------------
// 2. Now, write a function called 'reverseTweet' that takes a single
// string as an input. If the string contains a hashtag (#), it should
//return the string. If it doesn't contain a hashtag, it should return
// the string with all characters reversed.
// Update the forEach function so that it reverses tweets that don't
// have hashtags
// HINT: Strings have a useful function called indexOf that you may
// find useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// HINT: You already have a reverseText function laying around...

const reverseTweetifNohash = (tweet) => {
  // New string variable is declared
    let txt = ''
  // Parameter tweet is assigned to new string
    txt = tweet
  // if the string passed in contains a hashtag (#)
  // then return the original string
  if (txt.indexOf('#') != -1) {
    return (txt)
  } // else reverse the string and return it
  else {
      return txt.split('').reverse().join('')
    }
}

// ---------------------- DELIVERABLE -----------------------------------
// When somebody searches for a keyword, tweets with hashtags will
//appear as normal. Tweets with no hashtags will be inexplicably reversed.
// EXTRA CREDIT: Add a class to reversed tweets to make their background
// red. This will require modifying the existing CSS!


const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode = ''
            let temp = ''

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            json.statuses.forEach((status) => {
                div = document.createElement('div')
                // Assigns the tweet to String
                let str = status.text
                // if the tweet has a hashtag (#), then div's className is
                // 'tweets and it's background-color is white
                if (str.indexOf('#') != -1) {
                div.className = 'tweet'}
                // else the div's className is 'red-tweet' and it's
                // background color is red
                else { div.className = 'red-tweet'}

            // When Sarah showed me where to call function then both
            // the attempts worked
                textNode = document.createTextNode(reverseTweetifNohash(status.text))

                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
