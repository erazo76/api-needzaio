import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from '../../country/entities/country.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from 'src/user/entities/user.entity';

@Entity()
@ObjectType()
export class InfoContact {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number; 

  @Column({ type: 'varchar', length: 60 })
  @Field()
  address: string;
  
  @Column({ type: 'varchar', length: 50 })
  @Field()   
  city: string;

  @Column({ type: 'varchar', length: 20 })
  @Field()   
  phone: string;

  @Column({ type: 'varchar', length: 20 })
  @Field()   
  celPhone: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()   
  emergencyName: string;

  @Column({ type: 'varchar', length: 20 })
  @Field()   
  emergencyPhone: string;

  @ManyToOne(() => Country, (country) => country.infoContact )
  @JoinColumn({name: 'countryId'})
  @Field(() => Country,{ nullable: true })   
  country: Country;

  @Column({ type: 'int', name: 'countryId' })
  countryId: number;

  @OneToOne(() => User)
  @JoinColumn({name: 'userId'})
  @Field(() => User,{ nullable: true })   
  user: User;

  @Column({ type: 'int', name: 'userId' })
  userId: number;

}
