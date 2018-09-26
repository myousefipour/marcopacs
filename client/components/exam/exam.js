import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
Template.exam.events({
	"click .btn-load-study": function (event) {
		Meteor.call('loadStudy', function (error, tboxes) {
			if (error) {
				console.log('error', error);
			}
			else {
				console.log(Studies);
			}
		});

	},
	"click .btn-load-soap": function (event) {
		Meteor.call('loadSoap', function (error, result) {
			if (error) {
				console.log('error', error);
			}
			else {
				console.log('load soap successed...');
				// console.log(result);
			}
		});

	},
	"keypress input.txt-study-id": function (event) {
		if (event.which === 13) {
			var searchQuery = $('.txt-study-id').val().toString();
			Session.set('tbItem', searchQuery);
		}
	},
});
Template.exam.helpers({
	stdModel: function () {
		var item = Studies.findOne({ tb_id: Session.get('tbItem') });
		if (item !== undefined)
			return item.value;
	}
});
Template.exam.rendered = function() {
	var app2 = new Vue({
		el: '#app',
		data: {
		  message: 'You loaded this page on ' + new Date().toLocaleString()
		}
	  })
};
Tracker.autorun(() => {
	Meteor.subscribe('getStudy', Session.get('tbItem'));
});