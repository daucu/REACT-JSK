import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

//images
import agriculture1 from "./../assets/slider/agriculture csc 1.jpg"
import agriculture from "./../assets/slider/agriculture csc.png"
// import csc from "./../assets/slider/csc 1.jpg"
import health from "./../assets/slider/health csc.jpeg"

function UncontrolledExample() {
  const [loading,setLoading]=React.useState(false)

  return (
    <Carousel>
      {/* {loading ? <>Loading...</>:null} */}
      <Carousel.Item>
        <img
          className="d-block w-100 h-[300px] sm:h-[500px] "
          src={agriculture1}
          alt="First slide"
         
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[300px] sm:h-[500px]"
          src={health}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[300px] sm:h-[500px]"
          src={agriculture}
          alt="Third slide"
          
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;