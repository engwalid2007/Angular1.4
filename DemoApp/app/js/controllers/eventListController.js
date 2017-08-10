'use strict';
eventsApp.controller('eventListController',function($scope,eventsData){

    $scope.events = eventsData.getAllEvents();
})