$(function(){
	$("[data-toggle='popover']").popover();
	$(".carousel").carousel({
		interval: 4000
	});
	$("#formulario").on("show.bs.modal", function(e) {
		console.log("El modal se esta abriendo");
		$("[data-toggle='modal']").removeClass("btn-info");
		$("[data-toggle='modal']").addClass("btn-outline-info");
		$("[data-toggle='modal']").prop("disabled", true);
	});
	$("#formulario").on("shown.bs.modal", function(e) {
		console.log("El modal se ha abierto");
	});
	$("#formulario").on("hide.bs.modal", function(e) {
		console.log("El modal se esta cerrando");
		$("[data-toggle='modal']").removeClass("btn-outline-info");
		$("[data-toggle='modal']").addClass("btn-info");
		$("[data-toggle='modal']").prop("disabled", false);
	});
	$("#formulario").on("hidden.bs.modal", function(e) {
		console.log("El modal se ha cerrado");
	});
});