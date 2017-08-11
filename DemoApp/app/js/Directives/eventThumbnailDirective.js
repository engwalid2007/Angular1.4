'use strict';
eventsApp.directive('eventThumbnail',function(){
    return {
        templateUrl:'templates/directives/EventThumbnail.html',
        scope:{
            event:'='
        }
    }
});