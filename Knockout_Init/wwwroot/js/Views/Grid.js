var Grid = /** @class */ (function () {
    function Grid() {
        var _this = this;
        this.Init = function () {
            _this.currentPage = 1;
            _this.pageSize = 5;
            _this.createGrid();
        };
        this.Filter = function () {
            var LFilter = $("#filter").val();
            var LSearch = $("#search-input").val();
            var LFilterItems = [];
            _this.items().forEach(function (element) {
                debugger;
                switch (LFilter) {
                    case "Marca":
                        if (element.tidMarca.indexOf(LSearch) != -1)
                            LFilterItems.push(element);
                        break;
                    case "Modelo":
                        if (element.tidCarro.indexOf(LSearch) != -1)
                            LFilterItems.push(element);
                        break;
                    case "Ano":
                        if (element.ValAno == LSearch)
                            LFilterItems.push(element);
                        break;
                }
            });
            _this.DataGrid(LFilterItems);
        };
        this.createGrid = function () {
            $.post({
                url: site.Url('GetJSON', 'Grid'),
            }).done(function (data) {
                //@ts-ignore
                _this.items = ko.observableArray(data);
                //@ts-ignore
                _this.DataGrid = ko.observableArray(_this.items().slice((_this.currentPage - 1) * _this.pageSize, _this.pageSize * _this.currentPage));
                _this.currentPage = 1;
                _this.createPagination();
            }).fail(function (error) {
                console.log(error);
            });
        };
        this.createPagination = function () {
            $("#pagination").html();
            //@ts-ignore
            var totalPages = Math.trunc(_this.items().length / _this.pageSize);
            var total = totalPages * _this.pageSize;
            if (_this.items().length >= total) {
                totalPages = totalPages + 1;
            }
            if (_this.currentPage > 1) {
                $("#pagination").append("<button id=\"first-page\" class=\"btn btn-primary mr-1\" onclick=\"LGrid.changePagination(1)\">Inicio</button>");
            }
            if (_this.currentPage > 1) {
                $("#pagination").append("<button id=\"previous-page\" class=\"btn btn-primary mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage - 1) + ")\"> < </button>");
            }
            if (_this.currentPage <= totalPages && _this.currentPage > 1) {
                $("#pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage - 1) + ")\">" + (_this.currentPage - 1) + "</button>");
            }
            $("#pagination").append("<button class=\"btn btn-primary mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage) + ")\">" + _this.currentPage + "</button>");
            if (_this.currentPage < totalPages) {
                $("#pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage + 1) + ")\">" + (_this.currentPage + 1) + "</button>");
            }
            if ((_this.currentPage + 2) <= totalPages) {
                $("#pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage + 2) + ")\">" + (_this.currentPage + 2) + "</button>");
            }
            if (_this.currentPage < totalPages) {
                $("#pagination").append("<button id=\"next-page\" class=\"btn btn-primary mr-1\"onclick=\"LGrid.changePagination(" + (_this.currentPage + 1) + ")\"> > </button>");
            }
            if (totalPages > _this.currentPage) {
                $("#pagination").append("<button id=\"last-page\" class=\"btn btn-primary\" onclick=\"LGrid.changePagination(" + _this.items().length / _this.pageSize + ")\">Ultimo</button>");
            }
            $("#info-grid").html("Total de registros " + _this.items().length);
        };
        this.changePagination = function (NextPage) {
            _this.currentPage = NextPage;
            _this.DataGrid(_this.items().slice((_this.currentPage - 1) * _this.pageSize, _this.pageSize * _this.currentPage));
            _this.cleanGrid();
            _this.createPagination();
        };
        this.cleanGrid = function () { return $("#pagination").html(""); };
    }
    return Grid;
}());
var LGrid = new Grid();
//# sourceMappingURL=Grid.js.map