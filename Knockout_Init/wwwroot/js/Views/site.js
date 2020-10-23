class Site {
    constructor() {
        this.Url = (AAction, AController) => `https://${$("#root").val()}/${AController}/${AAction}`;
    }
}
const site = new Site();
//# sourceMappingURL=site.js.map