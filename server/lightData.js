// study objects for holding data
var std1 = new Study();
var std2 = new Study();
var std3 = new Study();
var std4 = new Study();
var std5 = new Study();
//tbox objects for holding data
var t1 = new Tbox();
var t2 = new Tbox();
var t3 = new Tbox();
var t4 = new Tbox();
var t5 = new Tbox();
var t6 = new Tbox();
var t7 = new Tbox();
var t8 = new Tbox();
var t9 = new Tbox();
var t10 = new Tbox();
var t11 = new Tbox();
var t12 = new Tbox();
var t13 = new Tbox();
std1 = {
    id: 101,
    patientName: 'ahmad khosravi',
    patientAge: 45,
    tboxes:[]
}
std2 = {
    id: 102,
    patientName: 'shima akhgar',
    patientAge: 29,
    tboxes:[]
}
std3 = {
    id : 103,
    patientName : 'tavana arjomand',
    patientAge : 35,
    tboxes:[]
}
std4 = {
    id : 104,
    patientName : 'shirin bani',
    patientAge : 54,
    tboxes:[]
}
std5 = {
    id : 105,
    patientName : 'ahmad asadi',
    patientAge : 31,
    tboxes:[]
}

t1 = {
    URL : "www.marcopacs.com",
    Count : 454,
    SeriesNumber : 1,
    Description : 'this is tbox1'
};
t2 = {
    URL : "www.marcopacs.com",
    Count : 78,
    SeriesNumber : 2,
    Description : 'this is tbox2'
};
t3 = {
    URL : "www.marcopacs.com",
    Count : 454,
    SeriesNumber : 3,
    Description : 'this is tbox3'
};
t4 = {
    URL : "www.marcopacs.com",
    Count : 778,
    SeriesNumber : 4,
    Description : 'this is tbox4'
};
t5 = {
    URL : "www.marcopacs.com",
    Count : 4754,
    SeriesNumber : 5,
    Description : 'this is tbox5'
};
t6 = {
    URL : "www.marcopacs.com",
    Count : 77858,
    SeriesNumber : 6,
    Description : 'this is tbox6'
};
t7 = {
    URL : "www.marcopacs.com",
    Count : 45785,
    SeriesNumber : 7,
    Description : 'this is tbox7'
};
t8 = {
    URL : "www.marcopacs.com",
    Count : 77858,
    SeriesNumber : 8,
    Description : 'this is tbox8'
};
t9 = {
    URL : "www.marcopacs.com",
    Count : 727,
    SeriesNumber : 9,
    Description : 'this is tbox9'
};
t10 = {
    URL : "www.marcopacs.com",
    Count : 8367,
    SeriesNumber : 10,
    Description : 'this is tbox10'
};
t11 = {
    URL : "www.marcopacs.com",
    Count : 42,
    SeriesNumber : 11,
    Description : 'this is tbox11'
};
t12 = {
    URL : "www.marcopacs.com",
    Count : 822,
    SeriesNumber : 12,
    Description : 'this is tbox12'
};
t13 = {
    URL : "www.marcopacs.com",
    Count : 56,
    SeriesNumber : 13,
    Description : 'this is tbox13'
};
 
std1.tboxes.push(t1, t3, t5, t7, t9);
std2.tboxes.push(t1, t2, t4, t6, t8, t10);
std3.tboxes.push(t11, t12);
std4.tboxes.push(t13);
std5.tboxes.push(t11, t12, t13);
 