if (Meteor.isServer) {
    // Studies.insert({ tbname: 'std1', value: std1 });
    // Studies.insert({ tbname: 'std2', value: std2 });
    // Studies.insert({ tbname: 'std3', value: std3 });
    // Studies.insert({ tbname: 'std4', value: std4 });
    // Studies.insert({ tbname: 'std5', value: std5 });

    Studies.insert({
        jokeName: "Lame Joke 1",
        jokePost: "This is a very very lame joke",
        author: "Super User",
        date: 234,
        createdAt: 'asdasd',
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["Super User"],
        userId: 1232132
    });
    Studies.insert({
        jokeName: "Lame Joke 1",
        jokePost: "This is a very very lame joke",
        author: "Super User",
        date: 2323,
        createdAt: 'asdasdasd',
        laughScore: 0,
        frownScore: 0,
        pukeScore: 0,
        voted: ["Super User"],
        userId: 123123
    });
    Meteor.publish('Studies', function(argument) {
        console.log(Studies.find());
        return Studies.find();

    }); 

}