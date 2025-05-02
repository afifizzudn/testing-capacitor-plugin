import { registerPlugin } from '@capacitor/core';

import type { CapacitorPluginTestPlugin } from './definitions';

const CapacitorPluginTest = registerPlugin<CapacitorPluginTestPlugin>('CapacitorPluginTest', {
  web: () => import('./web').then((m) => new m.CapacitorPluginTestWeb()),
});

export * from './definitions';
export { CapacitorPluginTest };
