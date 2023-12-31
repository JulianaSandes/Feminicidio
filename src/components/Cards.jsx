import Card from 'react-bootstrap/Card';
import img from '../assets/grafico1.png';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Número de vítimas</Card.Title>
        <Card.Text>
        Grafico mostra o crescimento do feminicidio de 2015 á 2022.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;