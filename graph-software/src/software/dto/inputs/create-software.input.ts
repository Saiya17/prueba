import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateSoftwareInput {

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  idioma:string;

  @Field(()=>String )
  @IsNotEmpty()
  requerimientos:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

}
