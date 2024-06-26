// A $( document ).ready() block.
$( document ).ready(function() {
   
    console.log("the doc is ready!");
  
  //iss1 click btn load songs. https://github.com/barrycumbie/urban-fishstick-guitar-app/issues/1 

    //what dom ? 
  // $('#btnLoadSongs').click(function(){
    

  $('#btnLoadSongs').on('click', function(){
    
    
    $('#songList').slideToggle(2000).empty(); 

    //IIFE = immediately invoked function expression 
  
    console.log("clicked load songs");
    
    //broken...
    // $('#songList').append('<li>You Can't Always Get What You Want</li>');

    console.log(songList); 

    //mix single and double quotes. 
    // $('#songList').append(`<li class="list-group-item" > ${ songList[2] } </li>`);

    // $('#songList').append("<li class=\"list-group-item\">" + songsList[2] + "</li>");


    //another way is to \'
    // $('#songList').append('<li>You Can\'t Always Get What You Want</li>');

    //the best way...backticks and decorators..
    //left of 1, same as the ~ ` ` ` 
    // ` backtick 
    // ' single quote
    // " double quote 
    // $('#songList').append(`<li>You Can't Always Get What You Want</li>`);

    //loop through the array 
    //the traditional...for loop.
    // for (j=0; j < songList.length; j++)
    //   {
    //      $('#songList').append(`<li class="list-group-item"> ${songList[j]} </li>`);
    //   }

    $(songList).each(function(index,value){

      $('#songList').append(`<li class="list-group-item"> ${ value } </li>`)
    }); 

  });

  $('#btnClearSongs').on('click', function(){

     $('#songList').slideToggle(1000).empty(); 

  });
  
  let songList = [
    "Knockin' on Your Screen Door, John Prine", 
    "<em>Sweet Jane</em>, Velvet Underground",
    "I Don't Believe You She Acts Liek We NEver Have Met, bob dylan",
    "You Can\'t Always Get What You Want",
    "American Girl, Tom Petty",
    `have you ever seen the rain, creedence clearwater revival`,
    "corpus cristi bay, robert earl keene",
    `abandoned love, bob dylan`,
    "Via Chicago by Wilco"
  ]; // next time, add in songs from my tab app. 

});

/* this is kinda what vanilla js looks like. 
 var el; 
 el = document.getElementByTagName("button"); 
 el.addEventListener("click", ) */

 //make a data thingy: array (list)
 // var => let or const = 22/7 

 




