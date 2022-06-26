var app = angular
            .module("Angular", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Template/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Template/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Template/students.html",
                        controller: "studentsController"
                    })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function ($scope, $http) {
                 $http.get("StudentService.asmx/GetAllStudents")
                                        .then(function (response) {
                                            $scope.students = response.data;
                                        })
             })