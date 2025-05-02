export interface CapacitorPluginTestPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
