/**
 * Created by HP on 8/1/2015.
 */
angular.module("table",[])
    .controller("appCtlr", function ($scope,$http) {

        $scope.countryPopulation = [];
        //Get data from json file
        $http.get('countries.json')
            .success(function(data) {
               console.log(data);
                $scope.countryPopulation = data;

            })
            .error(function (err) {
                alert('there is some error !',err)
            });


        $scope.objectInfo = {
            name:"khalid",
            marks:{
                english:50,math:30,chemistry:90
            }
            ,age:50,
            cities:[
                {name:"sehwan",population:2000},
                {name:"dadu",population:5000},
                {name:"bhan",population:70000},
                {name:"sukkur",population:70000},
                {name:"islamabd",population:70000},
                {name:"karachi",population:70000},
                {name:"bhan",population:70000},
                {name:"mehar",population:8000}
            ],
            borthers:["zubair","saleem","imran"]
        }
       // $scope.dataObj = {
       //     country : "",
       //     popupation : ""
       // };
       //
       //$scope.addCountry = function () {
       //
       // $http.post( 'countries.json' ,$scope.dataObj)
       //     .success(function(data) {
       //         console.log(data);
       //         //$scope.countryPopulation.push(data);
       //
       //     })
       //     .error(function (err) {
       //         alert('there is some error !',err)
       //     });
       //}


    });
