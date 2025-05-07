export interface CapacitorPluginTestPlugin {
  getUserInfo(): Promise<{ name: string; role: string, note: string }>;
}
