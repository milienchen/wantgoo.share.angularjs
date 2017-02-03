angular.module("htmlFilters", [])
    .filter("escape",
        function () {
            return window.encodeURIComponent;
        });