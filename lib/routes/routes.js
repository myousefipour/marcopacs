Router.configure({
	layoutTemplate: 'masterPage'
}); 
Router.map(function () {
	this.route('exam', {
		path: '/exam',
		template: '/exam'
	});
	this.route('stories', {
		path: '/stories',
		template: '/stories'
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