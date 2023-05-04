import { useEffect } from "react";
import { useState } from "react";

const SECURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(value);

  useEffect(() => {
    if (loading) {
      setError(false);
      setTimeout(() => {
        if (value !== SECURITY_CODE) {
          setError(true);
        }
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <div className="bg-slate-200 w-96 h-auto m-5 p-3 flex flex-col justify-center items-center rounded-lg gap-3">
      <h2 className="text-2xl">Eliminar {name}</h2>

      <p className="xl">Por favor, escribe el código de seguridad.</p>
      {error && !loading && (
        <p className="text-red-500">Error: el código es incorrecto</p>
      )}

      {loading && <p>Cargando...</p>}

      <input
        className="rounded-xl px-3"
        type="text"
        placeholder="Código de seguridad"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="bg-blue-300 rounded-full py-1 px-3"
        onClick={() => {
          handleLoading();
        }}
      >
        Comprobar
      </button>
    </div>
  );
};
