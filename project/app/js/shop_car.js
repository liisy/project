require(["config"],function(){
	require(["header"],function(header){
		header.init();
	});
	require(["footer","buy_goods"],function(footer,buy_goods){
		footer.init();
		buy_goods.init();
	})
})