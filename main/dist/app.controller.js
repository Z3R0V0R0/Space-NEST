"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return `<!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Projeto 4 - Sorveteria</title>
        <link rel="stylesheet" href="static/css/estilo.css">
    </head>
    
    <body>
        <header>
            <hr id="bk1">
            <img src="static/logo1.svg" alt="logo" id="ic-logo">
            <hr id="bk2">
            <h1>SPACE CREAM</h1>
        </header>
        <div>
            <p id="desktop-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.</p>
    
            <p id="mobile-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, </p>
    
            <img src="static/sorvete1.svg" alt="sorvete" id="type1">
            <span>Paletas</span>
    
            <img src="static/sorvete2.svg" alt="sorvete" id="type2">
            <span>Shakes</span>
    
            <img src="static/sorvete3.svg" alt="sorvete" id="type3">
            <span>Massas</span>
    
            <img src="static/sorvete4.svg" alt="sorvete" id="type4">
            <span>Picolés</span>
    
            <img src="static/sorvete1.svg" alt="sorvete" id="type1_copy">
            <span>Paletas</span>
    
            <img src="static/sorvete4.svg" alt="sorvete" id="type4_copy">
            <span>Picolés</span>
        </div>
        <footer id="instagram">fale concosco no instagram <strong>@space_cream</strong></footer>
    </body>
    
    </html>
`;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map