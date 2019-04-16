export interface LayoutPreference {
  default: boolean; // true if a default config
  name: string;
  content: any; // GoldenLayout config for this layout
}
