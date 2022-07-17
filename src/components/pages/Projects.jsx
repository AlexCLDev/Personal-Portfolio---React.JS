import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { portfolio } from '../data/dummydata'
import { Heading } from "../common/Heading"
import { GitHub } from '@mui/icons-material';

export const Projects = () => {

  const params = useParams();

  const [projectState, setProjectState] = useState({});

  useEffect(() => {
    let project = portfolio.filter(project => project.id == params.id)

    setProjectState(project[0])
  }, [])

  return (
    <>
      <article>
        <section className='about'>
          <div className='container flex'>
            <div className='left' data-aos='fade-down-right'>
              <img src={projectState.cover} alt='' />
            </div>
            <div className='right' data-aos='fade-down-left'>
              <Heading title={projectState.title} />
              <p>{projectState.name}</p>
              <h1>Tecnologias utilizadas:</h1>
              <p>{projectState.tech}</p>
              <a href={projectState.url} target="_blank"><button>Visit Site</button></a>
              <a href={projectState.git} target="_blank"><button className='primaryBtn'><GitHub/></button></a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
