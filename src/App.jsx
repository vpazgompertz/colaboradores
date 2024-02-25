import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./js/colaboradores";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [message, setMessage] = useState(null);
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [busqueda, setBusqueda] = useState("");

  const Registration = (success) => {
    if (success) {
      setColaboradores([...colaboradores, success]);
      setMessage("¡Colaborador Agregado!");
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    } else {
      setMessage("¡Completa todos los campos!");
    }
  };

  const deleteColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const search = (term) => {
    setBusqueda(term);
  };

  const colaboradoresFilter = colaboradores.filter((colaborador) => {
    return colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase());
  });

  const cleanColaboradores = () => {
    setColaboradores([]);
  };

  return (
    <section className="container">
      <div>
        <h1>Lista de colaboradores</h1>
        <Buscador onSearch={search} />
        <Listado
          colaboradores={colaboradoresFilter}
          deleteColaborador={deleteColaborador}
          cleanColaboradores={cleanColaboradores}
        />
      </div>
      <div>
        <Formulario registration={Registration} />
        {message && <Alert message={message} />}
      </div>
    </section>
  );
}

export default App;
