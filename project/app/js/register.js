require(["config"],function(){
	require(["header"],function(header){
		header.init();
	});
	require(["footer"],function(footer){
		footer.init();
	});	
	require(["validation"],function(validation){
		validation.init();
	})
})