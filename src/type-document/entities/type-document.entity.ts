import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document } from 'src/document/entities/document.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
@ObjectType()
export class TypeDocument {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number; 

  @Column({ type: 'varchar', length: 50 })
  @Field()
  nameTypeDocument: string;

 /* @OneToOne(() => Document, (document) => document.typeDocument )
  @Field(type => Document, { nullable: true }) 
  document: Document;*/

}
