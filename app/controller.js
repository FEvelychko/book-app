/**
 * Created by Maksym on 06.10.2015.
 */


    var bookApp = angular.module('bookApp', []);

    bookApp.controller('BookListController', ['$scope', '$http', function($scope, $http){
        $http.get('books/books.json').success(function(data){
            $scope.books = data;
        });
        $scope.orderProp = 'age';
    }]);

    /*bookApp.controller('BookListController', function($scope){

     $scope.books = [
        {'name': 'React',
        'writer': 'Max Smith',
        'age': 3},
        {'name': 'Angular',
        'writer': 'Vlad Smith',
        'age': 5},
        {'name': 'Vanilla',
        'writer': 'Andrew Smith',
        'age': 20}
     ];

        $scope.orderProp = 'age';
    });*/