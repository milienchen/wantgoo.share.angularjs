angular.module("indexApp")
    .controller("indexController",
    [
        function () {
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
        }
    ]);