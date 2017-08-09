'use strict';
eventsApp.factory('eventsData', function ($resource) {
    var resource = $resource('http://localhost:4351/event/:id',{id:'@id'},);
    return {
        getEvent: function (id) {
            return resource.get({id:id})
            // $http({ method: 'get', url: 'http://localhost:4351/event/1' })
            //     .success(function (data, status, headers, config) {
            //         cb(data);
            //     })
            //     .error(function (data, status, headers, config) {
            //         $log.warn(data, status, headers, config);
            //     });
        },
        saveEvent:function(event){
            event.id="10";
            return resource.save(event);
        }


    }

});