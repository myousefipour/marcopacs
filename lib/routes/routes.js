Router.configure({
	layoutTemplate: 'masterPage'
}); 
Router.map(function () {
	this.route('exam', {
		path: '/exam',
		template: '/exam'
	});
	this.route('colors', {
		path: '/colors',
		template: '/colors'
	});
	this.route('saved', {
		path: '/saved',
		template: '/saved'
	});
	this.route('refresh', {
		path: '/refresh',
		template: '/refresh'
	});
});