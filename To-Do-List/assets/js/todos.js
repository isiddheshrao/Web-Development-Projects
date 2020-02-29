// Checking off done to-do's
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click X to delete to-do
$("li").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.propogation();
});

//add new to-do
$("input[type ='text']").keypress(function(event){
	// number 13 is used for keypress detection
	if (event.which === 13) {
		var todoText = $(this).val()
		// the next this referes to the created variable. the upper this refers to input iteration 
		$(this).val("");
		$("ul").append("<li><span>X</span>"+todoText+"</li>");
	}
});