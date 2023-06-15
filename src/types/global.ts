
export type RouteTypes = {
    id: number
    label: string,
    navUrl: string
  }

  export type EduProps = {
    edu: {
      id: number;
      title: string;
      subTitle: string;
      list: string[];
    };
  };

  export type Project = {
    id: number;
    title: string;
    desc: string;
    img: string;
    link?: string;
    github?: string;
    tags: string[];
  };
  
  export interface ICertificateCard {
    name: string;
    image: string;
    url: string;
    alt: string;
  }