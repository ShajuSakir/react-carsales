import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car';


@Module({
    //forFeature register entities
    imports: [TypeOrmModule.forFeature([Car])],
    providers: [CarsService, CarsResolver],
    exports: [CarsService],
})

export class CarsModule{}