export const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <code>
        <span>El resultado de la suma es: {sumar(2, 2)}</span>
      </code>
    </>
  );
};
