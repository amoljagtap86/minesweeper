(function () {
    Array.prototype.contains = function (val) {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            if (this[i] == val) {
                return true;
            }
        }
        return false;
    };
})();