import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateTypeDocumentInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nameTypeDocument: string; 


}
