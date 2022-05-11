import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    testRegex: '(.test|.spec)\\.ts$',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
      '.ts': 'ts-jest'
    },
  };
};

