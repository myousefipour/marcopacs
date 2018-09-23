Template.exam.events({
	"click .btn-load-study": function (event) {
		Meteor.call('loadStudy', function (error, tboxes) {
			if (error) {
				console.log('error', error);
			}
			else {
				 
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
				console.log(result);
			}
		});

	},
});
Template.exam.helpers({
	stdModel: function () {
		return Session.get('examModel');;
	}
});