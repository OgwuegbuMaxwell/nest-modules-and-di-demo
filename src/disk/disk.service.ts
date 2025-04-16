import { Injectable } from '@nestjs/common';

import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
    // whenever nest create the instance of the disk service, it will first
    // make sure it first create an instance of the the power service
    // and provide it to the disk constructor.
    // Now we can create some services in disk service that make use
    // of power service
    constructor(private powerService: PowerService) {}

    getData() {
        console.log("Drawing 20 watts of power from Power Service");
        this.powerService.supplyPower(20);
        return 'data!';
    }
}
