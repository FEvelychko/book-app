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