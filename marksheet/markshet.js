/**
 * Created by HP on 8/1/2015.
 */
angular.module("marksheet",[])
    .controller("appCtlr", function ($scope,$http) {
            fullName:"Khalid Hussain",

            $scope.marksheet = {
            title:"BOARD OF INTERMEDAITE AND SECONDARY EDUCATION HYDERBAD SINDH",
            fathersName:"Ali Hassan",
            surname:"SOLANGI",
            institute:'133 Govt: Degree College Sehwan Sharif',
            district:"Jamshoro",
            subject:[
                {name:"ENGLISH",maxMarks:100,minMarks:33,obtMarks:59},
                {name:"URDU-1/ URDU SALEES",maxMarks:100,minMarks:33,obtMarks:83},
                {name:"ISLAMIC EDUCATION",maxMarks:50,minMarks:33,obtMarks:39},
                {name:"PHYSICS THEORY-1",maxMarks:85,minMarks:28,obtMarks:44},
                {name:"PHYSICS PRACTICAL-1",maxMarks:15,minMarks:05,obtMarks:13},
                {name:"CHEMISTRY THEORY-1",maxMarks:85,minMarks:28,obtMarks:63},
                {name:"CHEMISTRY PRACTICAL-1",maxMarks:15,minMarks:33,obtMarks:55},
                {name:"MATHEMATICS",maxMarks:100,minMarks:33,obtMarks:55}
            ],
            result:"SIX PAPERS PASS",
            percentage:"75.90%",
            enrollment:"#:11522",
            date:"03/12/2011"

        };


        //$scope.objectInfo = {
        //    name:"khalid",
        //    marks:{
        //        english:50,math:30,chemistry:90
        //    }
        //    ,age:50,
        //    cities:[
        //        {name:"sehwan",population:2000},
        //        {name:"dadu",population:5000},
        //        {name:"bhan",population:70000},
        //        {name:"sukkur",population:70000},
        //        {name:"islamabd",population:70000},
        //        {name:"karachi",population:70000},
        //        {name:"bhan",population:70000},
        //        {name:"mehar",population:8000}
        //    ],
        //    borthers:["zubair","saleem","imran"]
        //}

    });
