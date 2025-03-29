import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModel } from './models/ProdutoModel';
import { ProdutosController } from './produtos/produtos.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'AULA4',
      entities: [ProdutoModel],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProdutoModel])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService],
})
export class AppModule {}
