import React from "react";
import { Container } from "./styles";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export function Card({ id, title, description, onDelete }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${id}`); // Navega para a tela de edição com o id específico
  };

  return (
    <Container>
      <div className="cards">
        <div className="card-title">
          <IoDocumentTextOutline className="card-title-task" size={28} />
          <h1>{title}</h1>

          <div className="card-title-icons">
            {/* Usa useNavigate para navegar para a tela de edição */}
            <MdEdit
              className="card-title-edit"
              size={18}
              onClick={handleEditClick}
            />
            <TiDelete
              className="card-title-delete"
              size={20}
              onClick={() => onDelete(id)} // Deleta o card
            />
          </div>
        </div>

        <div className="card-description">
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
}
