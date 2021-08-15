import {Field, InputType, Int} from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

//tells the graphql that this is going to be the input of a mutation 
@InputType()
export class NewCarInput{
    @Field()
    name: string;
   
    @Field((type) => Int)
    @Max(1000)
    @Min(10,{message: "Daily price cant be that low!"})
    dailyPrice: number;
    
    @Field((type) => Int)
    @Max(20000)
    @Min(1500)
    monthlyPrice: number;
    
    @Field()
    mileage: string;
    
    @Field()
    gas: string;
    
    @Field()
    gearType: string;
    
    @Field()
    thumbnailUrl: string;
}