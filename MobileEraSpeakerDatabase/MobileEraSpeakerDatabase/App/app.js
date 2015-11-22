var speakerDb = angular.module('speakerDb', ['ngRoute', 'flow']);

speakerDb.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: 'pages/login/login.html',
        controller: 'loginCtrl'
    }).
    when('/speakerList', {
        templateUrl: 'pages/speakerList/speakerList.html',
        controller: 'speakerListCtrl'
    }).
    otherwise({
        redirectTo: '/login'
    });
}])

speakerDb.run(function ($rootScope) {
    $rootScope.user = {
        "userID": "FAEf78aefGEAF4334234",
        "userType": "speaker",
        "username": "Otjorfald"
    }

    $rootScope.speakerList = [];
    $rootScope.speakerList.push(
        {
            "imageURL": "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
            "name": "Name Nameson",
            "twitter": "president",
            "email": "mail@mailson.com",
            "phone": "+4712345678",
            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "status": "Awaiting",
            "userID": "FAEf78aefGEAF4334234"
        });
    $rootScope.speakerList.push(
        {
            "imageURL": "https://media.cirrusmedia.com.au/LW_Media_Library/LW-603-p28-partner-profile.jpg",
            "name": "James Jameson",
            "twitter": "president2",
            "email": "email@emailson.com",
            "phone": "+4781895678",
            "desc": "I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i de Finibus Bonorum et Malorum (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, Lorem Ipsum dolor sit amet..., er hentet fra en linje i seksjon 1.10.32.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "status": "Confirmed",
            "userID": "FAEf78ag32rAF4334234"
        });
});