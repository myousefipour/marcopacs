import { check } from 'meteor/check';
var soap = require('soap');
if (Meteor.isServer) {
    Meteor.methods({
        loadColor: function (data) {
            console.log('load color start');
            var hexColor =  Math.floor(Math.random()*16777215).toString(16);
            check(hexColor, String);
            console.log(hexColor);
            ColorData.insert({ colorId : hexColor });
        },
        loadStudy: function (data) {

        },
        loadSoap: function () {
            var marcoWSDL = 'http://devel.marcopacs.loc/PCM/Exam.svc?wsdl';
            var marcoSingleWSDL = 'http://devel.marcopacs.loc/PCM/Exam.svc?singleWsdl';
            var url = 'http://www.nbrb.by/Services/ExRates.asmx?WSDL';
            // var args = { name: 'ExRatesDaily' };
            try {
                // var client = soap.createClient(url); 
                // var result = client.StartDate();
                // console.log(result);
                // return result;
                soap.createClient(marcoWSDL, function(err, client) {
                    // console.log(client.describe());
                    client.Ping(function(err, result) {
                        console.log(result);
                    });
                });
            }
            catch (err) {
                if (err.error === 'soap-creation') {
                    console.log('SOAP Client creation failed');
                }
                else if (err.error === 'soap-method') {
                    console.log('SOAP Method call failed');
                }

            }
        }

    });
}