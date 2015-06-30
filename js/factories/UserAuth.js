/**
 * Created by akash on 30/6/15.
 */
angular.module('viands')
.factory('UserAuth', function ($http, host) {
        var url = host.url + ':' + host.port;

        var token;

        var login = function (params) {
            return $http.post(url +  '/login', params)
                .then(function (data) {
                    console.log(data)
                    return data;
                })
        }

        return {
            login: login
        }
    })