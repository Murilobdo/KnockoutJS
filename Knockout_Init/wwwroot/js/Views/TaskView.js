class Task {
    constructor() {
        /*private*/ this.self = this;
        this.Init = () => { this.LoadData(); };
        this.Add = () => {
            $.post({
                url: site.Url("Create", "TaskList"),
                data: { DesTask: $("#taskName").val() }
            }).done(data => {
                //@ts-ignore
                this.Data.push({ desTask: $("#taskName").val() });
                $("#taskName").val(" ");
            });
        };
        this.LoadData = () => {
            $.post({
                url: site.Url("Read", "TaskList"),
                data: {}
            }).done(data => {
                //@ts-ignore
                this.Data = ko.observableArray(data);
            });
        };
        this.Delete = (ATask) => {
            $.post({
                url: site.Url("Delete", "TaskList"),
                data: { DesTask: ATask.desTask }
            }).done(data => {
                //@ts-ignore
                this.Data.remove(ATask);
            });
        };
    }
}
//@ts-ignore
const LTask = new Task();
LTask.Init();
//ko.applyBindings(LTask);
//# sourceMappingURL=TaskView.js.map