class Task {


    /*private*/ InputTask: string;
    /*private*/ Data: any;
    /*private*/ self = this;

    Init = () => { this.LoadData(); }

    Add = () => {
        $.post({
            url: site.Url("Create", "TaskList"),
            data: { DesTask: $("#taskName").val() }
        }).done(data => {
            //@ts-ignore
            this.Data.push({ desTask: $("#taskName").val() });
            $("#taskName").val(" ")
        });
        
    }

    LoadData = () => {
        $.post({
            url: site.Url("Read", "TaskList"),
            data: {}
        }).done(data => {
            //@ts-ignore
            this.Data = ko.observableArray(data);
        })
    }

    Delete = (ATask) => {
        $.post({
            url: site.Url("Delete", "TaskList"),
            data: { DesTask: ATask.desTask }
        }).done(data => {
            //@ts-ignore
            this.Data.remove(ATask);
        });
    }
}
//@ts-ignore
const LTask = new Task();
LTask.Init();
//ko.applyBindings(LTask);

