import Card from 'react-bootstrap/Card';
import img from '../assets/graficoMulheres.png';

function CardMulheres() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Número de Mulheres trans e Mulheres cis</Card.Title>
        <Card.Text>
        Grafico mostra o número de Mulheres trans e cis que foram vítimas.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardMulheres;