import { Certifications } from "@/data/data";
import React from 'react'
import { CertificationCard } from '../CertificationCard'

const Certificate = () => {
  return (
    <section className="bg-banner1 bg-cover bg-no-repeat py-12 w-full h-full">
        <div className="flex flex-row flex-wrap items-center justify-center pt-24 h-fit mb-8 mt-8 ">
        {Certifications.map((certificate, index) => (
          <CertificationCard
            name={certificate.name}
            img={certificate.img}
            url={certificate.url}
            key={index}
          />
     

        ))}
      </div>
    </section>
  )
}

export default Certificate