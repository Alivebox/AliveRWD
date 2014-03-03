head.ready(function () {

	//alert("HeadJs is currently working!!");
	
	//Detecting if you are using IE 
	if (head.browser.ie && head.browser.version < 10) {
		alert("Oh man change your browser common");
	}
	
	if (head.browser.chrome) {
		alert("You are cool using chrome");
	}
	
	if(head.desktop){
		$('#my_contents').append("<br>You are on a desktop device");
	}
	
	if(head.touch){
		$('#my_contents').append("<br>Your device support touch");
	}
	
	if(head.mobile){
		$('#my_contents').append("<br>I know you are in a mobile");
	}
	
	if(head.portait){
		$('#my_contents').append("<br>Your device mode is portrait");
	}
	
	if(head.landscape){
		$('#my_contents').append("<br>Your device mode is landscape");
	}
	
});

//Responsive design
