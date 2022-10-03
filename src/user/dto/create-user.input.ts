import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateUserInput {
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    lastName: string; 
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    name: string;
    
    @Field()
    @IsBoolean()
    @IsNotEmpty()
    isMilitar: boolean;
    
    @Field(type =>String)
    @IsNotEmpty()
    timeCreate: Date;
    
    @Field()
    @IsBoolean()
    @IsNotEmpty()
    isTemporal: boolean;
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    userName: string;
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    password: string;
    
    @Field()
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    email: string;
    
    @Field()
    @IsBoolean()
    @IsNotEmpty()
    emailVerified: boolean;
    
    @Field()
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    verificationToken: string;

}