import { check } from 'meteor/check';
if (Meteor.isServer) {
    // var soap = require('soap');
    // var url = 'http://ali-pc.marcopacs.com/PCM/Exam.svc?wsdl';
    // soap.createClient(url, function (err, client) {
    //     client.ExamService.BasicHttpBinding_IExamService.Ping1(function (err, result) {
    //         if (err) {
    //             console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    //             console.log(err);
    //         }
    //         else {
    //             console.log(result);
    //         }
    //     });
    // });
    Meteor.methods({
        loadColor: function (data) {
            console.log('load color start');
            var hexColor = Math.floor(Math.random() * 16777215).toString(16);
            check(hexColor, String);
            console.log(hexColor);
            ColorData.insert({ colorId: hexColor });
        },
        loadStudy: function (data) {

        },
        loadDescribe: function (url) {
            console.log(url);
            try {
                var des_client = Soap.createClient(url);
                return des_client.describe();
            }
            catch (err) {
                return err;

            }
        },
        loadSoapMethod: function (url) {
            var arg = { name: 'm' };
            var client = Soap.createClient(url);
            try {
                var result =client.ExamService.BasicHttpBinding_IExamService.Search();
                return result;
            } catch (error) {
                return error;
            }

        }

    });
}