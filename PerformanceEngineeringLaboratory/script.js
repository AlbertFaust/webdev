$('#sidebar').affix({
  offset: {
    top: 726
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
