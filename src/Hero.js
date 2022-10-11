import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return (
    <>
      <section className="hero" onMouseOut={closeSubmenu}>
        <div className="hero-center">
          <article className="hero-info">
            <h1>payment infrastructure for internet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              minima, quidem dicta vitae molestiae maxime exercitationem et
              deleniti quas eius!
            </p>
            <button className="btn">start now</button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-images" alt='image' />
          </article>
        </div>
      </section>
    </>
  );
}

export default Hero
