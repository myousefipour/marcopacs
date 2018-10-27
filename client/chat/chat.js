import { HTTP } from 'meteor/http';

Template.chat.helpers({ 
    create: function() { 
         
    }, 
    rendered: function() { 
         
    },  
    destroyed: function() { 
          
    }, 
}); 

Template.chat.events({ 
    'click .btn-submit-auth': function(event, template) { 
        login($('#exampleInputEmail1').val() , $('#exampleInputPassword1').val()).then((response) => {
            document.getElementById('meesage-panel').contentWindow.postMessage({
                externalCommand: 'login-with-token',
                token: response.data.authToken
            }, '*');
            
            window.addEventListener('message', function(e) {
                console.log(e.data.eventName); // event name
                console.log(e.data.data); // event data
                document.getElementById('meesage-panel').style.display='block';
            });
            // $("#meesage-panel").attr('src' , "http://memo.marcopacs.com:3000/home?layout=embedded" );
        });
    } 
}); 
 

function login(username , password) {
    return new Promise(function (resolve, reject) {
        var url = "http://memo.marcopacs.com:3000/api/v1/login";
        var dataLogin = {
            username: username,
            password: password
        }
        $.ajax({
            url: url,
            type: "POST",
            data: dataLogin,
            success: function (response) {
                resolve(response);
            },
            error: function (err) { }
        });

    });

}