/**
 * Created by ASUS on 2014/11/5.
 */
var myApp = angular.module('my', []);
myApp.controller('HelloController',function($scope,$http) {
  $scope.greeting = { text: 'Hello' };
})
//function HelloController($scopepe) {
//  $scope.greeting = { text: 'Hello' };
//}