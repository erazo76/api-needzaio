import { Field, Int, ObjectType } from "@nestjs/graphql";
import { InfoContact } from "src/info-contact/entities/info-contact.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from "typeorm";
import { Document } from '../../document/entities/document.entity';

@Entity()
@ObjectType()
export class User {

    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;   
    
    @Column({ type: 'varchar', length: 20 })
    @Field()
    lastName: string;
    
    @Column({ type: 'varchar', length: 20 })
    @Field()   
    name: string;
    
    @Column()
    @Field()    
    isMilitar: boolean;
    
    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })   
    @Field(type => String)    
    timeCreate: Date;
    
    @Column()
    @Field()        
    isTemporal: boolean;
    
    @Column({ type: 'varchar', length: 20 })
    @Field()    
    userName: string;
    
    @Column({ type: 'varchar', length: 255 })
    @Field()    
    password: string;    
    
    @Column({ type: 'varchar', length: 100 })
    @Field()    
    email: string;
    
    @Column()
    @Field()      
    emailVerified: boolean;
    
    @Column()
    @Field()     
    verificationToken: string;
    
  /*@OneToOne(() => Document, (document) => document.user )    
    document: Document;*/

    @OneToOne(() => InfoContact, (infoContact) => infoContact.country )  
    infoContact: InfoContact;

}