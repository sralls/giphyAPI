$(document).ready(function(){ 
 $('#subButton').on('click', function(input){ //when the submit button is clicked, run this function (what does the input do?)
  loadGifs($('#inputText').val()) //run this function with the input text selector... why do we need to do the .val() ??
  $('.gifList').empty() //once that function is done, clear the gifList array so our next search doesn't overlap
  });
})     

function loadGifs(searchWords){ //inputText becomes searchWords parameter
    $.ajax({url: 'http://api.giphy.com/v1/gifs/search?q=' + searchWords + '&api_key=dc6zaTOxFJmzC'}) // The ajax() method is used to perform an AJAX (asynchronous HTTP) request.
      .done(function(result){  /* This could also have been "success:". Once the search has been done,*/
            var gifArray = [];
            for(var i = 0; i < result["data"].length; i++){
                gifArray.push("<img src='" + result["data"][i]["images"]["original"]["url"] + "'>");
              }
              $('.gifList').append(gifArray.join('')) // in the gifList selector, put the gifArray
    })
}