PiCARS.Directives.directive('picarsHeader', [function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'features/header/partials/header-partial.html',
        controller: 'headerCtrl', link: function($scope, $element) {
        
        }
    };
}]);