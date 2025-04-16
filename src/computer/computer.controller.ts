import { Controller, Get } from '@nestjs/common';

// for dependency injection
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(
        private cpuService: CpuService,
        private diskService: DiskService
    ) {}


    // Route Handlers
    @Get()
    run() {
        return [
            this.cpuService.compute(1, 2),
            this.diskService.getData()
        ]
    }



} 
