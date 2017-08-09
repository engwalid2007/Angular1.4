'use strict';


eventsApp.factory('cacheService',function($cacheFactory){

    return $cacheFactory('cacheService',{capacity:3});
});