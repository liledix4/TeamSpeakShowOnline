function checkOnline() {
	var nickname = $("#nickname").val();
	$(".online-status").removeClass("yes no not-available");
	for (var x = 0; x < $(".online-status").length; x++) {
		var serverName = $(".online-status").eq(x).attr("id");
		if ($('#serverinfo-' + serverName).text().indexOf("Error. Unable to connect") > -1 || $(".loading").hasClass("connection-error")) {$("#" + serverName).addClass("not-available");}
			else if ($('#serverinfo-' + serverName).text().indexOf(nickname) > -1) {$("#" + serverName).addClass("yes");}
			else {$("#" + serverName).addClass("no");}
		}
	$("#check-online").removeClass("confirm").val(textCheckOnlineIdle);
	}

if (navigator.onLine) {
	$("#check-online").removeClass("loading").val(textCheckOnlineIdle);
	checkOnline();
	$("#nickname").keydown(function(){
		$("#check-online").addClass("confirm").val(textCheckOnlineConfirm);
		});
	} else {
		$("#check-online").removeClass("loading").addClass("connection-error").val(textCheckOnlineConnectionError);
		}

$("#main").submit(function(){
	if ($("#check-online").hasClass("confirm")) {
		checkOnline();
		}
	});