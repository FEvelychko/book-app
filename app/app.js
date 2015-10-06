/**
 * Created by Maksym on 06.10.2015.
 */

    var bookApp = angular.module('bookApp', ['ngRoute', 'booksControllers']);
    bookApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/books',{
            templateUrl: 'partials/book-list.html',
            controller: 'BookListController'
        }).
            when('/books/:bookId',{
                templateUrl: 'partials/book-detail.html',
                controller: 'BookDetailController'
            }).
            otherwise({
                redirectTo:'/books'
            });
    }]);