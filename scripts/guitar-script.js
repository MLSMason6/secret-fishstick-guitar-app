// A $( document ).ready() block.
$( document ).ready(function() {
   
  
  loadSongData("songList");

  
  
  $('#songList li').on('click', (e)=>{
    
    $.each($('#songList li'), (i,e)=>{

        console.log(i, e); 
    });

    let $this = $(e.target); 
    console.log( $this.attr('id'));
    
    var value = $(this).text();
     var index = $('li').index($(this));

     console.log(value, index); 
   
  }); 


  
});



 






function loadSongData(appendId) {

  let appendElement = $(`#${appendId}`);

  appendElement.empty(); 
 
  $.each(data.songs, (index, element)=>{

      $('<li>')
        .attr('id', `songNo${ index}`)
        .addClass('list-group-item')
        .addClass('list-group-item-action')
        .html(`${element.name}, <em>${element.artist}</em>`)
        .appendTo(appendElement);

  });
 

}