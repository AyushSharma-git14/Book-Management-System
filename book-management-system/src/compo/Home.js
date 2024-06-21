import React from 'react'

function Home() {
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/1.jpg" class="d-block w-100" height={500} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/2.jpg" class="d-block w-100" height={500} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/3.jpg" class="d-block w-100" height={500} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<h1 align='center'> Here are our few books</h1>
<div className='row'>
  <div className='col-sm-4 col-md-4 col-lg-4'>
  <img src="images/pngegg.png" alt="..." width={500} height={500}/>
  <p align='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore dolorum quas magni corrupti, rerum aut veniam veritatis neque dignissimos eaque ratione officiis animi eum modi! Perspiciatis aliquam qui omnis.
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore dolorum quas magni corrupti, rerum aut veniam veritatis neque dignissimos eaque ratione officiis animi eum modi! Perspiciatis aliquam qui omnis</p>
  </div>
</div>


    </>
  )
}

export default Home
