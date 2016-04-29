$("form").submit(function(event){
	event.preventDefault();
	function validateEmail(email) {
	 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	 return emailReg.test(email);
}
if (!validateEmail($("#email").val())){
alert("not valid");
}
else{
alert('correcttooo');
}


});