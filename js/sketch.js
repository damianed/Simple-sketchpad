var sqrSize = 16;
var size = 90;
$(document).ready(function(){
	drawBoard(size);
	$('button#clearbtn').on('click', function(){
		var tempS= prompt("Enter the size");
		var tempS = parseInt(tempS, 10);

		if(tempS!=null && Number.isInteger(tempS)){
			$('#whiteboard').empty();
			drawBoard(tempS);
		}
	});

});

function drawBoard(s){
	for(var i=0; i<s*16;i+=16){
		$('#whiteboard').append("<div class='row' style='display: block;height:"+sqrSize+"px'><div>");
		}
	for(var i=0;i<s*16;i+=16){
		$('#whiteboard > div.row').append("<div class='sqr' style='height:"+sqrSize+"px;width:"+sqrSize+"px;'></div>");
		}

		setHover();
}

function setHover(){
	$('div.sqr').mouseenter(function(){
		$(this).css('background-color', 'black');
	});

}