export interface IIoCContainer {
    value: any;
    key: string;
}

export class IoCContainer {
    private providersStore: { [key: string]: any } = {};

    resolveProvider(key: string) {
        console.log('this.providersStore', this.providersStore)
        const resolvedProvider = this.providersStore[key];
        if (resolvedProvider) {
            return resolvedProvider;
        } else {
            throw new Error(`No provider found for ${key}!`);
        }
    }

    setProvider({key, value: newValue}: IIoCContainer): void {
        this.providersStore[key] = newValue;
    }
}

export const container = new IoCContainer();
