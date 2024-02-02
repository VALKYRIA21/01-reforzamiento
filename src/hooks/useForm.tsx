import { useState } from "react";

export const useForm = () => {
  const [formulario, setformulario] = useState({
    email: "test@demo.com",
    password: "123456",
  });
  const onChange = (value: string, campo: string) => {
    setformulario({
      ...formulario,
      [campo]: value,
    });
  };
  return {
    formulario,
    onChange,
  };
};
