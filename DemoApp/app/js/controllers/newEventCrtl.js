'use strict';

eventsApp.controller('newEventCrtl', function ($scope) {
    $scope.submitEvent = function (event, frmName) {
        if (frmName.$valid) {
            window.alert(event.name + 'is submitted successfully')
        }
    }

})
