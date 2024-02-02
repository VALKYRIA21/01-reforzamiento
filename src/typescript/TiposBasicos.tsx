export const TiposBasicos = () => {
  // !tipo de datos

  const nombre: string = "Fernando";
  const edad: number = 28;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar bajo el agua"];
  return (
    <>
      <h3>Tipos Básicos</h3>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <br />
      {estaActivo ? "Activo" : "No esta activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
