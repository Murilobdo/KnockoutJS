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
                    //@ts-ignore
                    if(element.valAno == parseInt(LSearch))
                        LFilterItems.push(element);
                    break;
            }
        });

        this.DataGrid(LFilterItems)
        this.createPagination();
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
        $("#pagination").html();


        //@ts-ignore
        var totalPages:number = Math.trunc(this.items().length /  this.pageSize);
        var total:number = totalPages * this.pageSize;
        
        if(this.items().length  >= total){
            totalPages = totalPages + 1;
        }

        if(this.currentPage > 1) {
            $("#pagination").append(`<button id="first-page" class="btn btn-primary mr-1" onclick="LGrid.changePagination(1)">Inicio</button>`);
        }

        if(this.currentPage > 1) {
            $("#pagination").append(`<button id="previous-page" class="btn btn-primary mr-1" onclick="LGrid.changePagination(${this.currentPage - 1})"> < </button>`);
        }

        if(this.currentPage <= totalPages && this.currentPage > 1) {
            $("#pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${(this.currentPage - 1)})">${(this.currentPage - 1)}</button>`);
        }

        $("#pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(${(this.currentPage)})">${this.currentPage}</button>`);
        
        if(this.currentPage < totalPages) {
            $("#pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${(this.currentPage + 1)})">${this.currentPage + 1}</button>`);
        }

        if((this.currentPage + 2) <= totalPages) {
            $("#pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${(this.currentPage + 2)})">${this.currentPage + 2}</button>`);
        }

        if(this.currentPage < totalPages) {
            $("#pagination").append(`<button id="next-page" class="btn btn-primary mr-1"onclick="LGrid.changePagination(${(this.currentPage + 1)})"> > </button>`);
        }

        if(totalPages > this.currentPage) {
            $("#pagination").append(`<button id="last-page" class="btn btn-primary" onclick="LGrid.changePagination(${this.items().length / this.pageSize})">Ultimo</button>`);
        }

        $("#info-grid").html("Total de registros " + this.items().length);
    }
    
    changePagination = (NextPage: number) => {
        this.currentPage = NextPage;
        this.DataGrid(this.items().slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage))
        this.cleanGrid()
        this.createPagination();
    }
    
    cleanGrid = () => $("#pagination").html("");
}

var LGrid = new Grid();