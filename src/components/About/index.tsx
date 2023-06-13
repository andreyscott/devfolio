/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";

import andrew from "../../../public/images/andrew.jpg";
import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {


  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];


  const eduRef = useRef<HTMLDivElement>(null);

  return (
    <div id="about"
     className="bg-banner bg-cover bg-no-repeat w-screen py-12 h-fit  relative">
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className='w-full h-fit flex flex-col items-center justify-center'>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color="#1a1a1a"
              strokeWidth={2}
              order={1}
              animationDuration={2000}
              iterations={2}
              show={true}              
            >
              <h2 className="section-heading text-white">Who am I?</h2>
            </RoughNotation>
          </div>
          </div>
          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-72">
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>

                <div
                // fade in from left
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
               
                className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl">
                  <Image
                    src={andrew}
                    width={1700}
                    height={1790}
                    priority
                    alt="Andrew Irorere profile picture"
                    className="rounded-md"
                  />
                </div>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>

            <p className="col-start-1 text-white col-end-3 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro">
  
              With over 5 years of experience in web application development working with both frontend and backend. 
              And a Strong knowledge of SEO and Google Analytics.  I'm currently
              working as a frontend developer at a Scottish startup.
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <motion.p
              
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
               className="edu-bg my-4 text-white">A summary education background</motion.p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}

<ul className="skills-list text-white">
            {skills && skills.map((skill, i) => <li key={i} className='lil'>{skill}</li>)}
          </ul>

            </div>
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "B.Sc (Hons) in Computing",
    subTitle: "ZTM Academy | 2019 - 2020",
    list: [
      "Learned how to build a full stack web application",
      "Mastered React.js, Node.js, MongoDB, Express.js, Next.js, Redux, and more",
      "Built a full stack web application from scratch",
    ],
  },
  {
    id: 2,
    title: "HND in Computing & System Development",
    subTitle: "Self-taught | 2018 ~ 2019",
    list: [
      "Mastered the fundamentals of programming and web development",
      "Started Freelancing on Upwork",
      "Learned about SEO and Google Analytics",
    ],
  },
  {
    id: 3,
    title: "BSC in Metallurgical Engineering",
    subTitle: "University of Benin | 2015-2022",
    list: ["Gradurated with a BSC"],
  },
];

export default AboutSection;