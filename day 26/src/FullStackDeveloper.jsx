import React from 'react'

function FullStackDeveloper() {

  const height = {
    height : '240px',
  }

  return (
    <div>
    <div className='card-deck row row-cols-1 row-cols-md-3' style={{padding : '0px 30px', }}>

    <div className='card'>
    <img src="src/assets/front-end-development.jpg" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Front End Development</h5>
            <p class="card-text">Front-end development aims to meet user requirements and deliver a positive user experience.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="src/assets/backend-development.png" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Back End Development</h5>
            <p class="card-text">Back-end development means working on server-side software, which focuses on everything you can't see on a website. </p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
    <div className='card'>
    <img src="src/assets/database.png" class="card-img-top" style={height} alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Database Management</h5>
            <p class="card-text">Database management is the process of organizing and storing data in a structured way. A database management system (DBMS) is a software tool that helps users create, modify, and query a database.</p>
            <a href='#' class="card-link">Read More</a>
          </div>
    </div>
    
          </div>
          </div>
  )
}

export default FullStackDeveloper