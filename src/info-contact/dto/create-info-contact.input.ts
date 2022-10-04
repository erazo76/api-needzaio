import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInfoContactInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
