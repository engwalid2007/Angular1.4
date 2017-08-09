'use strict';
eventsApp.factory('eventsData', function ($resource) {
    return {
        getEvent: function (id) {
            return $resource('http://localhost:4351/event/:id',{id:'@id'},).get({id:id})
            // $http({ method: 'get', url: 'http://localhost:4351/event/1' })
            //     .success(function (data, status, headers, config) {
            //         cb(data);
            //     })
            //     .error(function (data, status, headers, config) {
            //         $log.warn(data, status, headers, config);
            //     });
        }


    }

});