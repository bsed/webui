// JavaScript Document




jQuery.fn.wuDropdown = function(options) {
	
	
       function openSubMenu() {
		    $(this).find('ul').width(settings.subwidth);
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
	   
	   
	   var settings =$.extend({
		 subwidth: $(this).width()-1 // 子菜单宽度
	  },options);
	   
	   
	    $(this).bind('mouseover', openSubMenu);
		$(this).bind('mouseout', closeSubMenu);
		
		
 };