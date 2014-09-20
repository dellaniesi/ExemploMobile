document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() 
{ 
	$("#btOk").click(function()
	{ 
		var nome = $("#txtNome").val(); 
		if(nome.length == 0) 
		{ 
			alert("Odail Della Niesi Junior"); 
		} 
		else 
		{ 
			alert("Boas Vindas "+nome+"!!"); 
		} 
	}); 
}
