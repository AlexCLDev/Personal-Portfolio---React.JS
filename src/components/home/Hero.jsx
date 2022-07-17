import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <a href="https://drive.google.com/file/d/1nnQ9mfu1AsuPFXYqOYNTT_3Qx_n84mZI/view?usp=sharing" target="_blank"><button className='primaryBtn' data-aos='fade-up-right'>
              Download CV
            </button></a>
          </div>
        ))}
      </section>
    </>
  )
}
