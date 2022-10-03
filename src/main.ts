import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try { 
    const PORT = process.env.PORT || 3000; 
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    const server = await app.listen(PORT, async () => {
      Logger.log(`Needzaio Api Server is running in port ${PORT}`);     
    });
    server.setTimeout(0);
  } catch (error) {
    Logger.error('Error initializing Needzaio Api', error);
  }    
}
bootstrap();
