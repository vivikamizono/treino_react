import { useState } from "react";

const Counter = () => {
  // const [count, setCount] = useState(1);

    // vaiaveis nao re-renderizam o componente
    // let x = 10;
    // console.log(x);

  return (
    <div>
      <p> voce clicou {x} vezes</p>
      <button onClick={() => console.log("teste")}> Aumentar</button>
    </div>
  );
};

export default Counter;
