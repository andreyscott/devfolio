export type RouteTypes = {
    id: number
    label: string,
    navUrl: string
  }

  export type Project = {
    id: number;
    title: string;
    desc: string;
    img: string;
    link?: string;
    github?: string;
    tags: string[];
  };
  