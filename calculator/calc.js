/**
 * Created by HP on 8/1/2015.
 */
angular.module("hello",[])
    .controller('helloCtrl', function ($scope) {
    $scope.helloMessage = 'Calculator';


        $scope.txt = false

        //angular function

        //$scope.addValue = function (val1,val2,val3) {
        //
        //    alert(val1 + val2 + val3);
        //};
        //
        //$scope.addValue(4,4,4);


        //javascript function

        //function addVal(val1,val2,val3){
        //    alert(val1 + val2 + val3);
        //}
        //addVal(2,3,4)



});
