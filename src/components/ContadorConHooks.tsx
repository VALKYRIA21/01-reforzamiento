import { useCounter } from "../hooks/useCounter";

export const ContadorConHooks = () => {
  const { valor, acumularODisminuir } = useCounter(0);

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
