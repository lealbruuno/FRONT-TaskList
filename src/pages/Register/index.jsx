import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { IoDocumentTextOutline } from "react-icons/io5";

import { useState, useEffect } from "react";
import { api } from "../../services/api"; // Importa a API configurada com Axios
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate

export function Register() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  function handleAdd() {
    // Verifica se o campo de título está vazio
    if (!title) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    // Envia uma requisição POST para a API quando o botão "Salvar" é clicado
    api
      .post("/todo", { title, description })
      .then((response) => {
        console.log("Tarefa adicionada com sucesso:", response.data);
        navigate("/"); // Redireciona para a página inicial
      })
      .catch((error) => {
        console.error("Erro ao adicionar tarefa:", error);
      });
  }

  return (
    <Container>
      <Header />
      <h1 className="title">Cadastro de Tarefas</h1>
      <form className="form">
        <h1>Título</h1>
        <section className="section">
          <IoDocumentTextOutline className="section-img" size={20} />
          <input
            type="text"
            placeholder="Adicione um título"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </section>

        <h1>Descrição</h1>
        <textarea
          placeholder="Adicione uma descrição"
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <Button
          title="Voltar"
          className="button-back"
          onClick={() => navigate("/")}
        />
        <Button title="Salvar" className="button-save" onClick={handleAdd} />
      </form>
    </Container>
  );
}
