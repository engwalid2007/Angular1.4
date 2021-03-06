'use strict';

eventsApp.controller('eventDetailsCrtl', function ($scope,eventsData,$routeParams) {
    $scope.sortBy = "name";
    // eventsData.getEvent(function(data){
    //     $scope.event = data;    
    // });
    eventsData.getEvent($routeParams.id).$promise.then(function(event){
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