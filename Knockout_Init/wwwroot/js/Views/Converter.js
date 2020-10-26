var Converter = /** @class */ (function () {
    function Converter() {
        var _this = this;
        //@ts-ignore
        this.rangeInputRed = ko.observable(255);
        //@ts-ignore
        this.rangeInputGreen = ko.observable(0);
        //@ts-ignore
        this.rangeInputBlue = ko.observable(0);
        //@ts-ignore
        this.colorBox = ko.observable();
        //@ts-ignore
        this.hexaColor = ko.observable();
        //@ts-ignore
        this.rgbColor = ko.observable();
        //@ts-ignore
        this.hexaRed = ko.observable();
        //@ts-ignore
        this.hexaGreen = ko.observable();
        //@ts-ignore
        this.hexaBlue = ko.observable();
        this.Init = function () {
            //@ts-ignore
            _this.computed = ko.computed(function () {
                _this.colorBox("rgb(" + _this.rangeInputRed() + "," + _this.rangeInputGreen() + "," + _this.rangeInputBlue() + ")");
                _this.rgbColor("(" + _this.rangeInputRed() + "," + _this.rangeInputGreen() + "," + _this.rangeInputBlue() + ")");
                _this.hexaRed(parseInt(_this.rangeInputRed()).toString(16).toUpperCase());
                _this.hexaGreen(parseInt(_this.rangeInputGreen()).toString(16).toUpperCase());
                _this.hexaBlue(parseInt(_this.rangeInputBlue()).toString(16).toUpperCase());
                _this.hexaColor(("#" + _this.hexaRed() + _this.hexaGreen() + _this.hexaBlue()).toUpperCase());
            });
        };
    }
    return Converter;
}());
//@ts-ignore
var LConverter = new Converter();
LConverter.Init();
//# sourceMappingURL=Converter.js.map