import { check } from 'meteor/check';
if (Meteor.isServer) {
    var url = 'http://devel.marcopacs.com/PCM/Exam.svc?wsdl';
    var arg = {dto_In : { PatientName: 'm',patientID:'asd'}};
    var client = Soap.createClient(url);
    try {
        var result =client.ExamService.BasicHttpBinding_IExamService.Ping(arg);
        console.log(result);
    } catch (error) {
       console.log(error);
    }
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
            var arg = { PatientName: 'm'};
            var client = Soap.createClient(url);
            try {
                var result =client.ExamService.BasicHttpBinding_IExamService.Ping(arg);
                return result;
            } catch (error) {
                return error;
            }

        }

    });
}