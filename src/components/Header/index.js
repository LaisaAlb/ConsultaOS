import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";
import { FiHome, FiMessageCircle } from "react-icons/fi";

import logo from "../../assets/logoG3.png";

import "./header.css";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img src={logo} alt="Foto do usuário" />
      </div>

      <Link to="/home" className="nav-link">
        <FiHome color="#FFF" size={24}></FiHome>
        Inicio
      </Link>

      <Link to="/dashboard" className="nav-link">
        <FiMessageCircle color="#FFF" size={24}></FiMessageCircle>
        Minhas OS
      </Link>

      {/* <Link to="/" className="nav-link">
        <FiLogOut color="#FFF" size={24}></FiLogOut>
        Sair
      </Link> */}

      <div className="sidebar-footer">
        <div className="user-info">
        </div>
        <span>{user?.nome}</span>
      </div>
    </div>
  );
}
