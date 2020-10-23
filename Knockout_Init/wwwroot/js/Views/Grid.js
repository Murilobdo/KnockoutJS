class Grid {
    constructor() {
        this.Init = () => {
            this.setListeners();
            this.createGrid();
            this.pageSize = 5;
        };
        this.Filter = () => {
            var LMarca = $("#filter-marca").val();
        };
        this.setListeners = () => {
            this.typeSearch;
        };
        this.createGrid = () => {
            $.post({
                url: site.Url('GetJSON', 'Grid'),
            }).done(data => {
                //@ts-ignore
                this.items = ko.observableArray(data);
                //@ts-ignore
                this.DataGrid = ko.observableArray(this.items().slice(0, this.pageSize));
                this.currentPage = 1;
                this.createPagination(data.length);
            }).fail(error => {
                console.log(error);
            });
        };
        this.createPagination = (ADataLength) => {
            var TotalButtons = (ADataLength / this.pageSize) + 1;
            for (let i = 1; i <= TotalButtons; i++) {
                if (this.currentPage == i)
                    $("#number-pagination").append(`<button class="btn btn-primary mr-1" >${i}</button>`);
                else
                    $("#number-pagination").append(`<button class="btn mr-1" >${i}</button>`);
            }
        };
    }
}
var LGrid = new Grid();
//# sourceMappingURL=Grid.js.map