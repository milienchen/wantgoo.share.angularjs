angular.module("indexApp")
    .controller("indexController",
    [
        "$http",
        function ($http) {
            var self = this;

            self.firstName = "Johnny";
            self.lastName = "Chuang";

            self.fullName = function () {
                return self.firstName + ", " + self.lastName;
            };

            self.showFullName = function () {
                alert(self.firstName + ", " + self.lastName);
            };

            self.users = [
                { firstName: "Johnny", lastName: "Chuang", age: 18 },
                { firstName: "Kevin", lastName: "Chen", age: 8 },
                { firstName: "Mary", lastName: "Chou", age: 9 }
            ];

            self.getMoreUsers = function () {
                $http.get("/user/list")
                    .then(function success(response) {
                            self.users.push.apply(self.users, response.data);
                        },
                        function error(exception) {
                            console.error(exception);
                        });
            };

            self.now = new Date();

            self.updateNow = function () {
                self.now = new Date();
            };

            self.unsafeString = "&<>";
        }
    ]);