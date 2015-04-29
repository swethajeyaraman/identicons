var app = angular.module("IdentIcons", []);

app.controller("IndexCtrl",
    function ($scope) {
        $scope.message = "Welcome To generator";

        $scope.generate = function(text)
        {
            $("body").append($("<canvas/>")
                .attr({ "width": 80, "height": 80 })
                .jdenticon(CryptoJS.MD5(text).toString()));

        }
    });
