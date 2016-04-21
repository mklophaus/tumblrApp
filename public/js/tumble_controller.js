(function(){
  "use strict";

  angular
    .module("dumbThings")
    .controller("TumbleController", TumbleController);

  TumbleController.$inject = ["$scope", "$http"];

  //tumblr key
  //qCveXtQsOsDv79H09xxwPHDtMpU0ynjEKbQoLsgCFMrxa8nCnT

  function tumbleController($scope, $http) {

      $http.get('https://api.tumblr.com/v2/tagged?tag=dog').then(function(response){
    console.log(response);

  });
    // angular.forEach(response.data, function(e){
    //     markers.push(e);
    // });

  }

  // $http.post("POST https://www.tumblr.com/oauth/request_token")

  // Authorize URL:
  // https://www.tumblr.com/oauth/authorize
  // Access-token URL:
  // POST https://www.tumblr.com/oauth/access_token










})

