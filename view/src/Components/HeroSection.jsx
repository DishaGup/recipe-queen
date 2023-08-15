import React from 'react'

const HeroSection = () => {
  return (
   
    <section className="section hero has-bg-image" aria-label="home"
      style={{backgroundImage: "url(/hero-bg.png)"}}>
      <div className="container">

        <div className="hero-content" >
          <h1 className="h1 hero-title">The Best Restaurants In Your Home</h1>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          <a href="#" className="btn btn-secondary has-after">Order Now</a>
        </div>

     <figure className="hero-banner"> 

        <div className="home-right">

<img src="/food1.png" alt="food image" className="food-img food-1" width="200" loading="lazy"/>
<img src="/food2.png" alt="food image" className="food-img food-2" width="200" loading="lazy"/>
<img src="/food3.png" alt="food image" className="food-img food-3" width="200" loading="lazy"/>

<img src="/dialog-1.svg" alt="dialog" className="dialog dialog-1" width="230"/>
<img src="/dialog-2.svg" alt="dialog" className="dialog dialog-2" width="230"/>

<img src="/circle.svg" alt="circle shape" className="shape shape-1" width="25"/>
<img src="/circle.svg" alt="circle shape" className="shape shape-2" width="15"/>
<img src="/circle.svg" alt="circle shape" className="shape shape-3" width="30"/>
<img src="/ring.svg" alt="ring shape" className="shape shape-4" width="60"/>
<img src="/ring.svg" alt="ring shape" className="shape shape-5" width="40"/>

</div>

        </figure>

      </div>
    </section>



  )
}

export default HeroSection