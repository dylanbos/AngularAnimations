var app = angular.module('myApp', ['ngAnimate']);
app.controller('animationsCtrl', function ($scope) {
    $scope.items = [{ name: 'Richard' }, { name: 'Bruno' }
        , { name: 'Jobson' }];
    $scope.counter = 0;
    $scope.addItem = function () {
        var name = 'Item' + $scope.counter++;
        $scope.items.push({ name: name });
    };
    $scope.removeItem = function () {
        var length = $scope.items.length;
        var indexRemoved = Math.floor(Math.random() * length);
        $scope.items.splice(indexRemoved, 1);
    };
    $scope.sortItems = function () {
        $scope.items.sort(function (a, b) { return a[name]
        < b[name] ? -1 : 1 });
    };
});