import { Module } from "@nestjs/common";
import { Connection, getConnectionOptions } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
        //imports: [TypeOrmModule.forRoot()],
        //to set the connection string
        imports: [TypeOrmModule.forRootAsync({
            useFactory: async () => 
                Object.assign(await getConnectionOptions(process.env.NODE_ENV === 'production'? 'prod' : 'dev',
                ),
            ),            
        })],
        exports: [TypeOrmModule]
    })

export class DatabaseModule{
    //constructor take DI services, connection DI from typeorm
    constructor(connection: Connection){
        if(connection.isConnected)
            console.log("DB connected successfully");
    }
}