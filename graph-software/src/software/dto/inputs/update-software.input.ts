import { IsUUID } from 'class-validator';
import { CreateSoftwareInput } from './create-software.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSoftwareInput extends PartialType(CreateSoftwareInput) {

  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
