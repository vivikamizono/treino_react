
import "./App.css";
import BomDia from "./components/BomDia";
import Descricao from "./components/Descricao";
import Pai from "./components/Pai";

import Welcome from "./components/Welcome";

function App() {
  return (
  <>
  {/* 6.1 - criação de componente*/}
  <Welcome/>
  {/* 6.2 - expressoes do JSX*/}
  <BomDia/>
  {/* 6.3 - ecomponente dentro de componente*/}
  <Pai/>
  {/* 6.4 - Props*/}
  <Descricao name="Vicky" idade={20} />
  </>
  );
}

export default App;
