require(['jquery', 'message'],function($, message){
    $('#output').html(message);
})

require(['calculator/add', 
            'calculator/devide', 
            'calculator/squere',
            'calculator/multiply',
            'calculator/substract'],(add,devide,s,m,substract)=>{
    console.log(add(11,6));
    console.log(devide(25,2));
    console.log(s(5));
    console.log(m(2,10));
    console.log(substract(34,23))
})
requirejs.config({
    
})