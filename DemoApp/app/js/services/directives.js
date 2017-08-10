'use strict';
eventsApp.directive('sampleDirective',function(){
    return{
        restrict:'E',
        template:"<input type='text' ng-model='typAnything'/><span>{{typeAnything}}</span>"
    }
})