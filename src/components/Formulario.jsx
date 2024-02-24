import React, { useState } from "react";

const Formulario = ({ registration }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setError("¡Completa todos los campos!");
      return;
    }

    if (edad < 18) {
      setError("La edad mínima para registrarse es de 18 años");
      return;
    }

    registration({
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    });

    setError("");
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <div className="form-container">
      <h2>Agregar colaborador</h2>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del colaborador"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="correo"
            className="form-control"
            placeholder="Correo del colaborador"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="edad"
            className="form-control"
            placeholder="Edad del colaborador"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="cargo"
            className="form-control"
            placeholder="Cargo del colaborador"
            onChange={(e) => setCargo(e.target.value)}
            value={cargo}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder="Teléfono del colaborador"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>

        <button className="btn-add" type="submit">
          Agregar Colaborador
        </button>
        {error && <p className="message-error">{error}</p>}
      </form>
    </div>
  );
};

export default Formulario;
