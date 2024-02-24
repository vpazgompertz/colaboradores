import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [searchColaborador, setSearchColaborador] = useState("");

  const Search = (event) => {
    const searchTerm = event.target.value;
    setSearchColaborador(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        className="buscador-container"
        placeholder="Busca un colaborador"
        value={searchColaborador}
        onChange={Search}
      />
    </div>
  );
};

export default Buscador;
