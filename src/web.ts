import { WebPlugin } from '@capacitor/core';

import type { CapacitorPluginTestPlugin } from './definitions';

declare global {
  interface Window {
    NativeBridge?: {
      getUserInfo: () => string;
    };
  }
}


export class CapacitorPluginTestWeb extends WebPlugin implements CapacitorPluginTestPlugin {
  async getUserInfo(): Promise<{ name: string; role: string, note: string }> {
    if (typeof window.NativeBridge?.getUserInfo === 'function') {
      const json = window.NativeBridge?.getUserInfo();
      try {
        return JSON.parse(json);
      } catch {
        throw new Error('Invalid JSON returned from NativeBridge');
      }
    } else {
      throw new Error('NativeBridge.getUserInfo is not available');
    }
  }
}
