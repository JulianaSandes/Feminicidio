import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
            <img class="img-cabecalho" src="https://vermelho.org.br/wp-content/uploads/2019/10/violencia119767.jpg" alt="Imagem Feminicídio" />
            
            <div className='flex'>
            <h1 class="titulo">Violência NÃO</h1>
            <h3 class="subtitulo">A Central de Atendimento à Mulher - Ligue 180</h3>
            </div>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;