'use strict';

var chatApp = angular.module("chatApp", ["firebase"]);

chatApp.controller('ChatController', ['$scope', '$firebase', function ($scope, $firebase) {
	var chatRef = new Firebase("https://popping-heat-4409.firebaseio.com/chats");
  $scope.comments = $firebase(chatRef);

  $scope.addComment = function(comment,name) {
    
    $scope.comments.$add({comment: comment, when: Date(), name: name });

    $scope.newComment = "";
    $scope.newName = "";
  };
}]);

