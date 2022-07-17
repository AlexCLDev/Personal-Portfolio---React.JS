import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.url} target="_blank"><i data-aos='zoom-in'>{item.icon}</i></a>
          </>
        ))}
        <p data-aos='zoom-in'>&copy;All Right Resceved 2022 | Alexander Coronado</p>
      </footer>
    </>
  )
}

export default Footer
