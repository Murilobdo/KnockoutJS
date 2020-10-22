class Grid{
    
    DataGrid: any;
    items: any;
    Marcas: any;
    Modelos: any;
    Anos: any;
    
    Init = (data) => {
        if(data == undefined){
            $.post({
                url: site.Url('GetJSON','Grid'),
            }).done(data => {
                this.setDropDowns(data);
                //@ts-ignore
                this.items = ko.observableArray(data);
                //@ts-ignore
                this.DataGrid = new ko.simpleGrid.viewModel({
                    data: data,
                    columnTemplate: "templateColumn",
                    columns: [
                        { headerText: "Marca", rowText: "tidMarca" },
                        { headerText: "Modelo", rowText: "tidCarro" },
                        { headerText: "Ano", rowText: "valAno" },
                        //{ headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
                    ],
                    pageSize: 4
                });
            }).fail(error => {
                console.log(error)
            });
        }else{
            //@ts-ignore
            this.DataGrid = new ko.simpleGrid.viewModel({
                data: data,
                columnTemplate: "templateColumn",
                columns: [
                    { headerText: "Marca", rowText: "tidMarca" },
                    { headerText: "Modelo", rowText: "tidCarro" },
                    { headerText: "Ano", rowText: "valAno" },
                    //{ headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
                ],
                pageSize: 4
            });
        }
        
    }
    
    Filter = () => {
        console.log("filter");
        var LMarca = $("#filter-marca").val();
        console.log(this.DataGrid.data)
        //@ts-ignore
        this.SetGrid(LGrid.items().filter(p => p.tidMarca == LMarca))
    }

    SetGrid = (data) => {
        $("#grid").html(" ");
        LGrid = new Grid();
        LGrid.Init(data);
        //@ts-ignore
        // setTimeout(() => { ko.applyBindings(LGrid) }, 100);

        // //Mudar o data da Grid 
        // this.DataGrid.data = data;
        
        //recriar a GRID não funcionou
        // this.DataGrid = undefined;
        // //@ts-ignore
        // this.DataGrid = new ko.simpleGrid.viewModel({
        //     data: data,
        //     columnTemplate: "templateColumn",
        //     columns: [
        //         { headerText: "Marca", rowText: "tidMarca" },
        //         { headerText: "Modelo", rowText: "tidCarro" },
        //         { headerText: "Ano", rowText: "valAno" },
        //         // { headerText: "Price", rowText: function (item) { return "$" + item.price.toFixed(2) } }
        //     ],
        //     pageSize: 4
        // });
    }
    setDropDowns = (data: any) => {
        this.Marcas = data.map(item => item.tidMarca)
                .filter((value, index, self) => self.indexOf(value) === index);
        
        this.Modelos = data.map(item => item.tidCarro)
            .filter((value, index, self) => self.indexOf(value) === index);
    
        this.Anos = data.map(item => item.valAno)
            .filter((value, index, self) => self.indexOf(value) === index);
    }
}
var LGrid = new Grid();