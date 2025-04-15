// services/auth.js
import axios from "axios";

export async function signInRequest(cpfCnpj, senha) {
  const response = await axios.post("http://10.0.1.41:8085/auth/login", {
    cpfCnpj,
    senha,
  });

  return response.data;
}
