import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn } from "typeorm";

@Entity()
@Unique(['email'])
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;   
    
    @Column()
    @Field()
    lastName: string;
    
    @Column()
    @Field()   
    name: string;
    
    @Column()
    @Field()    
    isMilitar: boolean;
    
    @Column()   
    @Field()    
    timeCreate: string;
    
    @Column()
    @Field()        
    isTemporal: boolean;
    
    @Column()
    @Field()    
    userName: string;
    
    @Column()
    @Field()    
    password: string;    
    
    @Column()
    @Field()    
    email: string;
    
    @Column()
    @Field()      
    emailVerified: boolean;
    
    @Column()
    @Field()     
    verificationToken: string;

}