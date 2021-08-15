import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Car } from "./entities/car";
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from "./dto/new-car.input";

@Injectable()
export class CarsService{
    constructor(@InjectRepository(Car) private carReposotory: Repository<Car>){

    }
    //return a promise waiting for Car as an array
    public async getAllCars(): Promise<Car[]>{
        return await this.carReposotory.find({}).catch((err)=>{
            throw new InternalServerErrorException()
        });
    }

    public async addCar(newCarData: NewCarInput): Promise<Car>{
        const newCar = this.carReposotory.create(newCarData);
        await this.carReposotory.save(newCar).catch((err)=>{
            new InternalServerErrorException();
        });
       
        return newCar;
    }
}