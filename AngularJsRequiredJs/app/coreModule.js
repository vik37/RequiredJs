define(function(){
    var coreModule = angular.module('coreModule', []);
    coreModule.controller('headerController', function($scope){
        $scope.title = "Modjo Movies";
    });
    coreModule.component('moviesList',{
        template:
        '<ul>'+
            '<li ng-repeat="movie in $ctrl.movies">'+
                '<h4>{{movie.title}}</h4>'+
                '<p>{{movie.genre}}</p>'+
                '<p>{{movie.year}}</p>'+
            '</li>'+
        '</ul>'+
        '<h5>The best movies ever made! </h5>',
        controller: function MoviesController(){
            this.movies = [
                {
                    title:"Matrix",
                    genre:"Sf-Fi",
                    year : 1999
                },
                {
                    title: "Dracula",
                    genre:"Horror",
                    year:1992
                },
                {
                    title:"Star Wars: Episode 3",
                    genre: "Fantasy",
                    year: 2008
                }
            ]
        }
    })
})