'use strict';

eventsApp.directive('sampleDirective',function(){
    return{
        restrict:'C',
        template:"<input type='text' ng-model='typAnything'/><span>{{typAnything}}</span>",
        scop:{}
    }
})