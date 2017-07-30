var width = 500;
var size = 15;
var sqrSize;
$(document).ready(function(){
	calcSqr(size);
	drawBoard();
	$('button#setSize').on('click', function(){
		var tempS= prompt("Enter the size");
		var tempS = parseInt(tempS, 10);

		if(tempS!=null && Number.isInteger(tempS)){
			calcSqr(tempS);
			clear();
		}
	});

	$('button#clearbtn').on('click',function(){
		clear();
	})

});
function drawBoard(){
	for(var i=0; i<width;i+=sqrSize){
		$('#whiteboard').append("<div class='row' style='display: block;height:"+sqrSize+"px'><div>");
		}
	for(var i=0;i<width;i+=sqrSize){
		$('#whiteboard > div.row').append("<div class='sqr' style='height:"+sqrSize+"px;width:"+sqrSize+"px;'></div>");
		}

		setHover();
		setButtonW();
}

function setHover(){
	$('div.sqr').mouseenter(function(){
		$(this).css('background-color', getRandomColor());
	});

}

function setButtonW(){
	$('button#clearbtn').css({'width': ($('whiteboard').width()+'px')});
}
function calcSqr(s){
	sqrSize=width/s;
}

function clear(){
	$('#whiteboard').empty();
	drawBoard();
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}