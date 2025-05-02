import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginTestPlugin } from './definitions';

export class CapacitorPluginTestWeb extends WebPlugin implements CapacitorPluginTestPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
