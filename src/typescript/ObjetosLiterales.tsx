interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
  ocupacion: Ocupacion;
}

interface Direccion {
  ciudad: string;
  casaNo: number;
}

interface Ocupacion {
  carrera: string;
  experiencia: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Fernando",
    edad: 28,
    direccion: {
      ciudad: "Caracas",
      casaNo: 72,
    },
    ocupacion: {
      carrera: "Ing en informatica",
      experiencia: 4,
    },
  };
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
