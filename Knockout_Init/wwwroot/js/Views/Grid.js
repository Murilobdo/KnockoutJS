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
                        if (element.Ano.indexOf(LSearch) != -1)
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
            if (_this.currentPage == 1) {
                $("#number-pagination").append("<button class=\"btn mr-1 btn-primary\" onclick=\"LGrid.changePagination(1)\">1</button>");
                $("#number-pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(2)\">2</button>");
                $("#number-pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(3)\">3</button>");
            }
            else if (_this.currentPage > 1) {
                $("#number-pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage - 1) + ")\">" + (_this.currentPage - 1) + "</button>");
                $("#number-pagination").append("<button class=\"btn btn-primary mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage) + ")\">" + _this.currentPage + "</button>");
                $("#number-pagination").append("<button class=\"btn mr-1\" onclick=\"LGrid.changePagination(" + (_this.currentPage + 1) + ")\">" + (_this.currentPage + 1) + "</button>");
            }
        };
        this.changePagination = function (NextPage) {
            _this.currentPage = NextPage;
            _this.DataGrid(_this.items().slice((_this.currentPage - 1) * _this.pageSize, _this.pageSize * _this.currentPage));
            _this.cleanGrid();
            _this.createPagination();
        };
        this.cleanGrid = function () { return $("#number-pagination").html(""); };
    }
    return Grid;
}());
var LGrid = new Grid();
//# sourceMappingURL=Grid.js.map