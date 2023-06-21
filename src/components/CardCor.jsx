import Card from 'react-bootstrap/Card';
import img from '../assets/graficoCorPele.png';

function CardCor() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Cor de pele das vítimas</Card.Title>
        <Card.Text>
        Grafico mostra o número de vítimas de acordo com a cor da pele.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardCor;