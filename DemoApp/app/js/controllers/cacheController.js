'use strict';

eventsApp.controller('cacheController', function ($scope,cacheService) {
    $scope.saveCache = function (key, value) {
        cacheService.put(key, value);
    };
    $scope.getCacheByKey = function (keyToRead) {
       return cacheService.get(keyToRead);
    };
    $scope.getCacheInfo = function () {
        return cacheService.info();
    };

});