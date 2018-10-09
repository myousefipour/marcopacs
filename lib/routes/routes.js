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
	this.route('soap', {
		path: '/soap',
		template: '/soap'
	});
	this.route('chat', {
		path: '/chat',
		template: '/chat'
	});
});