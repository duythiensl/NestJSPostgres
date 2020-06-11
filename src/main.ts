import { Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { loadEnvironmentVariables } from './env.loader';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await loadEnvironmentVariables();
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.getConfig('settings')['post'];
  await app.listen(port||3000);

  // const dbInfo = configService.getConfig<string>('database')['Postgresql'];
  Logger.log(`Application is running on: ${await app.getUrl()}`,'Application')
}

bootstrap();
