import React, {useEffect} from 'react'
import { CertificationCard } from '../CertificationCard'
import { getPages } from '../../../sanity/sanity-utils'
import { Page } from "@/types/Page";


export default function Certificate ()  {  

  const [projects, setProjects] = React.useState([] as Page[]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getPages();
      setProjects(result);
      console.log(result);
    };
    fetchData();
  }, []);




  return (
    <section className="bg-banner1 bg-cover bg-no-repeat py-12 w-full h-full">
        <div className="flex flex-row flex-wrap items-center justify-center pt-24 h-fit mb-8 mt-8 ">
       
                    {projects.map((project, index) => (

          <CertificationCard
            key={index}
            name={project.title}
            url={project.url}
            image={project.image}
            alt={project.alt}
            
          />
        ))}
      </div>
    </section>
  )
}
