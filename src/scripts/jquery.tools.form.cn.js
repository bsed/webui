// JavaScript Document

function cnValidate(){
	$.tools.validator.localize("cn", {
		':email'  		: '请您填写正确的Email地址！',
		':number' 		: '请您填写有效的数字！',
		'[max]'	 		: '您填写的值过大，请填写小于 $1 的值！',
		'[min]'	 		: '您填写的值过小，请填写大于$1的值！',
		'[required]' 	: '字段不能为空，请您完成填写！'
	});
	
}