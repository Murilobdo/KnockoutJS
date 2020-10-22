var Grid = /** @class */ (function () {
    function Grid() {
        var _this = this;
        this.Init = function (data) {
            if (data == undefined) {
                $.post({
                    url: site.Url('GetJSON', 'Grid'),
                }).done(function (data) {
                    _this.setDropDowns(data);
                    //@ts-ignore
                    _this.items = ko.observableArray(data);
                    //@ts-ignore
                    _this.DataGrid = new ko.simpleGrid.viewModel({
                        data: data,
                        columnTemplate: "templateColumn",
                        columns: [
                            { headerText: "Marca", rowText: "tidMarca" },
                            { headerText: "Modelo", rowText: "tidCarro" },
                            { headerText: "Ano", rowText: "valAno" },
                        ],
                        pageSize: 4
                    });
                }).fail(function (error) {
                    console.log(error);
                });
            }
            else {
                //@ts-ignore
                _this.DataGrid = new ko.simpleGrid.viewModel({
                    data: data,
                    columnTemplate: "templateColumn",
                    columns: [
                        { headerText: "Marca", rowText: "tidMarca" },
                        { headerText: "Modelo", rowText: "tidCarro" },
                        { headerText: "Ano", rowText: "valAno" },
                    ],
                    pageSize: 4
                });
            }
        };
        this.Filter = function () {
            console.log("filter");
            var LMarca = $("#filter-marca").val();
            console.log(_this.DataGrid.data);
            //@ts-ignore
            _this.SetGrid(LGrid.items().filter(function (p) { return p.tidMarca == LMarca; }));
        };
        this.SetGrid = function (data) {
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
        };
        this.setDropDowns = function (data) {
            _this.Marcas = data.map(function (item) { return item.tidMarca; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.Modelos = data.map(function (item) { return item.tidCarro; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.Anos = data.map(function (item) { return item.valAno; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        };
    }
    return Grid;
}());
var LGrid = new Grid();
//# sourceMappingURL=Grid.js.map