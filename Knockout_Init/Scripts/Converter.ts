class Converter {

    //@ts-ignore
    private rangeInputRed = ko.observable(255);
    //@ts-ignore
    private rangeInputGreen = ko.observable(0);
    //@ts-ignore
    private rangeInputBlue = ko.observable(0);
    //@ts-ignore
    private colorBox = ko.observable();
    //@ts-ignore
    private hexaColor = ko.observable();
    //@ts-ignore
    private rgbColor = ko.observable();
    //@ts-ignore
    private hexaRed = ko.observable();
    //@ts-ignore
    private hexaGreen = ko.observable();
    //@ts-ignore
    private hexaBlue = ko.observable();
    private computed: any;

    Init = () => {
        //@ts-ignore
        this.computed = ko.computed(() => {
            this.colorBox(`rgb(${this.rangeInputRed()},${this.rangeInputGreen()},${this.rangeInputBlue()})`);
            this.rgbColor(`(${this.rangeInputRed()},${this.rangeInputGreen()},${this.rangeInputBlue()})`)


            this.hexaRed(parseInt(this.rangeInputRed()).toString(16).toUpperCase());
            this.hexaGreen(parseInt(this.rangeInputGreen()).toString(16).toUpperCase());
            this.hexaBlue(parseInt(this.rangeInputBlue()).toString(16).toUpperCase());

            this.hexaColor(`#${this.hexaRed()}${this.hexaGreen()}${this.hexaBlue()}`.toUpperCase())
        });
    }
     
  
}

//@ts-ignore
const LConverter = new Converter();
LConverter.Init();
