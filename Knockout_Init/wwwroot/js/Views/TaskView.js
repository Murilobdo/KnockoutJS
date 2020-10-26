var Task = /** @class */ (function () {
    function Task() {
        var _this = this;
        /*private*/ this.self = this;
        this.Init = function () { _this.LoadData(); };
        this.Add = function () {
            $.post({
                url: site.Url("Create", "TaskList"),
                data: { DesTask: $("#taskName").val() }
            }).done(function (data) {
                //@ts-ignore
                _this.Data.push({ desTask: $("#taskName").val() });
                $("#taskName").val(" ");
            });
        };
        this.LoadData = function () {
            $.post({
                url: site.Url("Read", "TaskList"),
                data: {}
            }).done(function (data) {
                //@ts-ignore
                _this.Data = ko.observableArray(data);
            });
        };
        this.Delete = function (ATask) {
            $.post({
                url: site.Url("Delete", "TaskList"),
                data: { DesTask: ATask.desTask }
            }).done(function (data) {
                //@ts-ignore
                _this.Data.remove(ATask);
            });
        };
    }
    return Task;
}());
//@ts-ignore
var LTask = new Task();
LTask.Init();
//ko.applyBindings(LTask);
//# sourceMappingURL=TaskView.js.map