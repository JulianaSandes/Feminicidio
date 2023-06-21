import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
import { BsInstagram, BsLinkedin, BsTwitch, BsTwitter } from "react-icons/bs";
//import "../App.css";

function Contato() {
  return (
    <div>
      <Cabecalho />
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Precisa de ajuda?</h1>
        </div>
          <h2 className="subtitulo">
          A Central de Atendimento à Mulher    
          </h2>  
          <h3 className="subtitulo"> Ligue 180</h3>
    </div>
    </div>
  );
}
export default Contato;
