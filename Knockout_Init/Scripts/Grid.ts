class Grid{
    
    DataGrid: any;
    items: any;
    typeSearch: string;
    inputSearch: string;
    pageSize: number;
    currentPage: number;
    computed: any;

    Init = () => {
        this.currentPage = 1
        this.pageSize = 5;
        this.createGrid();
    }
    
    Filter = () => {
        var LFilter = $("#filter").val();
        var LSearch = $("#search-input").val();
        var LFilterItems = [];

        this.items().forEach(element => {
            debugger;
            switch (LFilter) {
                case "Marca":
                    if(element.tidMarca.indexOf(LSearch) != -1)
                        LFilterItems.push(element);
                    break;
                case "Modelo":
                    if(element.tidCarro.indexOf(LSearch) != -1)
                        LFilterItems.push(element);
                    break;
                case "Ano":
                    if(element.Ano.indexOf(LSearch) != -1)
                        LFilterItems.push(element);
                    break;
            }
        });

        this.DataGrid(LFilterItems)
    }
    
    createGrid = () => {
        $.post({
            url: site.Url('GetJSON', 'Grid'),
        }).done(data => {
            //@ts-ignore
            this.items = ko.observableArray(data);
            //@ts-ignore
            this.DataGrid = ko.observableArray(this.items().slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage));
            this.currentPage = 1;
            this.createPagination();
        }).fail(error => {
            console.log(error)
        });
    }
    
    createPagination = () => {
        
        if(this.currentPage == 1) {
            $("#number-pagination").append(`<button class="btn mr-1 btn-primary" onclick="LGrid.changePagination(1)">1</button>`);
            $("#number-pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(2)">2</button>`);
            $("#number-pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(3)">3</button>`);
        }else if(this.currentPage > 1) {
            $("#number-pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${(this.currentPage - 1)})">${(this.currentPage - 1)}</button>`);
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(${(this.currentPage)})">${this.currentPage}</button>`);
            $("#number-pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${(this.currentPage + 1)})">${(this.currentPage + 1)}</button>`);
        }
    }
    
    changePagination = (NextPage: number) => {
        this.currentPage = NextPage;
        this.DataGrid(this.items().slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage))
        this.cleanGrid()
        this.createPagination();
    }
    
    cleanGrid = () => $("#number-pagination").html("");
}

var LGrid = new Grid();