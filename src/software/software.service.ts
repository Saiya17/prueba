import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSoftwareInput, UpdateSoftwareInput } from './dto/inputs';
import { Software } from './entities/software.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SoftwareService {

  constructor( 
    @InjectRepository(Software)
    private readonly softwareRepository:Repository<Software> ){}

  async create(createSoftwareInput: CreateSoftwareInput): Promise<Software>  {
    const newSoftware= this.softwareRepository.create(createSoftwareInput);
    return await this.softwareRepository.save(newSoftware); 
  }

  async findAll(): Promise<Software[]> {
    return this.softwareRepository.find();
  }

  async findOne(id: string): Promise<Software> {
     const software= await  this.softwareRepository.findOneBy({id});
     if (!software) throw new NotFoundException(`Not found`)
     return software;
  }

  async update(id: string, updateSoftwareInput: UpdateSoftwareInput): Promise<Software> {
    
    const software = await this.softwareRepository.preload(updateSoftwareInput);
    if (!software) throw new NotFoundException(`Not found`)
    return this.softwareRepository.save(software);

  }

  async remove(id: string): Promise<Software> {

    const software= await  this.findOne(id);

    await this.softwareRepository.update({id:id},{estado:true  });

    // await this.softwareRepository.remove(software);

    return {...software, id};

  }
}
