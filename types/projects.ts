export interface Project {
  name: string;
  description?: string;
  technologies: string[];
  link: string;
  image: string;
  source?: string;
  features?: string[];
  internal?: boolean;
}
