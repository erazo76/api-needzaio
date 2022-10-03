import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

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

}
