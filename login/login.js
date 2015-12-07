/**
 * Created by HP on 8/1/2015.
 */
angular.module("login",[])
    .controller("loginCtrl", function ($scope) {

        //string
        //var string = "this is string";
        //document.write(string+ "</br>");

        //intiger
        //var intiger = 78679879;
        //document.write(intiger);

        //object have properties
        //evry property access by objectname.property name
        //var khalidInfoObject = {name:'khalid',age:20,country:"pakistan",city:"karachi"};
        //console.log(khalidInfoObject);
        //console.log(khalidInfoObject.country);

        //array index start with 0 zero
        //var alphabetArray = ["a",{name:'khalid',age:20,country:"pakistan",city:"karachi"},433,"c","d","e","f"];
        //console.log(alphabetArray[1].city) // karachi
        //console.log(typeof alphabetArray[0])//string
        //console.log(typeof alphabetArray[1])//number



      //var students = [
      //     {name:"khalid",age:20,city:"karachi",country:"pakistan"},
      //     {name:"zubair",age:30,city:"karachi",country:"pakistan"},
      //     {name:"saleem",age:15,city:"karachi",country:"pakistan"},
      //     {name:"imran",age:10,city:"karachi",country:"pakistan"},
      // ]
      //
      //    console.log(students[2].age)





        $scope.infomation = [


            { name:"m.khalid",adress:"ghulistan e johar",cnic:415060984703,email:"solangiking43@gmail.com"},
            { name:"m.zubair",adress:"ghulistan e johar",cnic:415060984703,email:"solangiking43@gmail.com"},
            { name:"m.saleem",adress:"ghulistan e johar",cnic:415060984703,email:"saleem@gmail.com"},
            { name:"m.imran",adress:"ghulistan e johar",cnic:415060984703,email:"imran@gmail.com"},
            { name:"m.aamir",adress:"ghulistan e johar",cnic:415060984703,email:"aamir@gmail.com"},
            { name:"m.zahid",adress:"ghulistan e johar",cnic:415060984703,email:"zahid@gmail.com"},
            { name:"m.muneer",adress:"ghulistan e johar",cnic:415060984703,email:"muneer@gmail.com"},

        ]

        $scope.userInfo = {
            name:"",
            adress:"",
            cnic:"",
            email:""

        }

        $scope.addInfo = function(){
            $scope.infomation.push($scope.userInfo)
        }

        //console.log(infomation)




    });
