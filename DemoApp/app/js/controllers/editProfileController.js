'use strict';

eventsApp.controller('editProfileController',function($scope,profileService){
    $scope.user = {};
    $scope.getGravatarUrl =function(email){
        return  profileService.getGravatarUrl(email)
    }

});