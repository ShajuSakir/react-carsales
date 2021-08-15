import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';

//this is the root module that everything is liked to
@Module({
  imports:[ConfigModule.forRoot(), 
    DatabaseModule, 
    GraphQLModule.forRoot({
    playground: true ,
    debug: true,
    autoSchemaFile:true,
  }),
  ComponentsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}