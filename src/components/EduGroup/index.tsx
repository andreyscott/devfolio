import {motion} from 'framer-motion'
import { EduProps } from "@/types/global";


const EduGroup: React.FC<EduProps> = ({ edu }) => {

  return (
    <motion.main
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
     className="edu-group mb-4" >
      <div className="overflow-hidden">
        <h3
          className={` text-fun-pink  text-lg font-medium`}
        >
          {edu.title}
        </h3>
      </div>
      <div className="overflow-hidden">
        <span className={`edu-info text-slate-200 italic`}>
          {edu.subTitle}
        </span>
      </div>
      <ul
        role="list"
        className=" marker:text-marrsgreen dark:marker:text-carrigreen list-disc pl-6 space-y-1 mt-1"
      >
        {edu.list.map((li) => (
          <li key={li} className={`edu-list`}>
            {li}
          </li>
        ))}
      </ul>
   </motion.main>
  );
};

export default EduGroup;