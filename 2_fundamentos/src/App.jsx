import "./App.css";
import BomDia from "./components/BomDia";
import BotaoAzul from "./components/BotaoAzul";
import BotaoEstilizado from "./components/BotaoEstilizado";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Descricao from "./components/Descricao";
import Exercises from "./components/Exercises";
import LoginButton from "./components/LoginButton";
import NumberList from "./components/NumberList";
// import Form from "./components/Form";
import Pai from "./components/Pai";
import RenderCondicional from "./components/RenderCondicional";
import UserInfoForm from "./components/UserInfoForm";
import Warning from "./components/Warning";

import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* 6.1 - criação de componente */}
      <Welcome />
      {/* 6.2 - expressoes do JSX */}
      <BomDia />
      {/* 6.3 - componente dentro de componente */}
      <Pai />
      {/* 6.4 - Props */}
      <Descricao name="Vicky" idade={20} />
      {/* 6.5 - useState -> hook */}
      <Counter />
      {/* 6.6 - múltiplos estados */}
      <UserInfoForm />
      {/* 6.7 - eventos */}
      <Button />
      {/* 6.8 - Passando funções de manipulação de eventos como props */}
      {/* <PaiFunction/> */}
      {/* 6.9 - eventos de form */}
      {/* <Form /> */}
      {/* 6.10 - renderização condicional */}
      <RenderCondicional user="Vicky" />
      {/* 6.12 - expressao ternaria */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      {/* 6.13 - render nulo */}
      <Warning warning="Temos um warning!"/>
      {/* 6.14 - listas chaves */}
      {/* <NumberList numbers={[1,2,3,4,5]} /> */}
      {/* 6.15 - estilos por atributos */}
      <BotaoEstilizado />
      {/* 6.16 - estilos globais */}
      <BotaoAzul />
      {/* 6.17 - exercicios */}
      <Exercises />
    </>
  );
}

export default App;
