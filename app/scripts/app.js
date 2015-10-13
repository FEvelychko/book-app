/**
 * Created by Maksym on 06.10.2015.
 */

    //debugger;
    var bookApp = angular.module('bookApp', ['ngRoute', 'booksControllers']);
    bookApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home',{
            templateUrl: 'views/book-list.html',
            controller: 'BookListController'
        }).
            when('/home/books/:bookId',{
                templateUrl: 'views/book-detail.html',
                controller: 'BookDetailController'
            }).
            when('/home/writers/:writerId',{
                templateUrl: 'views/writer-detail.html',
                controller: 'WriterDetailController'
            }).
            otherwise({
                redirectTo:'/home'
            });
    }]);



//debugger;


    function makeBuffer() {
        var currentWord = "";
        function counter(value){
            if(arguments.length === 0){
                return currentWord;
            }
            else{
                currentWord += value;
                return String(currentWord);
            }
        }
        counter.clear = function(){
            currentWord = "";
        }
        return counter;
    }

    var buffer = makeBuffer();

    buffer('Closure');
    buffer(' Use');
    buffer(' Need!');

    /*buffer(0);
    buffer(1);
    buffer(2);*/
    console.log(buffer()); // Closure Use Need!

    buffer.clear();
    console.log(buffer());
    buffer('Closure');
    console.log(buffer());



/*function sum(x){
    return function(y){
        console.log(y + x);
    }
}
sum(1)(2);
sum(5)(-1);

/*function makeCounter() {
    debugger;
    var currentCount = 1;

    function counter() {
        return currentCount++;
    };
    counter.set = function(value){
        currentCount = value;
        return currentCount + " was set";
    };
    counter.reset = function(){
        currentCount = 1;
        return currentCount + " was reset";
    }
    return counter;
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter.set(100));
console.log(counter());
console.log(counter());
console.log(counter.reset());
console.log(counter());
console.log(counter());*/








/*function makeCounter() {
    var currentCount = 1;

    return { // возвратим объект вместо функции
        getNext: function() {
            return currentCount++;
        },

        set: function(value) {
            currentCount = value;
            return currentCount + " was set";
        },

        reset: function() {
            currentCount = 1;
            return currentCount + " was reset";
        }
    };
}

var counter = makeCounter();
console.log(counter.getNext());
console.log(counter.getNext());

console.log(counter.set(5));
console.log(counter.getNext());

console.log(counter.reset());
console.log(counter.getNext());
console.log(counter.getNext());







/*function init() {
var name = "Mozilla"; // name - локальная переменная, созданная в init
function displayName() { // displayName() - внутренняя функция, замыкание
    console.log (name); // displayName() использует переменную, объявленную в родительской функции
}
displayName();
}
var kozel = init();
console.log(kozel);*/


/*
var value = 0;

function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }

    console.log( value );
}
console.log( value );

f();

function makeCounter(){
    //var currentCount = 1;
    function foo(){
        return currentCount++;
    }
    foo.currentCount = 1;
    return foo;
}
var counter = makeCounter();
console.log(counter());
console.log(counter());

function makeCounter(){
    var currentCount = 1;
    return function(){
        return currentCount++;
    }
}
var counter = makeCounter();
console.log(counter());
console.log(counter());

var phrase = "Hey!";
foo("Max");
function foo(name){
    console.log(name + " " + phrase);
    console.log(window);

}
/*var name = "vlad";
function kozel(){
    console.log(name);

}
kozel();
console.log(kozel.LexicalEnvironment);*/

//debugger;

    /*var x = 0;
    var btn = document.getElementById('btn');
    function increase(){
        return x += 1;
    };
    console.log(increase());*/

    /*say('Вася');

    var phrase = 'Привет';

    function say(name) {
        console.log( name + ", " + phrase );
    }*/


    /*function makeCounter(){
        var number = 1;
        return function(){
            return number++;
        };
    }
    var out = makeCounter();
    console.log(out());
    console.log(out());
    console.log(out());*/





//console.log(kozel.[[Scope]]);

/*var arr = [1, -1, 2, -2, 3];
var newArr = [];
    if(arr[0] > arr.slice(1)){
        console.log(arr[0]);
    }
    else if(arr[1] > arr[0] && arr[1] > arr.slice(2)){
        console.log(arr[1]);
    }
    else if(arr[2] > arr.slice(0,3) && arr[2] > arr.slice(3)){

            console.log(arr[2]);
    }
    else if(arr[3] > arr.slice(0,4) && arr[3] > arr.slice(4)){

            console.log(arr[3]);
    }
    else if(arr[4] > arr.slice(0,5)){
            console.log(arr[4]);
    }*/
//console.log(newArr);





/*var names = 'Маша, Петя, Марина, Василий';

var arr = names.split(', ');

for (var i = 0; i < arr.length; i++) {
    console.log( 'Вам сообщение ' + arr[i] );
}*/




    /*function max(arr){
       return Math.max.apply(max, arr);
    }
    console.log(max([1,2,10,4,5]));

    function bind(func, context){
        return function(){
            return func.apply(context, arguments);
        }
    }

    function f(){
        alert(this);
    }
    var out = bind(f, "Context");
    out();*/


    /*function max(arr){
     //return Math.max.apply(max, arr);
     //   return Math.max(1,212120,3,4,5);



        return Math.max.apply(max, arr);

    }
     console.log(max([1,2,10,4,5]));*/


    /*function getScript(select){
        console.log("<" + this[select] + ">" + "</" + this[select] + ">");
    }
    var script = {
        tag: "select"
    };
    getScript.call(script, 'tag');*/


    /*var user = {
        name:"Max",
        func:function(){
            console.log(this.name);
        }
    };

    function getInfo(param){
        return param;
    };

    getInfo(user.func());*/

























