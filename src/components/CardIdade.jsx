import Card from 'react-bootstrap/Card';
import img from '../assets/graficoIdade.png';

function CardIdade() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Número de vítimas de maior de idade e menor de idade</Card.Title>
        <Card.Text>
        Grafico mostra a porcentagem de mulheres que são mortas sendo maiores de idade e menores de idade.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardIdade;