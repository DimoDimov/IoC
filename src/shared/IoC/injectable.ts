import { container } from './container';

export const Injectable = (key: string): Function =>
    (providerValue: { new(): any }): void => {
        container.setProvider({ key, value: new providerValue() })
    }