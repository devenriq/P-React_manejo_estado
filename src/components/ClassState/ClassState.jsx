import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <div className="bg-slate-200 w-96 h-auto m-5 p-3 flex flex-col justify-center items-center rounded-lg gap-3">
        <h2 className="text-2xl">Eliminar {this.props.name}</h2>

        <p className="xl">Por favor, escribe el código de seguridad.</p>

        <input
          className="rounded-xl px-3"
          type="text"
          placeholder="Código de seguridad"
        />
        <button className="bg-blue-300 rounded-full py-1 px-3">
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
