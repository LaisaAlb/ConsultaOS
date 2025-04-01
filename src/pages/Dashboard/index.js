import { Link } from "react-router-dom";
import { FiEdit2, FiMessageCircle, FiSearch } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import "./dashboard.css";

export default function Dashboard() {
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
              <th scope="col">Cadastrando em</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Id">1</td>
              <td data-label="Cliente">João</td>
              <td data-label="Assunto">
                {" "}
                {"Impressora - Falha na impressão".length > 10
                  ? "Impressora - Falha na impressão".slice(0, 10) + "..."
                  : "Impressora - Falha na impressão"}{" "}
              </td>
              <td data-label="Status">
                {" "}
                Aberto
                <span className="badge">Aberto</span>
              </td>
              <td data-label="Cadastrado">10/10/2024</td>
              <td data-label="#">
                <button className="action" style={{ backgroundColor: '#3583f6' }} >
                  <FiSearch color="#FFF"  size={17} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
