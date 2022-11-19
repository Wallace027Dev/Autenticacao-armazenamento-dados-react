import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const UserProfile = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      alert("Ocorreu um erro ao tentar efetuar o logout");
    }
  }

  return (
    <div className="container">
      <h1>Perfil do Usuário</h1>

      <button>Sair</button>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email: {currentUser?.email}</td>
            <td>Atualizar perfil do usuário</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
