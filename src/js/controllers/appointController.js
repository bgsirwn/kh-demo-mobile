define(['views/appointView', 'GS'], function (View, GS) {

	var bindings = [{
		element: '#logout',
		event: 'click',
		handler: GS.logout
	}, {
		element: '.appoint-done-button',
		event: 'click',
		handler: appointDone
	}];

	function init() {
		View.render({
			bindings: bindings
		});
	}

	function appointDone() {
		var formData = khApp.formToJSON('#appointList');
		console.log(formData);
		mainView.loadPage('guide.html');
	}

	return {
		init: init
	};
});
