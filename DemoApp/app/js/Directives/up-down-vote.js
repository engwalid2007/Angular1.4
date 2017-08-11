'use strict';
eventsApp.directive('upvote',function(){
    return {
        templateUrl:'templates/directives/updownvote.html',
        restrict:'E'
    }
})