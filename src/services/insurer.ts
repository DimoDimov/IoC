import { Injectable, serviceType } from '../shared';

@Injectable(serviceType.insurer)
export class InsurerService {
    getCurrentInsurer(): string {
        const insurersList = [
            'Admiral',
            'Aviva',
            'Direct Line'
        ]
        const getRandomInsurerIndex = () => {
            return Math.floor(Math.random()*insurersList.length)
        }

        return insurersList[getRandomInsurerIndex()];
    }
}