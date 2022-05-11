import { container, serviceType } from '../shared';
import { CarService } from "./car";
import { InsurerService } from './insurer';

describe('Car Service', () => {
    let car: CarService, anotherCar: CarService, insurerServiceMock: InsurerService;

    beforeEach(() => {
        insurerServiceMock = { getCurrentInsurer: jest.fn() };
        (insurerServiceMock.getCurrentInsurer as jest.Mock).mockReturnValue('Aviva');

        container.setProvider({
            key: serviceType.insurer,
            value: insurerServiceMock
        });

        car = new CarService();
        anotherCar = new CarService();
    });

    it('should initialize current insurer', () => {
        expect(insurerServiceMock.getCurrentInsurer).toHaveBeenCalledWith();
        expect(insurerServiceMock.getCurrentInsurer).toHaveBeenCalledTimes(2);
    });

    it('should get current insurer', () => {
        expect(car.insurer).toBe('Aviva');
        expect(anotherCar.insurer).toBe('Aviva');        
    });
});