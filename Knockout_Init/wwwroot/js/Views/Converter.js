class Converter {
    constructor() {
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
        this.Init = () => {
            //@ts-ignore
            this.computed = ko.computed(() => {
                this.colorBox(`rgb(${this.rangeInputRed()},${this.rangeInputGreen()},${this.rangeInputBlue()})`);
                this.rgbColor(`(${this.rangeInputRed()},${this.rangeInputGreen()},${this.rangeInputBlue()})`);
                this.hexaRed(parseInt(this.rangeInputRed()).toString(16).toUpperCase());
                this.hexaGreen(parseInt(this.rangeInputGreen()).toString(16).toUpperCase());
                this.hexaBlue(parseInt(this.rangeInputBlue()).toString(16).toUpperCase());
                this.hexaColor(`#${this.hexaRed()}${this.hexaGreen()}${this.hexaBlue()}`.toUpperCase());
            });
        };
    }
}
//@ts-ignore
const LConverter = new Converter();
LConverter.Init();
//# sourceMappingURL=Converter.js.map