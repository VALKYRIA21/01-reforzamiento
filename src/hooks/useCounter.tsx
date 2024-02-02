import { useState } from "react";

export const useCounter = (inicial: number) => {
  const [valor, setvalor] = useState(inicial);

  const acumularODisminuir = (numero: number) => {
    setvalor(valor + numero);
  };

  return {
    valor,
    acumularODisminuir,
  };
};
