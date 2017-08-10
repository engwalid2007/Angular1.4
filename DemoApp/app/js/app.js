'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/newevent.html',
                controller: 'newEventCrtl'
            });
        $routeProvider.when('/Events',
            {
                templateUrl: 'templates/EventsList.html',
                controller: 'eventListController'
            });
        $routeProvider.when('/eventDetails/:id',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'eventDetailsCrtl'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'sampleDirectiveController'
            });
        $routeProvider.otherwise({ redirectTo: '/Events' });
    });

