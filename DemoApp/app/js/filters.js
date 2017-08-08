'use strict';
eventsApp.filter('duration',function(){
    return function(input){

        switch (input){

            case 1:
                return "Full day";
            case 2:
                return "Half day";
            case 3:
                return "1 hour";
        }
    }

})