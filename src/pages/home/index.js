import { FiHome } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import img1 from "../../assets/ConsultaOS.png";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Inicio">
          <FiHome size={25} />
        </Title>

        <div className="container-img-text">
          <div className="img">
            <img src={img1} alt="Consulta OS" />
          </div>

          <div className="text-content">
            <h1>CONSULTA OS – Acompanhamento Online de Assistência Técnica</h1>
            <p className="p">
              A G3 Soluções em Tecnologia oferece assistência técnica
              especializada com agilidade e transparência. Com o <strong>CONSULTA OS</strong>,
              você acompanha o status do seu equipamento em tempo real, sem
              necessidade de ligações.
            </p>
            <p className="p">
              Como acessar?
              <li>
                Basta clicar em "Minhas OS" no menu e verificar todo o
                andamento do seu serviço
              </li>
            </p>
            <p className="g3">Soluções rápidas, suporte eficiente só na G3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
