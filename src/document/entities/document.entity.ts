import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from 'src/country/entities/country.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from '../../user/entities/user.entity';

@Entity()
@ObjectType()
export class Document {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number; 

  @Column({ type: 'varchar', length: 20 })
  @Field()
  document: string;
  
  @Column({ type: 'varchar', length: 60 })
  @Field()   
  placeExpedition: string;

  @CreateDateColumn({
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP'
  })   
  @Field(type => String)    
  dateExpedition: Date;

  @ManyToOne(() => TypeDocument, (typeDocument) => typeDocument.document )
  @JoinColumn({name: 'typeDocumentId'})
  @Field(() => TypeDocument,{ nullable: true })   
  typeDocument: TypeDocument;

  @Column({ type: 'int', name: 'typeDocumentId' })
  typeDocumentId: number;

  @OneToOne(() => User)
  @JoinColumn({name: 'userId'})
  @Field(() => User,{ nullable: true })   
  user: User;

  @Column({ type: 'int', name: 'userId' })
  userId: number;

}
