import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';

// for dependency injection
import { PowerModule } from '../power/power.module';

@Module({
  // for dependency injection
  // connecting power module and cpu module
  // the cpu module and all different services inside of it now have access
  // to all of the exported services from the power module
  // now we can make use of power service inside cpu service
  imports: [PowerModule],

  providers: [CpuService],

  // for dependency injection
  // we want to use CPU Service somewhere else inside our project
  // When you define a service in a module, it is authomatically private
  // Unless you explicitly export it, before you can use it somewhere else
  exports: [CpuService]


})
export class CpuModule {}
