import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TypeDocumentService } from './type-document.service';
import { TypeDocument } from './entities/type-document.entity';
import { CreateTypeDocumentInput } from './dto/create-type-document.input';


@Resolver(of => TypeDocument)
export class TypeDocumentResolver {
  constructor(private readonly typeDocumentService: TypeDocumentService) {}

  @Mutation(returns => TypeDocument)
  createTypeDocument(@Args('createTypeDocumentInput') createTypeDocumentInput: CreateTypeDocumentInput) {
    return this.typeDocumentService.createTypeDocument(createTypeDocumentInput);
  }

  @Query(returns => [TypeDocument])
  typeDocuments() {
    return this.typeDocumentService.findAll();
  }

}
