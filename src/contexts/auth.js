import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadingUser() {
      const storageUser = localStorage.getItem("@ticktsPRO");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadingUser();
  }, []);

  // Novo método de login usando a API externa
  async function signIn(cpfCnpj, senha) {
    setLoadingAuth(true);

    try {
      const response = await axios.post("http://10.0.1.41:8080/auth/login", {
        cpfCnpj,
        senha,
      }, 
      {
        timeout: 5000, // 5 segundos
      })

      const data = response.data;

      const userData = {
        nome: data.nome,
        cpfCnpj: data.cpfCnpj,
        idCliente: data.idCliente,
      };

      setUser(userData);
      storageUser(userData);
      toast.success(`Bem-vindo(a) ${data.nome}!`);
      return true;
    } catch (error) {
      console.error("Erro ao autenticar:", error);

      if (error.code === 'ECONNABORTED') {
        toast.error("Tempo de resposta excedido. Tente novamente mais tarde.");
      } else {
        toast.error("CPF/CNPJ ou senha inválidos!");
      }
      return false;
    } finally {
      setLoadingAuth(false);
    }
  }

  function storageUser(data) {
    localStorage.setItem("@ticktsPRO", JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem("@ticktsPRO");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        logout,
        loadingAuth,
        loading,
        storageUser,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
