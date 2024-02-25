import React from "react";

const Listado = ({ colaboradores, deleteColaborador, cleanColaboradores }) => {
  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteColaborador(colaborador.id)}
                >
                  <i
                    className="bi bi-trash-fill delete-btn"
                    data-id={colaborador.id}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
          <button className="btn-clean" onClick={cleanColaboradores}>
            Limpiar
          </button>
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
