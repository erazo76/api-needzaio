import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

@InputType()
export class CreateDocumentInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @Matches(/^((\d{7})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/, {message: 'Invalid document'})
  document: string; 
  
  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  placeExpedition: string;

  @Field(type =>String)
  @IsNotEmpty()
  @Matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
  dateExpedition: Date;

  @Field(() => Int, {nullable: false})
  typeDocumentId: number;

  @Field(() => Int, {nullable: false})
  userId: number;

}
