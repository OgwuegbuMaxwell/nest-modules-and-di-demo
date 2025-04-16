import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';

// for dependency Injection
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';

@Module({
  // for dependency Injection
  imports: [CpuModule, DiskModule],
  
  providers: [ComputerService],
  controllers: [ComputerController]
})
export class ComputerModule {}
