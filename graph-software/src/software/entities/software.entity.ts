import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'software'})
@ObjectType()
export class Software {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>String)
    idioma:string;

    @Column()
    @Field(()=>String)
    requerimientos:string;
 
    @Column()
    @Field(()=>Boolean)
    estado:boolean;

}
