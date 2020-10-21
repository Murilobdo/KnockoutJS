class Site {

    constructor() { }

    Url = (AAction, AController) => `https://${$("#root").val()}/${AController}/${AAction}`;

}

const site = new Site();