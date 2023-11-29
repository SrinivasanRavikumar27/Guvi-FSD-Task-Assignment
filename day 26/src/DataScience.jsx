import React from 'react'

function DataScience() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src="src/assets/full-stack-web-development.jpg" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Full Stack Developer</h5>
            <p class="card-text">A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="src/assets/full-stack-web-development.jpg" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Full Stack Developer</h5>
            <p class="card-text">A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="src/assets/full-stack-web-development.jpg" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Full Stack Developer</h5>
            <p class="card-text">A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default DataScience