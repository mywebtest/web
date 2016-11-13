'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', function ($scope) {
    $scope.project={
      arr:[],
      member:[{
        'id':'0',
        'name':'books'
      },{
        'id':'1',
        'name':'label'
      },{
        'id':'3',
        'name':'fixBook'
      },{
        'id':'4',
        'name':'dist'
      },{
        'id':'5',
        'name':'bigBody'
      }],
      selectFn:function($even,obj){
        this.arr.push(obj);
        console.log(this.arr);
      }
    }
  });
