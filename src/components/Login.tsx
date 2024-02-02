import { useEffect, useReducer } from "react";

interface authState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: authState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type loginPayload = {
  userName: string;
  name: string;
};
type authAction = { type: "Logout" } | { type: "login"; payload: loginPayload };

const authReducer = (state: authState, action: authAction): authState => {
  switch (action.type) {
    case "Logout":
      return {
        validando: false,
        token: null,
        userName: "",
        name: "",
      };
    case "login":
      const { userName, name } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        userName,
        name,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "Logout" });
    }, 1500);
  }, []);

  const loginClick = () => {
    dispatch({
      type: "login",
      payload: {
        userName: "Valkyria",
        name: "Fernando,",
      },
    });
  };

  const logoutClick = () => {
    dispatch({ type: "Logout" });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <br />
        <div className="container">
          <div className="alert alert-info">Validando....</div>
        </div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      <br />
      <div className="container">
        {token ? (
          <div className="alert alert-success">Autenticado como: {name}</div>
        ) : (
          <div className="alert alert-danger">No autenticado</div>
        )}
        <br />
        <hr />
        {token ? (
          <button
            onClick={logoutClick}
            className="btn btn-danger"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={loginClick}
            className="btn btn-primary"
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};
