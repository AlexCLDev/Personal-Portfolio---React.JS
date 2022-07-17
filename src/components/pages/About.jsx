import React from "react"
import { Heading } from "../common/Heading"
import { about, skills } from "../data/dummydata"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a href="https://drive.google.com/file/d/1nnQ9mfu1AsuPFXYqOYNTT_3Qx_n84mZI/view?usp=sharing" target="_blank"><button>Download CV</button></a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
