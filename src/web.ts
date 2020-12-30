import { WebPlugin } from '@capacitor/core';
import { RouteMeInPlugin } from './definitions';

export class RouteMeInWeb extends WebPlugin implements RouteMeInPlugin {
  constructor() {
    super({
      name: 'RouteMeIn',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const RouteMeIn = new RouteMeInWeb();

export { RouteMeIn };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(RouteMeIn);
