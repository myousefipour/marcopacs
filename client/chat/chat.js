import { HTTP } from 'meteor/http';
var unirest = require('unirest');
var RocketChat = require('rocketchat-nodejs').Client;
if (Meteor.isClient) {
    var me;
    var Client = new RocketChat({
        host: 'open.rocket.chat/home',
        scheme: 'https', 
        username: 'mukhtar',
        password: 'r09371420709'
    });
    Client.login().then(() => {
        var Authentication = Client.Authentication();
        var Miscellaneous = Client.Miscellaneous();
        // /api/v1/info
        Miscellaneous.info().then((result) => {
            var info = result;
        }).catch((error) => {
            console.log(error)
        });

        console.log('login success');
        // console.log(result);
        // write your API functions here
        // examples
        Authentication.me().then((result) => {
            me = result;
            $('#meesage-panel').html(result);
        });

    }).catch((error) => {
        console.log(error);
    });

}



