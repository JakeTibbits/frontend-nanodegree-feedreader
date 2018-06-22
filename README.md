# RSS Feedreader & Testing Suite

Welcome to this RSS Feedreader application. The app gathers data from several
feeds into one easy-to-use platform.

Also included is an extensive Jasmine testing suite designed to ensure all
functions of the feed are operational and error-free.


## Using this app

Use the hamburger menu icon in the top left to open the list of available feeds.

Click your chosen feed to view a list of article titles and links.


## Jasmine testing suite

The included feedreader.js file runs a suite of tests to check functionality of
app.js.

The results of the tests will display at the bottom of the feedreader app.

Any failed tests will show as red warnings, with indications of which line of
code causes the error. When all code is correct, the tests will display in green.

## Getting production-ready

It is recommended to remove the testing functionality from the front end before
putting the app into production.

This can be achieved by removing the script calls for the following files from
index.html :

1. jasmine/lib/jasmine-2.1.2/jasmine.j
2. jasmine/lib/jasmine-2.1.2/jasmine-html.js
3. jasmine/lib/jasmine-2.1.2/boot.js
4. jasmine/spec/feedreader.js


## Credits

The feedreader functionality, markup and styling were produced by Udacity as
learning materials for their Frontend Developer Nanodegree programme.

The Jasmine tests found in feedreader.js are written by Jake Tibbits.
