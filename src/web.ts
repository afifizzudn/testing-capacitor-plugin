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
  async getUserInfo(): Promise<{ name: string; role: string; note: string }> {
    if (typeof window !== 'undefined' && window.NativeBridge && typeof window.NativeBridge.getUserInfo === 'function') {
      try {
        const json = window.NativeBridge.getUserInfo();
        const parsed = JSON.parse(json);

        if (typeof parsed.name === 'string' && typeof parsed.role === 'string' && typeof parsed.note === 'string') {
          return parsed;
        } else {
          throw new Error('Parsed JSON missing required fields');
        }
      } catch (err) {
        console.error('Error parsing response from NativeBridge.getUserInfo():', err);
        throw new Error('Invalid JSON returned from NativeBridge');
      }
    } else {
      console.warn('NativeBridge.getUserInfo not available on window');
      throw new Error('NativeBridge.getUserInfo is not available OK!');
    }
  }
}
