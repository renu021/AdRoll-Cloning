import React from 'react'

const Hero = () => {
  return (
    <div className="hero1">
        <div className="left-hero">
            <h1 className="hero-heading">Smaller budgets need</h1>
            <h1 className="hero-heading">smarter dollars</h1>
            <p>Create, manage, and analyze your display, Facebook, Instagram,</p>
            <p>Pinterest, TikTok, and email campaigns from a single platform. AdRoll</p>
            <p>helps marketers do more with less</p>

            <div>
                <button className="btn btn1-color hero-btn">GET STARTED</button>
                <button className="btn btn2-color hero-btn">GET IN TOUCH</button>
            </div>
        </div>

        <div className="hero-img">
           <img src="https://www.adroll.com/assets/img/features/img-edit_optimize.png?auto=webp&format=png&width=460" alt="" />
        </div>
    </div>
  )
}

export default Hero