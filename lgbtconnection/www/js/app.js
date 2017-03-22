// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'xeditable', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBBlkOxA3e8p4-TOjxbhrWFxbdnWkeIRs",
    authDomain: "demo1-f1692.firebaseapp.com",
    databaseURL: "https://demo1-f1692.firebaseio.com",
    storageBucket: "demo1-f1692.appspot.com",
    messagingSenderId: "1081933582299"
  };
  firebase.initializeApp(config);

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
     .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/SignInTemplate.html',
      controller: 'SignInCtrl'
    })

    .state('signup',{
      url: '/sign-up',
      templateUrl: 'templates/SignUpTemplate.html',
      controller: 'SignUpCtrl'
    })
    .state('tabs.chat',{
      url: '/chat/:_idUser',
      views: {
        'friend-tab': {
          templateUrl: 'templates/ChatTemplate.html',
          controller: 'ChatCtrl'
        }
      }
    })
    .state('tabs', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/MainTemplate.html',
      controller: 'MainCtrl'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: 'templates/HomeTemplate.html',
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.friend', {
      url: '/friend',
      views: {
        'friend-tab': {
          templateUrl: 'templates/FriendTemplate.html',
          controller: 'FriendTabCtrl'
        }
      }
    })
    .state('tabs.setting', {
      url: '/setting',
      views: {
        'setting-tab': {
          templateUrl: 'templates/SettingTemplate.html',
          controller: 'SettingTabCtrl'
        }
      }
    })
    .state('tabs.profile', {
      url: '/profile',
      views: {
        'setting-tab': {
          templateUrl: 'templates/ProfileTemplate.html',
          controller: 'ProfileTabCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

})
.controller('SignInCtrl', function($rootScope, $scope, $state, $firebaseAuth){
  $scope.msg="";
  $scope.authObj = $firebaseAuth();
    var firebaseUser = $scope.authObj.$getAuth();
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        $rootScope.uid = firebaseUser.uid;
          $state.go('tabs.home');
      } else {
        console.log("Signed out");
      }
  $scope.signIn = function(user){
    //$state.go('tabs.home');
    $scope.authObj.$signInWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        $rootScope.uid = firebaseUser.uid;
        $state.go('tabs.home');
      }).catch(function(error) {
        console.error("Authentication failed:", error);
        $scope.msg = "Wrong username or password!";
      });
  }
})
.controller('SignUpCtrl', function($rootScope, $scope, $state, $firebaseAuth, $firebaseObject){
  $scope.msg="";
  $scope.authObj = $firebaseAuth();
    var firebaseUser = $scope.authObj.$getAuth();
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
          $state.go('tabs.home');
      } else {
        console.log("Signed out");
      }
  
   $scope.signUp = function(user){
    if (user.password != user.confirmpassword){
            $scope.msg = "The Passwords not match";
        }
        else{
          $scope.authObj.$createUserWithEmailAndPassword(user.email, user.password)
          .then(function(firebaseUser) {
            console.log("User " + firebaseUser.uid + " created successfully!");
            $scope.authObj.$signInWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
              console.log("Signed in as:", firebaseUser.uid);
              $rootScope.uid = firebaseUser.uid;
               $scope.ref = firebase.database().ref();
                $scope.userRef = $scope.ref.child($rootScope.uid);
                var obj = $firebaseObject($scope.userRef);
                obj.name = user.name;
                obj.gender = user.gender;
                obj.date = user.date;
                  obj.$save().then(function(ref) {
                    
                  }, function(error) {
                    console.log("Error:", error);
                  });
              $state.go('tabs.home');
            }).catch(function(error) {
              console.error("Authentication failed:", error);
              $scope.msg = "Wrong username or password!";
            });
          }).catch(function(error) {
            console.error("Error: ", error);
            $scope.msg = error.message;
          });
        }
  }
})
.controller('MainCtrl', function($scope){
  
})
.controller('HomeTabCtrl', function($rootScope, $scope, $cordovaGeolocation, $firebaseObject){
  function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c * 1000;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
        $scope.uid = $rootScope.uid;
        $scope.ref = firebase.database().ref();
        $scope.userRef = $scope.ref.child("location/"+$rootScope.uid);
        var obj = $firebaseObject($scope.userRef);
        $scope.findFriend = function(){
           var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
            .getCurrentPosition(posOptions)
            
            .then(function (position) {
                var lat  = position.coords.latitude
                var long = position.coords.longitude
                //alert(lat + '   ' + long)
                console.log(lat + '   ' + long)
                obj.lat = lat;
                obj.lng = long;
                obj.$save().then(function(ref) {
                      $scope.locationRef = $scope.ref.child("location");
                      $scope.objLocation = $firebaseObject($scope.locationRef);
                      $scope.objLocation.$loaded(
                        function(data) {
                          console.log(data);
                      angular.forEach(data, function(value, key) {
                          var f_lat, f_lng, distance;
                            if (key != $scope.uid){
                                f_lat = value.lat
                                f_lng = value.lng
                                distance = getDistanceFromLatLonInM(obj.lat, obj.lng, f_lat, f_lng)
                                // Match 2 nguoi voi nhau
                                if (distance <= 50 ){
                                  
                                }
                            }
                        });
                        },
                        function(error) {
                          console.error("Error:", error);
                        }
                      );
                      
                  }, function(error) {
                    console.log("Error:", error);
                  });
            }, function(err) {
                console.log(err)
            });
        }
})
.controller('ProfileTabCtrl', function($rootScope, $scope, $firebaseObject){
      $scope.uid = $rootScope.uid;
      $scope.ref = firebase.database().ref();
      $scope.userRef = $scope.ref.child($scope.uid);
      var obj = $firebaseObject($scope.userRef);
    obj.$loaded(
      function(data) {
        //$scope.user = data;
        obj.$bindTo($scope, "user");
      },
      function(error) {
        console.error("Error:", error);
      }
    );
})
.controller('FriendTabCtrl', function($rootScope, $scope, $firebaseObject){
    $scope.uid = $rootScope.uid;
    $scope.ref = firebase.database().ref();
    $scope.userRef = $scope.ref.child("friend/"+$scope.uid);
    var list = $firebaseObject($scope.userRef);
    list.$loaded(
      function(data) {
        list.$bindTo($scope, "list");
        $scope.list_friend = [];
        //console.log($scope.list_friend);
        for (var item in list.list_friend){
          var f_id = list.list_friend[item];
          var f_name = "";
          var tmpRef = $firebaseObject($scope.ref.child(f_id+"/name"));
          tmpRef.$loaded(function(data){
            f_name = data.$value;
            console.log(f_name);
            var tmp = {"id" : "", "name": ""};
            tmp.id = f_id;
            tmp.name = f_name;
            $scope.list_friend.push(tmp);
            console.log($scope.list_friend)
          })
        }
      },
      function(error) {
        console.error("Error:", error);
      }
    );

})
.controller('SettingTabCtrl', function($rootScope, $scope, $firebaseObject){
      $scope.uid = $rootScope.uid;
      $scope.ref = firebase.database().ref();
      $scope.userRef = $scope.ref.child($scope.uid);
      console.log($rootScope.uid);
      var obj = $firebaseObject($scope.userRef);
    obj.$loaded(
      function(data) {
        $scope.user = data;
      },
      function(error) {
        console.error("Error:", error);
      }
    );
})
.controller('SignOutCtrl', function($scope, $state){
      
})
.controller('ChatCtrl', function($scope, $stateParams, $timeout, $ionicScrollDelegate){
 // alert($stateParams._idUser);
 $scope.showTime = true;

  $scope.focusManager = { focusInputOnBlur: true };

  var alternate;


  $scope.getItemHeight = function(event) {
    console.log('getItemHeight', event);
    return 300;
  }

  $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: '12345',
      text: $scope.data.message,
      time: d
    });
    $scope.messages.push({
        userId: $stateParams._idUser,
        text: $scope.data.message + " Guest",
        time: d
    })

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];
})