"use strict"

angular.module('app', ['auth0', 'angular-storage', 'angular-jwt', 'ui.router'])
.config(function($httpProvider, $stateProvider, $urlRouterProvider,  authProvider, jwtInterceptoProvider) {
	  
	  	authProvider.init({
	  		domain: 'david3310.auth0.com',
	  		clientID: 'vM5FLjJ5nHFnhOBGnT8KL6VIrbJHUV5u'
	  	});
	  	
	  	$urlRouterProvider.otherwise('/home');
        //customer-home 
        $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'components/home.html',
                controller: 'homeCtrl'
            })
        .state('profile', {
                url: '/profile',
                templateUrl: 'components/profile.html',
                controller: 'profileCtrl'
            });
});
