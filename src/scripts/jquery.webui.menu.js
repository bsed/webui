// JavaScript Document




jQuery.fn.wuMenu = function(options) {
	//On Hover Over
     function megaHoverOver(){
	
			$(this).addClass("hot");
			
			
			(function($) {
				//Function to calculate total width of all ul's
				jQuery.fn.calcSubWidth = function() {
					rowWidth = 0;
					//Calculate row
					$(this).find("ul").each(function() { //for each ul...
						rowWidth += $(this).width(); //Add each ul's width together
					});
				};
			})(jQuery); 
		
			if ( $(this).find(".row").length > 0 ) { //If row exists...
		
				var biggestRow = 0;	
		
				$(this).find(".row").each(function() {	//for each row...
					$(this).calcSubWidth(); //Call function to calculate width of all ul's
					//Find biggest row
					if(rowWidth > biggestRow) {
						biggestRow = rowWidth;
					}
				});
		
				$(this).find(".sub").css({'width' :biggestRow}); //Set width
				$(this).find(".row:last").css({'margin':'0'});  //Kill last row's margin
		
			} else { //If row does not exist...
		
				$(this).calcSubWidth();  //Call function to calculate width of all ul's
				$(this).find(".sub").css({'width' : rowWidth}); //Set Width
		
			}
			if (settings.interval ==0){
				$(this).find(".sub").stop().show();
			}else{
				$(this).find(".sub").stop().slideDown('fast'); //Find sub and fade it in
			}
		
		}
		//On Hover Out
		function megaHoverOut(){
			  $(this).removeClass("hot");
			  if (settings.interval ==0){
				  $(this).find(".sub").stop().hide();
			  }else{
			  	$(this).find(".sub").stop().slideUp('fast', function() { //Fade to 0 opactiy
				 $(this).hide();  //after fading, hide it
		  		});
		  }
		}
	
	
	
	var settings =$.extend({
		sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
   	    interval: 100, // number = milliseconds for onMouseOver polling interval
        over: megaHoverOver, // function = onMouseOver callback (REQUIRED)
        timeout: 100, // number = milliseconds delay before onMouseOut
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)
	},options);
	
   return  $(this).find("li").hoverIntent(settings);
 };