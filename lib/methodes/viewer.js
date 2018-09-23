import { Soap } from 'meteor/zardak:soap';
if (Meteor.isServer) {
    Meteor.methods({
        loadStudy: function (data) {
            Meteor.Meteor.publish('name', function(argument) {
                
            });
        },
        loadSoap:function(){
            var url = 'http://www.nbrb.by/Services/ExRates.asmx?WSDL';
            var args = { name: 'ExRatesDaily' };
            try {
                console.log('start create client')
                var client = Soap.createClient(url);
                console.log(client);
                var result = client.MyFunction(args);
                console.log(result);
                return result;
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