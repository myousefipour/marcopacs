Template.soap.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.soap.events({ 
    'click button.btn-load-soap': function(event, template) { 
        Meteor.call('loadSoap', function (error, result) {
			if (error) {
				console.log('error', error);
			}
			else {
				console.log('load soap successed...');
				console.log(result);
			}
		});
    } 
}); 
