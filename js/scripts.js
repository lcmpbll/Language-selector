function add(subjectVal, animalVal, foodVal) {
	return subjectVal + animalVal + foodVal;	
}

$(document).ready(function() {
  $(".btn").click(function(event) {
		event.preventDefault();

		const coderName = $("input#name").val();
			$("#your-name").text(coderName);
	
		const subjectVal = parseInt($("#subject").val());
		const animalVal = parseInt($("#animal").val());
		const foodVal = parseInt($("#food").val());
		
		const result = add(subjectVal, animalVal, foodVal);
		
		if (result > 8) {
			$(".answer").text("C #");
		} else if (result > 5) {
			$(".answer").text("JavaScript");
		} else {
			$(".answer").text("React");
		}
		
		$(".language").show();
		$(".showing").hide();
		
  });
});