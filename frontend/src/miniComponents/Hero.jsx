import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='banner'>
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>Welcome to Volunteer, a platform dedicated to making a difference. Founded by Mohammad Oves, our mission is to bridge the gap between those in need and those willing to help.</p>
        <Link to={"/donate"} className='btn'>Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
