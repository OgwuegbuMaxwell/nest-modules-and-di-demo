import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    // whenever nest create the instance of the cpu service, it will first
    // make sure it first create an instance of the the power service
    // and provide it to the cpu constructor.
    // Noew we can create some services in cpu service that make use
    //  of power service
    constructor(private powerService: PowerService) {}

    compute(a: number, b: number) {
        console.log('Drawing 10 watts of power from Power Service');
        this.powerService.supplyPower(10);
        return a + b;
    }


}
