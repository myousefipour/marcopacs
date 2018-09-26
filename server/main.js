import { check } from 'meteor/check';
if (Meteor.isServer) {
    Studies.remove({});
    ColorData.remove({});

    Studies.insert({ tb_id: '101', value: std1 });
    Studies.insert({ tb_id: '102', value: std2 });
    Studies.insert({ tb_id: '103', value: std3 });
    Studies.insert({ tb_id: '104', value: std4 });
    Studies.insert({ tb_id: '105', value: std5 });

    Meteor.publish('getStudy', function (arg) {
        
            check(arg, String);
            console.log('arg from client is: ' + arg);
            return Studies.find({ tb_id: arg });
         
    });
    Meteor.publish('getColors', function (argument) {
        return ColorData.find();
    });
}