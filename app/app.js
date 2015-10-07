/**
 * Created by Maksym on 06.10.2015.
 */

    //debugger;
    var bookApp = angular.module('bookApp', ['ngRoute', 'booksControllers']);
    bookApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home',{
            templateUrl: 'partials/book-list.html',
            controller: 'BookListController'
        }).
            when('/home/books/:bookId',{
                templateUrl: 'partials/book-detail.html',
                controller: 'BookDetailController'
            }).
            when('/home/writers/:writerId',{
                templateUrl: 'partials/writer-detail.html',
                controller: 'WriterDetailController'
            }).
            otherwise({
                redirectTo:'/home'
            });
    }]);