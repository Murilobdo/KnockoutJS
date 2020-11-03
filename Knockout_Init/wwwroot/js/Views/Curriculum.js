var Curriculum = /** @class */ (function () {
    function Curriculum() {
        var _this = this;
        //@ts-ignore
        this.name = ko.observable();
        //@ts-ignore
        this.RG = ko.observable();
        //@ts-ignore
        this.CPF = ko.observable();
        //@ts-ignore
        this.email = ko.observable();
        //@ts-ignore
        this.celular = ko.observable();
        //@ts-ignore
        this.telefone = ko.observable();
        //@ts-ignore
        this.cursos = ko.observable();
        this.Init = function () { };
        this.maskRG = function () {
            if (_this.RG().length == 2 || _this.RG().length == 6)
                _this.RG(_this.RG() + ".");
            else if (_this.RG().length == 10)
                _this.RG(_this.RG() + "-");
        };
        this.maskCPF = function () {
            if (_this.CPF().length == 3 || _this.CPF().length == 7)
                _this.CPF(_this.CPF() + ".");
            if (_this.CPF().length == 11)
                _this.CPF(_this.CPF() + "-");
        };
        this.maskCelular = function () {
            if (_this.celular().length == 1)
                _this.celular("(" + _this.celular());
            else if (_this.celular().length == 3)
                _this.celular(_this.celular() + ") ");
            else if (_this.celular().length == 10)
                _this.celular(_this.celular() + "-");
        };
        this.maskTelefone = function () {
            if (_this.telefone().length == 1)
                _this.telefone("(" + _this.telefone());
            else if (_this.telefone().length == 3)
                _this.telefone(_this.telefone() + ") ");
            else if (_this.telefone().length == 9)
                _this.telefone(_this.telefone() + "-");
        };
    }
    return Curriculum;
}());
var LCv = new Curriculum();
//# sourceMappingURL=Curriculum.js.map