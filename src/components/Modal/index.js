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
          <h2>Detalhes da Ordem de Serviço</h2>

          <div className="row">
            <span>
              Código OS: <i>{conteudo?.idOs}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Código Cliente: <i>{conteudo?.idcliente}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Nome: <i>{conteudo?.nome}</i>
            </span>
          </div>

          <div className="row">
            <span>
              CPF/CNPJ: <i>{conteudo?.cpfCnpj}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Técnico: <i>{conteudo?.tecnico}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Equipamento: <i>{conteudo?.equipamento}</i>
            </span>
            <span>
              Marca: <i>{conteudo?.marca}</i>
            </span>
            <span>
              Modelo: <i>{conteudo?.modelo}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Garantia: <i>{conteudo?.garantia}</i>
            </span>
            <span>
              Entrada:{" "}
              <i>{new Date(conteudo?.dataEntrada).toLocaleDateString("pt-BR")}</i>
            </span>
          </div>

          <div className="row">
            <span>
              Última Situação:
              <i
                className="status-badge"
                style={{
                  color: "#FFF",
                  backgroundColor:
                    conteudo?.ultSituacao === "Aberto" ? "#5cb85c" : "#999",
                }}
              >
                {new Date(conteudo?.dataUltSituacao).toLocaleDateString("pt-BR")}
              </i>
            </span>
          </div>

          <h3>Problema relatado:</h3>
          <p>{conteudo?.problemaRelatado}</p>
        </main>
      </div>
    </div>
  );
}
