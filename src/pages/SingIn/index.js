import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../../assets/logoG3.png";
import "./singin.css";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { singIn, loadingAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      const success = await singIn(email, senha); 

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

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>

          <input
            type="text"
            placeholder="email@examplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">
            {loadingAuth ? "Carregando..." : "Acessar"}
          </button>
        </form>
      </div>
    </div>
  );
}
