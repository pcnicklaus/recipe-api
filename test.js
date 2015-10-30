var request = require('request');
request('http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});
