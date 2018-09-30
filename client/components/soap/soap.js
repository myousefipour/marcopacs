Template.soap.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    }, 
    destroyed: function() { 
         
    }, 
}); 

Template.soap.events({ 
    'click button.btn-load-describe': function(event, template) { 
        Meteor.call('loadDescribe',$('.txt-soap-url').val().toString(), function (error, result) {
			if (error) {
				console.log('error', error);
			}
			else {
				console.log('load soap successed...');
				$($('div.soap-describe-body')[0]).text(JSON.stringify(result));
			}
		});
    } ,
    'click button.btn-load-soap': function(event, template) { 
        Meteor.call('loadSoapMethod',$('.txt-soap-url').val().toString(), function (error, result) {
			if (error) {
				console.log('error', error);
			}
			else {
				console.log('load soap successed...');
				$($('div.soap-method-body')[0]).text(JSON.stringify(result));
			}
		});
    } 
}); 
