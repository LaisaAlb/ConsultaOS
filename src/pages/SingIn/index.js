import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoG3.png";
import "./singin.css";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";

export default function SingIn() {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [senha, setSenha] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (cpfCnpj !== "" && senha !== "") {
      const success = await signIn(cpfCnpj, senha);

      if (success) {
        navigate("/home");
      }
    } else {
      toast.error("Por favor, preencha todos os campos");
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo da G3" />
        </div>

        <div className="form-container">
          <h1>Bem Vindo</h1>
          <p>Para acessar suas informações faça o <strong>Login</strong></p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite o CPF ou CNPJ"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
            />
            <input
              type="password"
              placeholder="Digite a senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">
              {loadingAuth ? "Carregando..." : "Acessar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
