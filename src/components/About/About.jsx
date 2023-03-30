import './About.scss'

import React, { useEffect, useState }  from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Textsphere from './Text Sphere/Textsphere'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeout

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      <div className="container about-page page">
        <div className="text-zone">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          <span>&lt;body&gt;</span>
        </span>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste saepe eum totam eius qui distinctio cupiditate odio, iure enim quidem veniam quo tempora, quam sint doloribus officiis iusto error?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iste saepe eum totam eius qui distinctio cupiditate odio, iure enim quidem veniam quo tempora, quam sint doloribus officiis iusto error?</p>
    
        </div>

        <div className="textsphere">
          <Textsphere/>
        </div>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About