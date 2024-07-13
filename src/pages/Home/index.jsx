import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar todas as tarefas
  const [filter, setFilter] = useState(""); // Estado para armazenar o filtro digitado
  const navigate = useNavigate();

  // Efeito que busca todas as tarefas ao montar o componente
  useEffect(() => {
    api
      .get("/todo")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar tarefas:", error);
      });
  }, []);

  // Função para atualizar o estado de filtro com o texto digitado
  const handleFilterChange = (value) => {
    setFilter(value); // Atualiza o estado de filtro com o valor digitado
  };

  // Função para deletar uma task
  const handleDeleteTask = (id) => {
    api
      .delete(`/todo/${id}`)
      .then((response) => {
        // Atualiza a lista de tasks após a exclusão
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao deletar tarefa:", error);
      });
  };

  // Filtra as tasks com base no filtro digitado
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Header onFilterChange={handleFilterChange} />
      <h1 className="title">Lista de Tarefas</h1>
      <div className="cards">
        {/* Renderiza os cards filtrados */}
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Card
              key={task.id}
              id={task.id} // Passa o id para o componente Card
              title={task.title}
              description={task.description}
              onDelete={handleDeleteTask} // Passa a função de delete como prop
            />
          ))
        ) : (
          <p>Nenhuma tarefa encontrada.</p>
        )}
      </div>

      <Button title="Cadastrar" onClick={() => navigate("/register")} />
    </Container>
  );
}
