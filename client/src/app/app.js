angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('news', {
      url: '/news'
    })

    // .state('/volunteer', {
    //   url: '/volunteer'
    // })

    .state('/volunteer', {
      url: '/volunteer'
    })

    .state('home', {
      url: '/'
    })
    
  $urlRouterProvider.otherwise('/')
})
