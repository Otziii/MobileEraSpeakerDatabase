speakerDb.controller('speakerListCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.selectedIndex = -1;
    $scope.uploadedImage;

    $scope.resetModal = function () {
        $scope.modal = {
            "imageURL": "",
            "name": "",
            "twitter": "",
            "email": "",
            "phone": "",
            "desc": "",
            "status": "Unknown",
            "userID": ""
        };
    }
    $scope.resetModal();

    $scope.query = "";
    $scope.orderProp = 'Order';

    $scope.upload = function (fil) {
        $scope.modal.imageURL = "";
        $scope.uploadedImage = fil;
        console.log($scope.uploadedImage);
    }

    $scope.setOrder = function (val) {
        $scope.orderProp = val;
    }

    $scope.newSpeaker = function () {
        $scope.resetModal();
        $scope.selectedIndex = -1;
    }

    $scope.setModalValues = function (twitter) {
        if (twitter == "") {
            alert("No twitter-bug.");
        }
        var index = -1;

        for (var i = 0; i < $rootScope.speakerList.length; i++) {
            if ($rootScope.speakerList[i].twitter === twitter) {
                index = i;
                break;
            }
        }

        $scope.selectedIndex = index;
        $scope.modal = $rootScope.speakerList[index];
    }

    $scope.saveModalValues = function () {
        if ($scope.selectedIndex === -1) {
            $rootScope.speakerList.push($scope.modal);
        }
        else {
            $rootScope.speakerList[index] = $scope.modal;
        }
    }

    $scope.signOut = function () {
        $location.path('/login');
    }
}]);