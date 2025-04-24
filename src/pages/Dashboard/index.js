import { Link } from "react-router-dom";
import { FiMessageCircle, FiSearch } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "./dashboard.css";
import Modal from "../../components/Modal";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

export default function Dashboard() {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPostModal, setShowPostModal] = useState(false);
  const [conteudoModal, setConteudoModal] = useState(null);

  const { user } = useContext(AuthContext);

  // Simulação dos dados (pode vir de uma API no futuro)
  useEffect(() => {
    async function loadChamados() {
      try {
        const response = await axios.get(
          `http://10.0.1.41:8085/api/os/${user.idCliente}`, // ou id, se for outro campo
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setChamados(response.data); // <- aqui deve vir a lista de OS
      } catch (error) {
        console.error("Erro ao carregar OS:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      loadChamados();
    }
  }, [user]);

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
              <th scope="col">CÓDIGO</th>
              <th scope="col">EQUIPAMENTO</th>
              <th scope="col">GARANTIA</th>
              <th scope="col">SITUAÇÃO</th>
              <th scope="col">DATA ENTRADA</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.idOs}>
                <td data-label="Id">{chamado.idOs}</td>
                <td data-label="Equipamento">{chamado.equipamento}</td>
                <td data-label="Garantia">{chamado.garantia}</td>
                <td data-label="Situacap">
                  {chamado.situacao}
                  <span className="badge">{chamado.situacao}</span>
                </td>
                <td data-label="Cadastrado">
                  {new Date(chamado.dataEntrada).toLocaleDateString()}
                </td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                    onClick={() => handleOpenModal(chamado)}
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
