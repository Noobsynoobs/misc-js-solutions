

<script type="text/javascript">
jQuery(function($){

    $(document).ready(function(){

	var mv_txt = $("#to_be_moved_1").text();
	
	var size = $(window).width();
	var flag = 0;
	var accordion_toggle = $('.accordion > li > .toggle');
  	 flag_size = '';



if(size < 768 ){
flag_size = 1;
$("#alt_loc").text(mv_txt);
}



else if (size > 768 ){
flag_size = 0;
}

$(window).on('resize' , function(e){
	var MobSize = window.matchMedia("screen and (max-width: 767px)");
	var resize_width = $("body").prop("clientWidth");
	var innerw = window.innerWidth;
	
	if(innerw >= 768 && flag == 1){
	var styles = {display:"inline-block"};
		$('.reveal').css(styles);
		flag_size = 0;
		$("#alt_loc").hide();
		
	
	}
	
	else if (innerw <= 768 && flag == 1){
	var styles = {display:"block"};
	$('.reveal').css(styles);
	flag_size = 1;
	$("#alt_loc").text(mv_txt);
	$("#alt_loc").show();
	
	}
	
	else if (innerw >= 768){
	var styles = {display:"inline-block"};
		$("#alt_loc").text();
		flag_size = 0;
	}
	
	else if (innerw <= 768){
	var styles = {display:"block"};
		$("#alt_loc").text(mv_txt);
		flag_size = 1;
	}

  

});

  
 accordion_toggle.bind('click', function (event) {
    var $a = $(this);
    
    event.preventDefault();
    
    if ($a.hasClass('active') && flag_size == 0){
                $a.removeClass('active').siblings('div').slideUp(1000);
	        $a.html('show more');
			flag = 0;
			
                $('.toggle').attr('id', '');
				var styles = {display:"inline-block"};
				console.log(flag_size)
				console.log(flag);
    }
	
	else if ($a.hasClass('active') && flag_size == 1){
		$a.removeClass('active').siblings('div').slideUp(1000);
		$a.html('show more');
		flag = 0;
		$('.toggle').attr('id', '');
		var styles = {display:"block"};
		console.log(flag_size);
		console.log(flag);
	}
    else if (!$a.hasClass('active') && flag_size == 1) {
                $a.addClass('active').siblings('div').slideDown(1000);
		$a.html('show less ');
		
		var styles = {display: "block"};
		$('.reveal').css(styles);
                $('.toggle').attr('id' , 'changed');
				flag = 1;
				console.log(flag);
    }
	else if (!$a.hasClass('active') && flag_size == 0){
		$a.addClass('active').siblings('div').slideDown(1000);
		$a.html('show less');
		var styles = {display:"inline-block"};
		$('.reveal').css(styles);
		$("#alt_loc").hide();
		$('.toggle').attr('id', 'changed');
		flag = 1;
		console.log(flag);
	}
});




  
});

});

