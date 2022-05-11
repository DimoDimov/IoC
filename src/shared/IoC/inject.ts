import { container } from './container';

export const Inject = (key: string) =>
    (target: any, key: string) => 
        Object.defineProperty(target, key, {
            get: () => container.resolveProvider(key),
            enumerable: true,
            configurable: true
        });
