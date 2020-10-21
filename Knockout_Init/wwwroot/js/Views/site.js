var Site = /** @class */ (function () {
    function Site() {
        this.Url = function (AAction, AController) { return "https://" + $("#root").val() + "/" + AController + "/" + AAction; };
    }
    return Site;
}());
var site = new Site();
//# sourceMappingURL=site.js.map