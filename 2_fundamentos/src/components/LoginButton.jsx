const LoginButton = ({loggedIn}) => {
    // Entrar -> deslogado
    // sair -> lgoado
  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>} </div>
  );
};

export default LoginButton;