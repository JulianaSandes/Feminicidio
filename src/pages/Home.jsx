import NavProjeto from "../components/NavProjeto";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import "../App.css"
import NavRodape from "../components/NavRodape";

function Home() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
        </div>
        <div className="home">
          <h1>Feminicídio no Brasil</h1>
        </div>
        <div className="card-group">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div>
          <NavRodape/>
        </div>
      </div>
    </div>
  );
}
export default Home;
