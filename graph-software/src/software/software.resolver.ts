import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { SoftwareService } from './software.service';
import { Software } from './entities/software.entity';
import { UpdateSoftwareInput, CreateSoftwareInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Software)
export class SoftwareResolver {
  constructor(private readonly softwareService: SoftwareService) {}

  @Mutation(() => Software)
  async createSoftware(@Args('createSoftwareInput') createSoftwareInput: CreateSoftwareInput)
  :Promise<Software> {
    return this.softwareService.create(createSoftwareInput);
  }

  @Query(() => [Software], { name: 'software' })
  async findAll():Promise<Software[]> {
    return this.softwareService.findAll();
  }

  @Query(() => Software, { name: 'software' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Software> {
    return this.softwareService.findOne(id);
  }

  @Mutation(() => Software)
  updateSoftware(@Args('updateSoftwareInput') updateSoftwareInput: UpdateSoftwareInput): Promise<Software> {
    return this.softwareService.update(updateSoftwareInput.id, updateSoftwareInput);
  }

  @Mutation(() => Software)
  removeEstudiante(@Args('id', { type: () => ID }) id: string): Promise<Software> {
    return this.softwareService.remove(id);
  }
}
