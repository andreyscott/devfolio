import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import { Project } from "@/types/global";
import {FiLink} from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
// import { motion } from 'framer-motion'



function ProjectCard({ project }: { project: Project }) {

  return (
    <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"

      className="max-w-sm flex flex-col projects-center md:projects-start mx-2 md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <Image
          className="w-full rounded-md"
          src={project.img}
            alt={project.title}
            width={550}
            height={600}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2 flex">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
              <FiLink className='icon' />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub className='icon' />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;