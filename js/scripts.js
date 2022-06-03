function add(subjectVal, animalVal, foodVal) {
	return subjectVal + animalVal + foodVal;
}

$(document).ready(function() {
  $(".btn").click(function(event) {
		event.preventDefault()
    const subjectVal = parseInt($("#subject").val());
		const animalVal = parseInt($("#animal").val());
		const foodVal = parseInt($("#animal").val());
		
		$(".hidden-c").show();
		$(".hidden-java").show();
		$(".hidden-react").show();
		$(".showing").hide();
  });
});