/**
 * Created by Maksym on 06.10.2015.
 */


    var bookApp = angular.module('bookApp', []);

    bookApp.controller('BookListController', function($scope){
        $scope.books = [
            {
                "name":"Angular",
                "writer":"Max Smith"
            },
            {
                "name":"JavaScript",
                "writer":"Vlad Kuznecov"
            },
            {
                "name":"PHP",
                "writer":"Andrew Kysil"
            }
        ]
    });