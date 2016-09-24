$(document).ready(function(){
	$("#email").change(function(){
		var email = $("#email").val();

		var Reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		var isEmail = Reg.test(email);

		if(isEmail){
			$("p.showerror").html("");
			$("button.sign").removeAttr("disabled");
		}else{
			$("p.showerror").html("Email is illegal..").css("color","red");
			$("button.sign").attr("disabled","disabled");
		}
	});
});