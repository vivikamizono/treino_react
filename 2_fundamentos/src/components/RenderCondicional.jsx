const RenderCondicional = ({ user }) => {
    // se houver user, exiba uma msg de boas vindas
  return <div>{user && <h1>Bem vindo de volta {user}</h1>}</div>
};

export default RenderCondicional;