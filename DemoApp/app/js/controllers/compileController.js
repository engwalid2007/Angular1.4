'use strict';

eventsApp.controller('compileCpntroller',function($scope,$compile){
    $scope.addMarkup = function(markup){
        //alert('d')
        $compile(markup)($scope).appendTo(angular.element('#dvToAppend'));
    };
})