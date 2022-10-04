import { ObjectType, Field, Int } from '@nestjs/graphql';
import { InfoContact } from 'src/info-contact/entities/info-contact.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
@ObjectType()
export class Country {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number; 

  @Column({ type: 'varchar', length: 4 })
  @Field()
  countryCode: string;
  
  @Column({ type: 'varchar', length: 100 })
  @Field()   
  countryName: string;

  @OneToMany(() => InfoContact, (infoContact) => infoContact.country )  
  infoContact: InfoContact[];

}
