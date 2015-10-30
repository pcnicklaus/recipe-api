// add scripts

$(document).on('ready', function() {
  $('p').hide();

});

$('form').on('submit', function (event) {
  event.preventDefault();
  var searchTerm = $('#search-term').val().trim();
  getResults(searchTerm);
  $('p').show();
});
// http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken
//create a function to put our ajax function in:
function getResults(searchTerm) {
  // set it equal to a variable so you can say what you want to do when it's done see DONE below
  var request = $.ajax({
    //requires a url - you have to specify the endpoint
    // chk documentation such as: https://developer.spotify.com/web-api/endpoint-reference/
    url: "http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&",
    // headers: { 'x-my-custom-header': 'some value' },
    // requires a method Post or GET mainly, GET
    headers: {"X-Test-Header": "test-value"},
    method: "GET",
    // how it comes back
    // data: {
    //   key: '4ee21f110453547468b252d74f4b92c0',
    //   q: searchTerm,
    //   sort: "sort=r"
    // },
    // needs to tell it how to return
    // dataType: "json",
  });
    // request.done(function(response) {
    //   var recipes = response.items;
    //   // need a bucket to put everything in
    //   var display = "";
    //   //      array   then callback function
    //                   //i is albums[i]
    //   $.each(recipes, function(i, recipe) {
    //      var recipeName = recipes.title;
    //       // pass thru the albums images that you have to get
    //      var recipeImage = recipes.image[0].url;
    //      var recipeLink = recipes.f2f_url;
    //      display += "<li><img src=" + recipeImage + "></li>";
    //      $('.results').html(display);
    //     });
    // });
    // need something to be displayed if everything goes awry
    // results.fail(function(error) {
    //   alert('something went wrong');
    // });
}



