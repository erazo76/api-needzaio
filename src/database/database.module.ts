import { Global, Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Global()
@Module({
    imports:[
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: ':memory:',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    ],
    exports:[TypeOrmModule],
})
export class DatabaseModule {}
