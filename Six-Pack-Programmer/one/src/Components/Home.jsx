import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
export const Home = () => {
  return (

    <>
      <div className='home' id='home'>
          <main>
              <h1>Maulik</h1>
              <p>solution to all your problems.</p>
          </main>
      </div>
      
      <div className="home2">
          <img src={vg} alt="Graphics" />

          <div>
              <p>We are your one and only solution to the problem you face daily. We are leading company whose aim is to incrase the problem solving in agency
              </p>
          </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus ipsum maxime soluta placeat odit nostrum officia et quia sequi? Modi incidunt eius itaque perferendis rem voluptatibus aliquid dicta consequatur hic omnis inventore quaerat labore earum laudantium laborum tempora cupiditate culpa odio consequuntur, vitae, voluptatum magnam quo nisi. Natus, maxime.</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div className='home4div'>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>

    
    
    </>
  )
}
