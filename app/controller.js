/**
 * Created by Maksym on 06.10.2015.
 */


    var booksControllers = angular.module('booksControllers', []);

    booksControllers.controller('BookListController', ['$scope', '$http', function($scope,$http){
        $http.get('data/books/books.json').success(function(data){
            $scope.books = data;
        });
        $http.get('data/genres/genres.json').success(function(data){
            $scope.genres = data;
        });
        //$scope.orderProp = 'age';
        //$scope.orderGenre = 'genre';
        //$scope.queryAllGenre = 'all';
    }]);
    booksControllers.controller('BookDetailController', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
        //$scope.bookId = $routeParams.bookId;
        $http.get('data/books/' + $routeParams.bookId + '.json').success(function(data){
            $scope.book = data;
        });
    }]);
    booksControllers.controller('WriterDetailController', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
        $http.get('data/writers/' + $routeParams.writerId + '.json').success(function(data){
            $scope.writer = data;
        })
    }]);