// AJAX call for autocomplete 
$(document).ready(function() {
	$("#search").keyup(function() {
		$.ajax({
			type: "POST",
			url: "recupList.php",
			data: 'keyword=' + $(this).val(),
			beforeSend: function() {
				$("#search").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
			},
			success: function(data) {
				$("#suggesstion").show();
				$("#suggesstion").html(data);
				$("#search").css("background", "#FFF");
			}
		});
	});
});
//To select a country name
function selectCountry(val) {
	$("#search").val(val);
	$("#suggesstion").hide();
}