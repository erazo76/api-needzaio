import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateDocumentInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  document: string; 
  
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  placeExpedition: string;

  @Field(type =>String)
  @IsNotEmpty()
  dateExpedition: Date;

}
