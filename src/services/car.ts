import { Inject, Injectable, container, serviceType } from '../shared';
import { InsurerService } from './insurer';

@Injectable(serviceType.car)
export class CarService {
    insurer: string;

    @Inject(serviceType.insurer) private insurerService: InsurerService;

    constructor() {
        this.insurer = this.insurerService.getCurrentInsurer();
    }
}

container.resolveProvider(serviceType.car);