# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
I am finding the recorded zoom sessions with Sarah to be invaluable!
Although I can rarely attend in person due to two other overlapping
zoom sessions, I really appreciate the questions being asked and answered
and find all of them completely applicable to my work.

## Preamble
The  Mozilla Developer Network (MDN) is definitely my friend! One really
irritating thing that happens occasionally is the site referred to in the
javascript files:
https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=&lang=es
sometimes is unavailable and then some of the methods for the twitter objects
aren't defined.
The error messages in the JavaScript console are:

mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=&lang=es
Failed to load resource: the server responded with a status of 400 (Bad Request)
part2.js:43 undefined

and

Uncaught (in promise) TypeError: Cannot read property 'filter' of undefined
    at part2.js:58
    at <anonymous>

## Part I: Setting Up Your GitHub
I totally understand the importance and beauty of GitHub. I was reluctant to
"git" into it at first but now I'm a convert. I copy all my terminal sessions
into textedit documents using cut and paste so that I can remember and study the
commands as well as the answering messages from the terminal console.

## PART II: Reading response
Editing this file is a nifty way to submit our reading responses. For this
homework, the reading that I did on finding different functions that reverse a
string and also on the use of the filter function was very supportive to the
work that we did in class. Now, I also love CodePen!

## Part III: JavaScript Homework
One important thing that I learned from implementing the reverse function is
that you need to know the code into which you are going to be inserting your
function. If you do not understand what each function returns then there can
be type mismatches between the return of one function and the expected parameter
of the next function. The errors from the JavaScript console are not always
totally helpful.

### Step 2: Filtering Data
This assignment was great practice with creating an anonymous function that can
be passed as a logical condition into the filter method for an array. The logical
condition then is used to test each member of the array and to return only those
members that fit the logical condition "have a hashtag".
The test harness code used the old way of declaring anonymous functions but
I chose to use the newer fat arrow syntax. I became a little confused and had
to struggle with using the proper number of ending parentheses both round and
curly.



### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework to GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 5 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. Submit your homework by paste a link to your branch into the Moodle.
