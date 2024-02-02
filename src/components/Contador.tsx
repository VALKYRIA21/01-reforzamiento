import { useState } from "react";

export const Contador = () => {
  const [valor, setvalor] = useState(0);

  const acumularODisminuir = (numero: number) => {
    setvalor(valor + numero);
  };

  return (
    <>
      <h3>
        Contador <code>{valor}</code>
      </h3>
      <br />
      <div className="row">
        <div className="col-md-6">
          <button
            onClick={() => acumularODisminuir(1)}
            className="btn btn-success"
          >
            +1
          </button>
        </div>
        <div className="col-md-6">
          <button
            onClick={() => acumularODisminuir(-1)}
            className="btn btn-success"
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
};
