ko.components.register('ko-input', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.label = ko.observable(params.label);
    },
    template:
        `<div>
            <label data-bind="text: label" style='font-size: 25px; font-weight: 500;'></label>
            <input class="form-control"/>
        </div>`
});

ko.components.register('ko-dropdown', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.label = ko.observable(params.label);
        this.data = ko.observableArray();
        
        this.readData = () => {
            $.post({
                url:  site.Url('ReadDropdown','Component'),
            }).done(data => {
                this.data(data);
            });
        };

        this.readData();

    },
    template:
        `
            <label data-bind='text: label' style='font-size: 25px; font-weight: 500;'></label>
            <select data-bind="options: data" class='form-control'></select>
        `
});

ko.components.register('ko-number', {
    viewModel: function (params) {
        // Data: value is either null, 'like', or 'dislike'
        this.label = ko.observable(params.label);
        this.data = ko.observable();

        this.add = () => {

        };

        this.sub = () => {

        };

    },
    template:
        `
            <label data-bind='text: label' style='font-size: 25px; font-weight: 500;'></label>
            <div>
                <input type='number' class='form-control'/>
                <button type="button" class="btn btn-primary" style="position: relative;left: 85%;top: -41px;">+</button>
                <button type="button" class="btn btn-danger" style="position: relative;left: 85%;top: -41px;">-</button>
            </div>
        `
});