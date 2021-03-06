class Curriculum {

    //@ts-ignore
    name: string = ko.observable();
    //@ts-ignore
    RG: any = ko.observable();
    //@ts-ignore
    CPF: any = ko.observable();
    //@ts-ignore
    email: string = ko.observable();
    //@ts-ignore
    celular: any = ko.observable();
    //@ts-ignore
    telefone: any = ko.observable();
    //@ts-ignore
    cursos: any = ko.observable();
    //@ts-ignore
    listCursos:any = ko.observableArray();
    //@ts-ignore
    cursos: any = ko.observable();
    //@ts-ignore
    listCursos:any = ko.observableArray();
    //@ts-ignore
    empresas: any = ko.observable();
    //@ts-ignore
    listEmpresas: any = ko.observableArray();

    Init = () => { 

        this.cursos();
        this.empresas();

        //@ts-ignore
        ko.computed(() => {
            if(this.cursos() != undefined) {
                
                var cursos = this.cursos().split(";")
                cursos = cursos.slice(0, cursos.length - 1)
                
                this.listCursos(cursos);
            }
            if(this.empresas() != undefined) {
                
                var empresa = this.empresas().split(";")
                empresa = empresa.slice(0, empresa.length - 1)
                this.listEmpresas(empresa);
            }
        });
    }

    maskRG = () => {
        if(this.RG().length == 2 || this.RG().length == 6 )
            this.RG(this.RG() + ".")
        else if(this.RG().length == 10)
            this.RG(this.RG() + "-")
    }

    maskCPF = () => {
        if(this.CPF().length == 3 || this.CPF().length == 7)
            this.CPF(this.CPF() + ".")
        if(this.CPF().length == 11)
            this.CPF(this.CPF() + "-")
    }

    maskCelular = () => {
        if(this.celular().length == 1)
            this.celular("("+this.celular())
        else if(this.celular().length == 3)
            this.celular(this.celular() + ") ")
        else if(this.celular().length == 10)
            this.celular(this.celular() + "-")
    }

    maskTelefone = () => {
        if(this.telefone().length == 1)
            this.telefone("("+this.telefone())
        else if(this.telefone().length == 3)
            this.telefone(this.telefone() + ") ")
        else if(this.telefone().length == 9)
            this.telefone(this.telefone() + "-")
    }
}

const LCv = new Curriculum();
