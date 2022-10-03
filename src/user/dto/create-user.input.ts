import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    
    @Field()
    lastName: string; 
    
    @Field()
    name: string;
    
    @Field()
    isMilitar: boolean;
    
    @Field()
    timeCreate: string;
    
    @Field()
    isTemporal: boolean;
    
    @Field()
    userName: string;
    
    @Field()
    password: string;
    
    @Field()
    email: string;
    
    @Field()
    emailVerified: boolean;
    
    @Field()
    verificationToken: string;

}