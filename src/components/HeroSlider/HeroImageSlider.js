import Carousel from 'react-bootstrap/Carousel';

function HeroSlider({data}) {
  return (
      <Carousel>
      {
        data?.map(item => (
          <Carousel.Item>
            <img className='img-fluid' src={item.image} alt={item.name} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default HeroSlider