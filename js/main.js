

$(document).ready(function(){
	renderCell()
	render()
	renderMark()
	loadApp()
	calculate()
	renderCalculate()
})


function renderCell () {
	for (var i=1; i<10;i++){
		var cell ='<div><div class="page-container page-'+i+'"></div></div>'
		$('.flipbook').append(cell);
	}

	for (var i=1; i<=256;i++){
		var cell='<span class="num num-'+i+'"></span>';
		$('.page-container').append(cell);
	}
}

function render () {
	var page = []
	for (var i=0; i<9;i++){
		page.push({d:Math.pow(2,i), page:i+1});
	}

	page.map(function(value){
		renderNum(value);
	})

	function renderNum(obj) {
		for (var i=1, index=0;i*obj.d<500;i=i+2){
		  for( var j=0;j<obj.d;j++){
		   var value = i*obj.d+j;
		   if (value<=500) $('.page-'+obj.page+' .num').eq(index).text(value);
		   index++;
		  }  
		}
	}
}

function renderMark () {
	var cell="",value;
	$('.page-container').map(function(i,v){
		i++;
		var cell='<div class="mark"><span class="key">'+i+'</span></div>'
		$(v).after(cell);
	});
}

function loadApp() {
	$('.flipbook').turn({
			width:1160,
			height:640,
			elevation: 50,
			gradients: true,
			autoCenter: true,
			pages:9
	});
}

function renderCalculate () {
	for (var i=1; i<10;i++){
		var cell = '<li><input type="checkbox" value="'+Math.pow(2,i-1)+'" id="list'+i+'"><label for="list'+i+'">'+i+'</label></li>'
		$('.calculate ul').append(cell);
	}
	$('.calculate ul').append('<li class="submit">SEND</li>');
}

function calculate () {
	$('body').on('click','.submit, .close', function(){
		var total=0;
		$('input:checked').map(function(index,value){
			console.log(value);
			total = total + Number($(value).val()); 			
		})
		$('.mask').toggleClass('active');
		$('.result').toggleClass('active');
		$('.result-content').html('YOU NUMBER IS '+total);
	})

}