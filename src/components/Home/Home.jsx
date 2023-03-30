import LogoTitle from '../../assets/images/R-title-logo.png'
import homeImg from '../../assets/images/Home-img.jpg'
import Loader from 'react-loaders'
import './Home.scss'
// import Logo from './Logo/Logo'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', 'j', 'e', 'e', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeout

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          <span>&lt;body&gt;</span>
        </span>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />{' '}
          </h1>
          <h2>Full Stack Developer / Web Designer</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            CONTACT ME
          </Link>
        </div>
        <div className="homeImg">
          <img src={homeImg} alt="" />
        </div>

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" className='loader-background'/>
    </>
  )
}

export default Home
