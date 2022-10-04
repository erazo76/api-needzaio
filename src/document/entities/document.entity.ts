import { ObjectType, Field, Int } from '@nestjs/graphql';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
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

 /* @OneToOne(()=>User, (user) => user.document, {nullable:true})
  @JoinColumn()
  @Field(type => User, {nullable:true})   
  user: User;*/

  /*@OneToOne(()=>TypeDocument, (tipeDocument) => tipeDocument.document, {nullable:true})
  @JoinColumn()
  @Field(type => TypeDocument, {nullable:true})   
  typeDocument: TypeDocument;*/

}
