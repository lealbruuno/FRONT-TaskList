import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { IoDocumentTextOutline } from "react-icons/io5";

import { useState, useEffect } from "react";
import { api } from "../../services/api"; // Importa a API configurada com Axios
import { useParams, useNavigate } from "react-router-dom";

export function Edit() {
  const { id } = useParams(); // Obtém o id da URL

  const [title, setTitle] = useState(""); // Estado para armazenar o título da tarefa
  const [description, setDescription] = useState(""); // Estado para armazenar a descrição da tarefa

  const navigate = useNavigate();

  // Busca os dados da tarefa ao montar o componente
  useEffect(() => {
    api
      .get(`/todo/${id}`) // Faz uma requisição GET para buscar os dados da tarefa com o ID especificado
      .then((response) => {
        const { title, description } = response.data; // Extrai os dados da resposta
        setTitle(title); // Atualiza o estado 'title' com o título da tarefa
        setDescription(description); // Atualiza o estado 'description' com a descrição da tarefa
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefa:", error);
      });
  }, [id]); // Executa apenas quando o 'id' na URL é alterado

  // Função para atualizar os dados da tarefa
  const handleUpdate = () => {
    if (!title) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    api
      .put(`/todo/${id}`, { title, description }) // Faz uma requisição PUT para atualizar os dados da tarefa
      .then((response) => {
        console.log("Tarefa atualizada com sucesso:", response.data); // Loga a resposta com os dados da tarefa atualizados
        navigate("/"); // Redireciona para a página inicial após a atualização
      })
      .catch((error) => {
        console.error("Erro ao atualizar tarefa:", error);
      });
  };

  return (
    <Container>
      <Header />
      <h1 className="title">Edição de Tarefa</h1>
      <form className="form">
        <h1>Título</h1>
        <section className="section">
          <IoDocumentTextOutline className="section-img" size={20} />
          <input
            type="text"
            placeholder="Adicione um título"
            value={title} // Valor do campo de título vinculado ao estado 'title'
            onChange={(e) => setTitle(e.target.value)} // Atualiza o estado 'title' quando o valor do campo muda
            required
          />
        </section>

        <h1>Descrição</h1>
        <textarea
          placeholder="Adicione uma descrição"
          value={description} // Valor do campo de descrição vinculado ao estado 'description'
          onChange={(e) => setDescription(e.target.value)} // Atualiza o estado 'description' quando o valor do campo muda
          required
        ></textarea>

        <Button
          title="Cancelar"
          className="button-back"
          onClick={() => navigate("/")}
        />
        <Button
          title="Atualizar"
          className="button-save"
          onClick={handleUpdate} // Chama a função handleUpdate ao clicar no botão Atualizar
        />
      </form>
    </Container>
  );
}
