import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from "class-validator";


@InputType()
export class CreateCountryInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(4)
  countryCode: string; 
  
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  countryName: string;

}
