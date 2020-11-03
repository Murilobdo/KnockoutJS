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
    
    Init = () => { }

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
