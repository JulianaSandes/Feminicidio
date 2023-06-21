import Card from 'react-bootstrap/Card';
import img from '../assets/graficoMes.png';

function CardMes() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Número de mortes em cada mês.</Card.Title>
        <Card.Text>
        Grafico mostra os meses que mais acontecem casos.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardMes;