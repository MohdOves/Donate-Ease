import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='banner'>
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, autem esse nemo inventore nulla facilis atque tempore, est voluptatum laborum debitis voluptatem, quisquam et eligendi?</p>
        <Link to={"/donate"} className='btn'>Donate Now</Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  )
}

export default Hero
