'use strict';
eventsApp.directive('keydown',function(){
   return {
       restrict:'A',
       link:function(scope,element,attrs,controller){
           element.on('keydown',function(event){
               if((event.keyCode>46 && event.keyCode<58))
                return true;
               else
                return false;
           })
       }
   } 
});