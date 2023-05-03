import { useEffect } from "react";
import { useState } from "react";

export const UseState = ({ name }) => {
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const handleError = () => {
    setError(!error);
  };

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <div className="bg-slate-200 w-96 h-auto m-5 p-3 flex flex-col justify-center items-center rounded-lg gap-3">
      <h2 className="text-2xl">Eliminar {name}</h2>

      <p className="xl">Por favor, escribe el código de seguridad.</p>
      {error && <p className="text-red-500">Error: el código es incorrecto</p>}

      {loading && <p>Cargando...</p>}

      <input
        className="rounded-xl px-3"
        type="text"
        placeholder="Código de seguridad"
      />
      <button
        className="bg-blue-300 rounded-full py-1 px-3"
        onClick={() => {
          handleError(), handleLoading();
        }}
      >
        Comprobar
      </button>
    </div>
  );
};
