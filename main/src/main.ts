import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar o diretório de arquivos estáticos
  app.useStaticAssets('public', { prefix: '/static' });

  await app.listen(3000);
}

bootstrap();