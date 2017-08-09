'use strict';

eventsApp.controller('newEventCrtl', function ($scope,eventsData) {
    $scope.submitEvent = function (event, frmName) {
        if (frmName.$valid) {
            // window.alert(event.name + 'is submitted successfully')
            eventsData.saveEvent(event).$promise.then(function(response){
                console.log('saved Successfully');
            })
            .catch(function(response){
                console.log('an error occured')
            });
        }
    }

})
