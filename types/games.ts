export default interface Game {
  name: string;
  tools: string[];
  description: string;
  abouts?: string[];
  roles?: string[];
  screenshots?: number;
  videos?: number;
  directory: string;
}
