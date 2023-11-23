import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
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
        <footer id="instagram">fale conosco no instagram <strong>@space_cream</strong></footer>
    </body>
    
    </html>
`
  }
}
