import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.css'; // Importar el archivo CSS para los estilos

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carousel-image" src="/images/SHOP.png" alt="uno" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src="/images/SHOP.png" alt="dos" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-image" src="/images/SHOP.png" alt="tres" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;