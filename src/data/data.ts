import { certificateimg } from "@/assets/Certificate/certificate";

import { RouteTypes } from "@/types/global"
import { Project } from "@/types/global";

export const MenuData:RouteTypes[] =  [
    { id: 1, label: 'about', navUrl: '/about' },
    { id: 2, label: 'Our Projects', navUrl: '/projects' },
    {id : 3, label: 'Experience', navUrl: '/experience'},
    { id: 5, label: 'Contact', navUrl: '/contact' }
  ]


const projects: Project[] = [
{
  id: 0,
  title: "Trigan.org",
  desc: "Part of the FrontEnd Team in creating a fully functional web3 website that seek to provide a platform for the community to interact with the Trigan DAO. and solves read world problems.",
  img: 'https://andreyscott.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTrigan.bb8fd2fb.webp&w=2048&q=100',
  link: "https://trigan.org/",
  github: "https://github.com/andreyscott",
  tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase", "Redux", "next-pwa"],
},
    {
      id: 1,
        title: "Sam-Standard-Furniture",
        desc: "Created and deployed a fully funtional e-commerce website using React, Redux, Node, Express, and MongoDB. The website is fully responsive and has a fully functional shopping cart, user authentication, and payment processing.",
        img: 'https://andreyscott.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsam.634eee66.webp&w=828&q=100',
        link: "https://sam-standard.vercel.app/",
        github: "https://github.com/andreyscott/ferns-next",
        tags: ["React", "TailwindCss", "TypeScript", "Vercel", "FrameMotion", "Redux", "Node", "Stripe"],

    },
    {
      id: 3,
        title: "Velion",
        desc: "Was Contacted by a client to create a website for their business. form a Figma design. The website was created using React, TailwindCss, and Vercel. The website is fully responsive and has a fully functional contact form.",
        img: 'https://andreyscott.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvelion.07b43db6.webp&w=2048&q=100',
        link: "https://wondrous-kataifi-1bdd6e.netlify.app/",
        github: "https://www.github.com/andreyscott",
        tags: ["React", "TailwindCss", "JavaScript", "SwiperJs", "Netlify"],

    },
];

export const Certifications = [
  {
    name: "Google Digital Skills for Africa",
    img: certificateimg.c1,
    url: "https://learndigital.withgoogle.com/digitalskills/certificate/verify/6ZLJZQZL",
  },
  {
    name: "Advanced JavaScript by SoloLearn",
    img: certificateimg.c2,
    url: "https://www.sololearn.com/Certificate/1024-20263289/pdf/",
    },
  {
    name: "Responsive Web Design",
    img: certificateimg.c3,
    url: "https://www.freecodecamp.org/certification/andreyscott/responsive-web-design",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    img: certificateimg.c4,
    url: "https://www.freecodecamp.org/certification/andreyscott/javascript-algorithms-and-data-structures",
  },
  {
    name: "Front End Development(React)",
    img: certificateimg.c5,
    url: "https://www.freecodecamp.org/certification/andreyscott/front-end-libraries",
  },

];


export default projects