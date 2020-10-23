class Grid{
    
    DataGrid: any;
    items: any;
    typeSearch: string;
    inputSearch: string;
    pageSize: number;
    currentPage: number;

    Init = () => {
        this.setListeners();
        this.createGrid();
        this.pageSize = 5;
    }
    
    Filter = () => {
        var LMarca = $("#filter-marca").val();
    }

    setListeners = () => {
        this.typeSearch;
    }

    createGrid = () => {
        $.post({
            url: site.Url('GetJSON', 'Grid'),
        }).done(data => {
            //@ts-ignore
            this.items = ko.observableArray(data);
            //@ts-ignore
            this.DataGrid = ko.observableArray(this.items().slice(0, this.pageSize));
            this.currentPage = 1;
            this.createPagination();
        }).fail(error => {
            console.log(error)
        });
    }

    createPagination = () => {
        var TotalButtons = (this.items().length / this.pageSize) + 1;

        if(this.currentPage == 1){
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(1)">1</button>`);
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(2)">2</button>`);
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(3)">3</button>`);
        }else if(this.currentPage > 1){
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(1)">1</button>`);
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(1)">1</button>`);
            $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(1)">1</button>`);
        }


        for (let i = 1; i <= TotalButtons; i++) {
            if(this.currentPage == i)
                $("#number-pagination").append(`<button class="btn btn-primary mr-1" onclick="LGrid.changePagination(${i})">${i}</button>`)
            else
                $("#number-pagination").append(`<button class="btn mr-1" onclick="LGrid.changePagination(${i})">${i}</button>`)
        }
    }

    changePagination = (NextPage: number) => {
        //@ts-ignore
        this.currentPage(NextPage);
        this.createPagination();
    }

}

var LGrid = new Grid();