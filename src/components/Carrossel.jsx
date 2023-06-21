import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://claudia.abril.com.br/wp-content/uploads/2020/06/GettyImages-1129315326.jpg?quality=85&strip=info&w=1280&h=720&crop=1"
          alt="Mulher com placa"
        />
        <Carousel.Caption>
          <h3 class='text-carrosel'>Ligue 180</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vozdascomunidades.com.br/wp-content/uploads/2019/01/disque-denuncia-760x490.png"
          alt="Ligue 180"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Ligue 180</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cartacapital.com.br/wp-content/uploads/2019/06/marcha-mulheres-feminicidio-Foto-Fernando-Fraza%CC%83o-Age%CC%82ncia-Brasil.jpg"
          alt="13 mulheres mortas"
        />

        <Carousel.Caption>
        <h3 class='text-carrosel'>Ligue 180</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;