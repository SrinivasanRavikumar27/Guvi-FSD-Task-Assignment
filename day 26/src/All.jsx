import React from 'react';
import './index.css';


function All() {

const height = {
  height : '240px',
}

  return (
    <div>

      <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

<div className='card' >
<img src="src/assets/full-stack-web-development.jpg" class="card-img-top "  style={height} alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Full Stack Developer</h5>
        <p class="card-text">A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
        <a href='#' class="card-link">Read More</a>
      </div>
</div>

<div className='card'>
<img src="src/assets/dataScience.jpg" class="card-img-top" style={height} alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Data Science</h5>
        <p class="card-text">Data science is a field of study that uses data for various research and reporting purposes to derive insights and meaning from that data.</p>
        <a href='#' class="card-link">Read More</a>
      </div>
</div>

<div className='card'>
<img src="src/assets/cyberSecurity.jpg" class="card-img-top" style={height} alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Cyber Security</h5>
        <p class="card-text">Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
        <a href='#' class="card-link">Read More</a>
      </div>
</div>

      </div>
      
    </div>
  )
}

export default All