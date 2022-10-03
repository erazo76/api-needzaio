import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocumentService } from './document.service';
import { Document } from './entities/document.entity';
import { CreateDocumentInput } from './dto/create-document.input';

@Resolver(of => Document)
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Mutation(returns => Document)
  createDocument(@Args('createDocumentInput') createDocumentInput: CreateDocumentInput) {
    return this.documentService.createDocument(createDocumentInput);
  }

  @Query(returns => [Document])
  documents() {
    return this.documentService.findAll();
  }

}
