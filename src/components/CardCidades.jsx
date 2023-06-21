import Card from 'react-bootstrap/Card';
import img from '../assets/graficoCidades.png';

function CardCidades() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Número de vítimas em cada cidade</Card.Title>
        <Card.Text>
        Grafico mostra o número do feminicidio em cidades de São Paulo.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardCidades;