import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class InfoContact {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
