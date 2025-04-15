import { Link } from "react-router-dom";
import { FiMessageCircle, FiSearch } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "./dashboard.css";
import { useState } from "react";
import Modal from "../../components/Modal";

export default function Dashboard() {
  const [showPostModal, setShowPostModal] = useState(false);
  const [conteudoModal, setConteudoModal] = useState(null);

  // Simulação dos dados (pode vir de uma API no futuro)
  const chamados = [
    {
      id: 1,
      cliente: "João",
      assunto: "Impressora - Falha na impressão",
      status: "Aberto",
      cadastrado: "10/10/2024",
    },
  ];

  // Função para abrir o modal e passar os dados do chamado
  function handleOpenModal(chamado) {
    setConteudoModal(chamado);
    setShowPostModal(true);
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Minhas OS">
          <FiMessageCircle size={25} />
        </Title>

        <table>
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cliente</th>
              <th scope="col">Assunto</th>
              <th scope="col">Status</th>
              <th scope="col">Cadastrado em</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id}>
                <td data-label="Id">{chamado.id}</td>
                <td data-label="Cliente">{chamado.cliente}</td>
                <td data-label="Assunto">
                  {chamado.assunto.length > 10
                    ? chamado.assunto.slice(0, 10) + "..."
                    : chamado.assunto}
                </td>
                <td data-label="Status">
                  {chamado.status}
                  <span className="badge">{chamado.status}</span>
                </td>
                <td data-label="Cadastrado">{chamado.cadastrado}</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                    onClick={() => handleOpenModal(chamado)} // 🛠️ Abrir modal com dados
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Renderiza o Modal apenas se showPostModal for true */}
        {showPostModal && (
          <Modal
            conteudo={conteudoModal} // Passa os dados do chamado para o modal
            close={() => setShowPostModal(false)}
          />
        )}
      </div>
    </div>
  );
}
