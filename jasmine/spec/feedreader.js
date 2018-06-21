'use strict';

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have feed URLs', function () {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = allFeeds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var feed = _step.value;

                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have feed names', function () {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = allFeeds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var feed = _step2.value;

                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        });
    });

    /* A new test suite named "The menu" */
    describe('The menu', function () {

        var menuIcon = $('.menu-icon-link');

        function checkMenu() {
            var isHidden = void 0;

            if ($("body.menu-hidden .slide-menu").length > 0) {
                isHidden = true;
            } else {
                isHidden = false;
            }
            return isHidden;
        }
        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function () {
            expect(checkMenu()).toBe(true);
        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('toggles hidden/showing when menu icon clicked', function () {
            menuIcon.click();
            expect(checkMenu()).toBe(false);
            menuIcon.click();
            expect(checkMenu()).toBe(true);
        });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('are loaded with at least 1 entry in feed', function (done) {
            var entries = $(".feed .entry");
            var minimumMet = void 0;
            entries.length >= 1 ? minimumMet = true : minimumMet = false;
            expect(minimumMet).toBe(true);
            done();
        });
    });

    /* A new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {

        var oldEntries = void 0,
            newEntries = void 0;

        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(0, function () {
                oldEntries = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('changes the feed content', function () {
            newEntries = $('.feed').html();
            expect(newEntries).not.toBe(oldEntries);
            //done();
        });
    });
}());
