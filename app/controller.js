/**
 * Created by Maksym on 06.10.2015.
 */


    var booksControllers = angular.module('booksControllers', []);

    booksControllers.controller('BookListController', ['$scope', '$http', function($scope,$http){
        $http.get('books/books.json').success(function(data){
            $scope.books = data;
        });
        //$scope.orderProp = 'age';
        //$scope.orderGenre = 'genre';
        //$scope.queryAllGenre = 'all';
    }]);
    booksControllers.controller('BookDetailController', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
        //$scope.bookId = $routeParams.bookId;
        $http.get('books/' + $routeParams.bookId + '.json').success(function(data){
            $scope.book = data;
        });
    }]);
    booksControllers.controller('WriterDetailController', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
        $http.get('writers/' + $routeParams.writerId + '.json').success(function(data){
            $scope.writer = data;
        })
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