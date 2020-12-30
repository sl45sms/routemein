declare module '@capacitor/core' {
  interface PluginRegistry {
    RouteMeIn: RouteMeInPlugin;
  }
}

export interface RouteMeInPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
