import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import "../App.css"
import NavRodape from "../components/NavRodape";
import CardCor from "../components/CardCor";
import CardCidades from "../components/CardCidades";
import CardMulheres from "../components/CardMulheres";
import CardMes from "../components/CardMes";
import CardIdade from "../components/CardIdade";

function Home() {
  return (
    <div>
      <Cabecalho />
      <div>
        <div>
          <Carrossel />
        </div>
        <div>
          <h1 className="home">O que é feminicídio?</h1>
          <p className="subtitulo"> 
          Feminicídio é o assassinato de uma mulher pelo simples fato de ser mulher. Os motivos mais comuns são o ódio, o desprezo ou o sentimento de perda do controle e da propriedade sobre as mulheres, comuns em sociedades marcadas pela associação de papéis discriminatórios ao feminino, como é o caso brasileiro.
          </p>
          <h1 className="text">Sempre denúncie</h1>
        </div>
        <hr />
        <div className="home">
          <h1>Dados feminicídio no Brasil</h1>
        </div>
        <div className="card-group">
          <Cards />
          <CardCor />
          <CardCidades />
        </div>

        <div className="card-group">
          <CardMulheres />
          <CardMes />
          <CardIdade />
        </div>
        <div>
          <NavRodape/>
        </div>
      </div>
    </div>
  );
}
export default Home;
