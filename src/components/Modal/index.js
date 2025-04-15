import { FiX } from "react-icons/fi";
import "./modal.css";

export default function Modal({ conteudo, close }) {
  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={close}>
          <FiX size={25} color="#FFF" /> Voltar
        </button>

        <main>
          <h2>Detalhes do chamado</h2>

          <div className="row">
            <span>
              Cliente: <i>{conteudo?.cliente}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto: <i>{conteudo?.assunto}</i>
            </span>
            <span>
              Cadastrado em: <i>{conteudo?.cadastrado}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Status:
              <i
                className="status-badge"
                style={{
                  color: "#FFF",
                  backgroundColor:
                    conteudo?.status === "Aberto" ? "#5cb85c" : "#999",
                }}
              >
                {conteudo?.status}
              </i>
            </span>
          </div>

          <h3>Complemento</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            ratione fugit optio, illum, sint recusandae mollitia nostrum fuga
            consectetur ipsa vel distinctio cupiditate atque officia nesciunt et
            quae. Obcaecati, tempora!
          </p>
        </main>
      </div>
    </div>
  );
}
