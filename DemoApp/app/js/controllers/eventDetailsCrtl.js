'use strict';

eventsApp.controller('eventDetailsCrtl', function ($scope) {
    $scope.sortBy = "name";
    $scope.event = {
        name: "Angular Event",
        date: "8/8/2016",
        time: "20:00 PM",
        address: {
            city: "Riyadh",
            location: "elmalaz"
        },
        imgUrl: 'img/angularjs-logo.png',
        sessions: [
            {
                name: "c#",
                voting: 1,
                level: 'hard',
                duration: 1
            },
            {
                name: "sharepoint10",
                voting: 3,
                level: 'simple',
                duration: 2,
            },
            {
                name: ".Net",
                voting: 10,
                level: 'complicated',
                duration: 3
            }
        ]
    }
    $scope.upVoting = function (session) {
        session.voting++;
    }

    $scope.downVoting = function (session) {
        session.voting--;
    }
});