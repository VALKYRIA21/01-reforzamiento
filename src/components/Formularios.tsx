import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formulario, onChange } = useForm();
  return (
    <>
      <h3>Formularios</h3>
      <br />
      <input
        type="text"
        name="email"
        id=""
        className="form-control"
        placeholder="Email"
        value={formulario.email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        name="password"
        id=""
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={formulario.password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
      &nbps;
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
