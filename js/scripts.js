function add(subjectVal, animalVal, foodVal) {
	return subjectVal + animalVal + foodVal;	
}

$(document).ready(function() {
  $(".btn").click(function(event) {
		event.preventDefault()
    const subjectVal = parseInt($("#subject").val());
		const animalVal = parseInt($("#animal").val());
		const foodVal = parseInt($("#food").val());
		const result = add(subjectVal, animalVal, foodVal);
		

		if (result > 8) {
			$(".hidden-c").show();
		} else if (result > 5) {
			$(".hidden-java").show();
		} else {
			$(".hidden-react").show();
		}

		$(".showing").hide()
		
  });
});