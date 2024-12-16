import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { CompartimentoModule } from './compartimento/compartimento.module';
import { LocalModule } from './local/local.module';
import { ProdutoModule } from './produto/produto.module';
import { SubcompartimentoModule } from './subcompartimento/subcompartimento.module';
import { TipoProdutoModule } from './tipo-produto/tipo-produto.module';
import { ProdutoAlocadoModule } from './produto-alocado/produto-alocado.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      schema: process.env.DATABASE_SCHEMA,
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      useUTC: true,
    }),
    HttpModule,
    CompartimentoModule,
    LocalModule,
    ProdutoModule,
    SubcompartimentoModule,
    TipoProdutoModule,
    ProdutoAlocadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
