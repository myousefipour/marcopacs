Template.masterPage.events({
	"click .btn-toggle-sidebar": function (event) {
		$('.row-offcanvas').toggleClass('active');
		$('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
	},
});

