Template.colors.helpers({
    listColors: function () {
        return ColorData.find().fetch();

    },
    create: function () {

    },
    rendered: function () {

    },
    destroyed: function () {

    },
});

Template.colors.events({
    'click .btn-load-color': function (event, template) {
        Meteor.call('loadColor', function (error, tboxes) {
            if (error) {
                console.log('error', error);
            }
            else {
                console.log('color added');
            }
        });
    }
}); 
