import React, { useState } from "react";
import { useAuth } from "../context/authContext";

export const Signup = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(element) {
    element.preventDefault();

    if (password.length < 6) {
      alert("Password deve ter no mínimo 6 caracteres!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não conferem");
      return;
    }

    try {
      await signUp(email.password);
    } catch (error) {
      alert("Ocorreu um erro ao tentar criar um novo usuario");
    }
  }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(element) => setEmail(element.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(element) => setPassword(element.target.value)}
        />

        <label>Password confirmation</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(element) => setConfirmPassword(element.target.value)}
        />

        <button className="button-block" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};
