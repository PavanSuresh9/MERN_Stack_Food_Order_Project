import React from 'react'

export default function Restaurant() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
      <div className="card p-3 rounded">
        <img src="https://b.zmtcdn.com/data/pictures/chains/6/2600026/bd8dfea96f558f70726e9adeea69ad59.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" alt="domino's" />
        <div className="card-body d-flex flex-column">
            {/* Heading and address */}
            <h5 className="card-tittle">Domino's Pizza</h5>
            <p className="rest_address">Naudra Brigde, Jabalpur, Madhya Pradesh</p>
            {/* reviews and rating */}
            <div className="rating-outer">
                <div className="rating-inner">
                    {/* star review code will come here */}    
                </div>
                <span id="no_of_reviews">140 reviews</span>
            </div>
        </div>
      </div>
    </div>
  )
}
