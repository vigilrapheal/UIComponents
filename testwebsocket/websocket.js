var fileName;

function connect() {
//	var socket = new SockJS('/jdisp-websocket-endpoint');
var user;
var socket = new SockJS('http://localhost:8009/jdisp-websocket-endpoint');
	stompClient = Stomp.over(socket);
	stompClient.connect({}, function(frame) {
		console.log('Connected: ' + frame);
$('#submit').on("click",function(){
	user=$('#name').val();

		stompClient.subscribe('/dashboard/stream-link/'+ user, function(message) {
// 			 var obj = JSON.parse(atob(message.body));
// //			var msg=message.body;
// 			showMessageLink(obj/*msg.replace(/=/g, '')*/);

			$('#printArea').append('<li>'+message.body+'</li>')

		});
	});

	});
}


function disconnect() {
	if (stompClient !== null) {
		stompClient.disconnect();
	}
	setConnected(false);
	console.log("Disconnected");
}

$(window).on('load', function() {

	connect();
});

function showMessageLink(obj) {
	$('#displayArea')
			.append(
					'<div class=\"alert alert-success row\"><div class=\"col-sm-1\"><span '
							+ 'class="glyphicon glyphicon glyphicon-remove-circle red '
							+ obj.userId
							+ '"></span></div><div class=\"col-sm-9\" style=\"font-size:20px;color: black\">'
							+ obj.homeDomain
							+ '</div><div class=\"col-sm-2\"><span class=\"pull-right\"><button type=\"button\" class=\"btn btn-rounded btn-default btn-lg has-spinner\" data-loading-text=\"<i class=\'fa fa-spinner fa-spin\'></i> Processing Order\"'
							+ ' id=\"'
							+ obj.userId
							+ '\" onclick=\"someFunction(\''
							+ btoa(JSON.stringify(obj))
							+ '\')\"'
							+ 'value=\"xlsx Download\"><i class=\"fa fa-cloud-download\"></i> Download</button></span></div></div>');

	// $('#displayArea')
	// .append(
	// '<div class=\"alert alert-success row\"><div
	// class=\"col-sm-1\">&gt;</div><div class=\"col-sm-9\" style=\"font-size:
	// 20px;color: black\">'
	// + atob(obj)
	// + '</div><div class=\"col-sm-2\"><span class=\"pull-right\"><a href="#"
	// onclick=\"someFunction(\''
	// + obj
	// + '\');\" class=\"btn btn-rounded btn-primary\" id=\"'
	// + obj + '\">xlsx Download</a></span></div></div>');
}

// $("button").on("click", function() {
// alert($(this).attr('id'));
// });

// function someFunction(key){
// alert(key); // or alert($(this).attr('id'));
// }

// $("a").click(function() {
// alert($(this).attr('id'));
// });

// $('.buttons').on('click', 'button', function(){
// alert("haa");
// });

function someFunction(receivedKey) {

	key=JSON.parse(atob(receivedKey));
	$("#" + key.userId).buttonLoader('start');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/writeXlsx/' + receivedKey, true);
	xhr.responseType = 'blob';
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.onload = function(e) {
		if (this.status == 200) {
			var blob = new Blob([ this.response ], {
				type : 'application/vnd.ms-excel'
			});
			var downloadUrl = URL.createObjectURL(blob);
			var a = document.createElement("a");
			a.href = downloadUrl;
			a.download = (key.homeDomain).replace(/\./g, '_') + ".xlsx";
			document.body.appendChild(a);
			a.click();
			$("#" + key.userId).buttonLoader('stop');
			$("." + key.userId).removeClass("glyphicon-remove-circle red");
			$("." + key.userId).addClass("glyphicon-ok-circle green");
		} else {
			alert('Unable to download excel.')
			$("#" + key.userId).buttonLoader('stop');
		}
	};
	xhr.send();

}

(function($) {
	$('.has-spinner').attr("disabled", false);
	$.fn.buttonLoader = function(action) {
		var self = $(this);
		if (action == 'start') {
			if ($(self).attr("disabled") == "disabled") {
				return false;
			}
			$('.has-spinner').attr("disabled", true);
			$(self).attr('data-btn-text', $(self).text());
			var text = 'Loading';
			console.log($(self).attr('data-load-text'));
			if ($(self).attr('data-load-text') != undefined
					&& $(self).attr('data-load-text') != "") {
				var text = $(self).attr('data-load-text');
			}
			$(self)
					.html(
							'<span class="spinner"><i class="fa fa-spinner fa-spin" title="button-loader"></i></span> '
									+ text);
			$(self).addClass('active');
		}
		if (action == 'stop') {
			$(self).html($(self).attr('data-btn-text'));
			$(self).removeClass('active');
			$('.has-spinner').attr("disabled", false);
		}
	}
})(jQuery);

