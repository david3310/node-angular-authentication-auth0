'use strict';

// angular
//     .module('app', [])
//     .directive('toolbar', toolbar);

// function toolbar() {
//     return {
//         templateUrl: 'components/toolbar.html',
//         controller: toolbarCtrl,
//         controllerAs: 'toolbar'
//     }
// }

// function toolbarCtrl(auth, store, $location) {
//     var vm = this;
//     vm.login = login;
//     vm.logout = logout;
//     vm.auth = auth;

//     function hello() {
//         alert('HIHIHIHIHIHIHI');
//     }

//     function logIn() {
//         auth.signin({}, function(profile, token) {
//             store.set('profile', profile);
//             store.set('id_token', token);
//             $location.path('/home');
//         }, function(error) {
//             console.log(error);
//         });
//     }

//     function logOut() {
//         store.remove('profile');
//         store.remove('id_token');
//         auth.signout();
//         $location.path('/home');
//     }

// }


angular
    .module('app', [])
    .directive('toolbar', function() {

        var controller = ['$scope', function($scope) {
            $scope.hello = function() {
                alert('HIHIHIHIHIHIHI');
            }

            // var vm = this;
            // vm.login = login;
            // vm.logout = logout;
            // vm.auth = auth;

            // $scope.logIn = function() {
            //     auth.signin({}, function(profile, token) {
            //         store.set('profile', profile);
            //         store.set('id_token', token);
            //         $location.path('/home');
            //     }, function(error) {
            //         console.log(error);
            //     });
            // }

            // $scope.logOut = function() {
            //     store.remove('profile');
            //     store.remove('id_token');
            //     auth.signout();
            //     $location.path('/home');
            // }

        }];

        return {
            controller: controller,
            bindToController: true, //required in 1.3+ with controllerAs
            templateUrl: 'components/toolbar.html'
        };
    });
















// angular
//     .module('app', [])
//     .directive('toolbar', function() {

//         var controller = ['$scope', 'auth', 'store', '$location', function($scope, auth, store, $location) {
//             $scope.hello = function() {
//                 alert('HIHIHIHIHIHIHI');
//             }

//             var vm = this;
//             vm.login = login;
//             vm.logout = logout;
//             vm.auth = auth;

//             $scope.logIn = function() {
//                 auth.signin({}, function(profile, token) {
//                     store.set('profile', profile);
//                     store.set('id_token', token);
//                     $location.path('/home');
//                 }, function(error) {
//                     console.log(error);
//                 });
//             }

//             $scope.logOut = function() {
//                 store.remove('profile');
//                 store.remove('id_token');
//                 auth.signout();
//                 $location.path('/home');
//             }

//         }];

//         return {
//             controller: controller,
//             bindToController: true, //required in 1.3+ with controllerAs
//             templateUrl: 'components/toolbar.html'
//         };
//     });
