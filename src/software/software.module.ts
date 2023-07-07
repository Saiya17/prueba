import { Module } from '@nestjs/common';
import { SoftwareService } from './software.service';
import { SoftwareResolver } from './software.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Software } from './entities/software.entity';

@Module({
  providers: [SoftwareResolver, SoftwareService],
  imports:[
    TypeOrmModule.forFeature([Software])
  ]
})
export class SoftwareModule {}
