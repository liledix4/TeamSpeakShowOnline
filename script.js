$(".show-servers-info").click(function(){
	$(this).toggleClass("pressed");
	$(".servers-info").toggleClass("show");
	});

function toggleCompactMode() {
	$("body").toggleClass("compact-mode");
	}
$(".compact").click(toggleCompactMode);

$("h1.title").html(textTitle);
$("#nickname").attr("placeholder", textNicknameBarPlaceholder);
$("#check-online").val(textCheckOnlineLoading);