import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";

export function Header({ onFilterChange }) {
  // Função chamada sempre que o texto no input muda
  const handleInputChange = (e) => {
    const value = e.target.value;
    onFilterChange(value); // Chama a função de filtro passando o valor do input
  };

  return (
    <Container>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-search">
            <FaSearch size={14} />
            <input
              type="text"
              placeholder="Busque anotações"
              onChange={handleInputChange}
            />
          </div>
        </nav>

        <nav className="profile">
          <p className="profile-name">Usuário(a)</p>
          <img className="profile-img" src="/src/assets/profile1.png" alt="Foto" />
        </nav>
      </header>
    </Container>
  );
}
