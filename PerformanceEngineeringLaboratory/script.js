var clientHeight = document.getElementById('section1').clientHeight;
//if stylesheet = portrait var = 830
$('#sidebar').affix({
  offset: {
    top: 830
  }
});

var i = 0;

function swapStyleSheet(style){

	var sheet = document.getElementById(style);
    if (i == 0){
      sheet.setAttribute('href', "style2.css");
      i++;
    }
    else if (i==1){
      sheet.setAttribute('href', "style3.css");
      i++;
    }
    else if (i==2){
      sheet.setAttribute('href', "style4.css");
      i++;
    }
    else if (i==3){
      sheet.setAttribute('href', "style5.css");
      i++;
    }
    else if (i==4){
      sheet.setAttribute('href', "style.css");
      i = 0;
    }
}
$('.row .thumbnail').on('load', function() {

}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parents('div');
    var title = $(this).parent('a').attr("title");

    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('.carousel-inner');
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.row .thumbnail').click(function(){
    var idx = $(this).parents('div').index();
  	var id = parseInt(idx);
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected

});
