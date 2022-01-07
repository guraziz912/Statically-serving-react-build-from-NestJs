import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configurations';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { DummyDataModule } from './dummy_data/dummy-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/dist/build'),
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<SequelizeModuleOptions> => {
        return {
          ...configService.get<SequelizeModuleOptions>('database'),
          synchronize: true,
          autoLoadModels: true,
        };
      },
      inject: [ConfigService],
    }),
    DummyDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
