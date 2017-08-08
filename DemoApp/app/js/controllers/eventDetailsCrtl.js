'use strict';

eventsApp.controller('eventDetailsCrtl', function ($scope,eventsData) {
    $scope.sortBy = "name";
    $scope.event = eventsData.event;
    $scope.upVoting = function (session) {
        session.voting++;
    }

    $scope.downVoting = function (session) {
        session.voting--;
    }
});