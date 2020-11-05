ko.components.register('ko-input', {
    viewModel: function(params) {
        // Data: value is either null, 'like', or 'dislike'
        this.label = ko.observable(params.label);
        console.log("o")
    },
    template:
        `<div>
            <label data-bind="text: label"></label>
            <input class="form-control"/>
        </div>`
});