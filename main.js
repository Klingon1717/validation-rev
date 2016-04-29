$("form").submit(function(event){
	var errorMessage = "";
	event.preventDefault();
	function isValidateEmailAddress(emailAddress) {
	 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	 return emailReg.test(emailAddress);
};
if (!isValidateEmailAddress($("#email").val())){
	errorMessage=errorMessage+"<br />Please enter a valid email address";
}
if (!$.isNumeric($("#phone").val())){
	errorMessage=errorMessage+"<br />Please enter a valid phone number";
}
if($(passOne).val() != $("passTwo").val()){
	errorMessage=errorMessage+"<br /> Passwords do not match";
}

$("#error").html(errorMessage);

});