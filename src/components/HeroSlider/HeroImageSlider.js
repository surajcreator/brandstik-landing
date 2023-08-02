import Carousel from 'react-bootstrap/Carousel';

function HeroSlider({data}) {
  return (
    <div className='mt-4'>
      <Carousel>
      {
        data?.map(item => (
          <Carousel.Item>
            <img className='img-fluid' src={item.image} alt={item.name} />
          </Carousel.Item>
        ))
      }
    </Carousel>
    </div>
  );
}

export default HeroSlider