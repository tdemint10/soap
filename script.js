$(document).ready( function() {

	// Add/Next button
	$("#plan_add").click( function() {

		var drop = document.getElementById("plan_sel");
		var val = drop.options[drop.selectedIndex].value;

		if (val == 1) {
			var currDiv = document.getElementById("plan_o2");
			var nextDiv = document.getElementById("plan_iv");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline"; 
		}
		else if (val == 2) {
			var currDiv = document.getElementById("plan_iv");
			var nextDiv = document.getElementById("plan_blood");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 3) {
			var currDiv = document.getElementById("plan_blood");
			var nextDiv = document.getElementById("plan_cpr");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";			
		}
		else if (val == 4) {
			var currDiv = document.getElementById("plan_cpr");
			var nextDiv = document.getElementById("plan_capno");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 5) {
			var currDiv = document.getElementById("plan_capno");
			var nextDiv = document.getElementById("plan_air_adv");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 6) {
			var currDiv = document.getElementById("plan_air_adv");
			var nextDiv = document.getElementById("plan_air_oett");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 7) {
			var currDiv = document.getElementById("plan_air_oett");
			var nextDiv = document.getElementById("plan_air_cric");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 8) {
			var currDiv = document.getElementById("plan_air_cric");
			var nextDiv = document.getElementById("plan_suction");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 9) {
			var currDiv = document.getElementById("plan_suction");
			var nextDiv = document.getElementById("plan_drug");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 10) {
			var currDiv = document.getElementById("plan_drug");
			var nextDiv = document.getElementById("plan_orders");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 11) {
			var currDiv = document.getElementById("plan_orders");
			var nextDiv = document.getElementById("plan_ekg");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 12) {
			var currDiv = document.getElementById("plan_ekg");
			var nextDiv = document.getElementById("plan_bandage");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 13) {
			var currDiv = document.getElementById("plan_bandage");
			var nextDiv = document.getElementById("plan_splint");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 14) {
			var currDiv = document.getElementById("plan_splint");
			var nextDiv = document.getElementById("plan_extric");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 15) {
			var currDiv = document.getElementById("plan_extric");
			var nextDiv = document.getElementById("plan_spinal");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 16) {
			var currDiv = document.getElementById("plan_spinal");
			var nextDiv = document.getElementById("plan_stretcher");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 17) {
			var currDiv = document.getElementById("plan_stretcher");
			var nextDiv = document.getElementById("plan_refusal");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 18) {
			var currDiv = document.getElementById("plan_refusal");
			var nextDiv = document.getElementById("plan_advised");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 19) {
			var currDiv = document.getElementById("plan_advised");
			var nextDiv = document.getElementById("plan_transfer");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 20) {
			var currDiv = document.getElementById("plan_transfer");
			var nextDiv = document.getElementById("plan_terminate");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 21) {
			var currDiv = document.getElementById("plan_terminate");
			var nextDiv = document.getElementById("plan_transport");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 22) {
			var currDiv = document.getElementById("plan_transport");
			var nextDiv = document.getElementById("plan_radio");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}
		else if (val == 23) {
			var currDiv = document.getElementById("plan_radio");
			var nextDiv = document.getElementById("plan_other");

			currDiv.style.display = "none";
			nextDiv.style.display = "inline";
		}

		if (val != 24) {			
			var newIndex = drop.selectedIndex + 1;
			drop.options[newIndex].selected = true;
		}

	});

	// Dropdown new section selected
	$("#plan_sel").on("change", function() {

		console.log("HERE");

		var drop = document.getElementById("plan_sel");
		var val = drop.options[drop.selectedIndex].value;

		document.getElementById("plan_o2").style.display = "none";
		document.getElementById("plan_iv").style.display = "none";
		document.getElementById("plan_blood").style.display = "none";
		document.getElementById("plan_cpr").style.display = "none";
		document.getElementById("plan_capno").style.display = "none";
		document.getElementById("plan_air_adv").style.display = "none";
		document.getElementById("plan_air_oett").style.display = "none";
		document.getElementById("plan_air_cric").style.display = "none";
		document.getElementById("plan_suction").style.display = "none";
		document.getElementById("plan_drug").style.display = "none";
		document.getElementById("plan_orders").style.display = "none";
		document.getElementById("plan_ekg").style.display = "none";
		document.getElementById("plan_bandage").style.display = "none";
		document.getElementById("plan_splint").style.display = "none";
		document.getElementById("plan_extric").style.display = "none";
		document.getElementById("plan_spinal").style.display = "none";
		document.getElementById("plan_stretcher").style.display = "none";
		document.getElementById("plan_refusal").style.display = "none";
		document.getElementById("plan_advised").style.display = "none";
		document.getElementById("plan_transfer").style.display = "none";
		document.getElementById("plan_terminate").style.display = "none";
		document.getElementById("plan_transport").style.display = "none";
		document.getElementById("plan_radio").style.display = "none";
		document.getElementById("plan_other").style.display = "none";

		if (val == 1) {
			var currDiv = document.getElementById("plan_o2");

			currDiv.style.display = "inline"; 
		}
		else if (val == 2) {
			var currDiv = document.getElementById("plan_iv");

			currDiv.style.display = "inline";
		}
		else if (val == 3) {
			var currDiv = document.getElementById("plan_blood");

			currDiv.style.display = "inline";			
		}
		else if (val == 4) {
			var currDiv = document.getElementById("plan_cpr");

			currDiv.style.display = "inline";
		}
		else if (val == 5) {
			var currDiv = document.getElementById("plan_capno");

			currDiv.style.display = "inline";
		}
		else if (val == 6) {
			var currDiv = document.getElementById("plan_air_adv");

			currDiv.style.display = "inline";
		}
		else if (val == 7) {
			var currDiv = document.getElementById("plan_air_oett");

			currDiv.style.display = "inline";
		}
		else if (val == 8) {
			var currDiv = document.getElementById("plan_air_cric");

			currDiv.style.display = "inline";
		}
		else if (val == 9) {
			var currDiv = document.getElementById("plan_suction");

			currDiv.style.display = "inline";
		}
		else if (val == 10) {
			var currDiv = document.getElementById("plan_drug");

			currDiv.style.display = "inline";
		}
		else if (val == 11) {
			var currDiv = document.getElementById("plan_orders");

			currDiv.style.display = "inline";
		}
		else if (val == 12) {
			var currDiv = document.getElementById("plan_ekg");

			currDiv.style.display = "inline";
		}
		else if (val == 13) {
			var currDiv = document.getElementById("plan_bandage");

			currDiv.style.display = "inline";
		}
		else if (val == 14) {
			var currDiv = document.getElementById("plan_splint");

			currDiv.style.display = "inline";
		}
		else if (val == 15) {
			var currDiv = document.getElementById("plan_extric");

			currDiv.style.display = "inline";
		}
		else if (val == 16) {
			var currDiv = document.getElementById("plan_spinal");

			currDiv.style.display = "inline";
		}
		else if (val == 17) {
			var currDiv = document.getElementById("plan_stretcher");

			currDiv.style.display = "inline";
		}
		else if (val == 18) {
			var currDiv = document.getElementById("plan_refusal");

			currDiv.style.display = "inline";
		}
		else if (val == 19) {
			var currDiv = document.getElementById("plan_advised");

			currDiv.style.display = "inline";
		}
		else if (val == 20) {
			var currDiv = document.getElementById("plan_transfer");

			currDiv.style.display = "inline";
		}
		else if (val == 21) {
			var currDiv = document.getElementById("plan_terminate");

			currDiv.style.display = "inline";
		}
		else if (val == 22) {
			var currDiv = document.getElementById("plan_transport");

			currDiv.style.display = "inline";
		}
		else if (val == 23) {
			var currDiv = document.getElementById("plan_radio");

			currDiv.style.display = "inline";
		}
		else if (val == 24) {
			var currDiv = document.getElementById("plan_other");

			currDiv.style.display = "inline";
		}

	});

});