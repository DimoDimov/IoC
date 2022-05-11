import { container } from './container';

export const Injectable = (key: string): Function =>
    (target: { new(): any }): void => {
        container.setProvider({ key, value: new target() })
    }