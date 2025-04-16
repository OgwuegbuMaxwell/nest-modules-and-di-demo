import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],

  // for dependency injection
  // exporting the PowerService means that, we want to explicitly make
  // PowerService available to other modules in our project
  exports: [PowerService]
})
export class PowerModule {}
