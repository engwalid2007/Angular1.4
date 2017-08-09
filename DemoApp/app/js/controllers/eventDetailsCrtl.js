'use strict';

eventsApp.controller('eventDetailsCrtl', function ($scope,eventsData) {
    $scope.sortBy = "name";
    // eventsData.getEvent(function(data){
    //     $scope.event = data;    
    // });
    eventsData.getEvent(1).$promise.then(function(event){
        $scope.event=event;
    }).catch(function(response){
        alert(response.status)
        console.log(response)
    });
    $scope.upVoting = function (session) {
        session.upVoteCount++;
    }

    $scope.downVoting = function (session) {
        session.upVoteCount--;
    }
});