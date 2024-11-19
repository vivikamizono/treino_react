import React, { useState } from 'react'

// exercicio 1

const Greeting = ({name}) => {
    return <h1> Olá {name}! </h1>;

}

// exercicio 2

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Você clicou {count} vezes no botão!</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
            <button onClick={() => setCount(count - 1)}>Decementar</button>
        </div>
    );
};

// exercicio 3

const Tasklist = ({ tasks }) => {
    if (tasks.length === 0) {
        return <p>Não há tarefas para mostrar</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
};



function Exercises() {
    const tasks = [
        { id: 1, text: "Estudar" },
        { id: 2, text: "Ler" },
    ];
  return (
    <div>
        <h2>Exercicio 1</h2>
        <Greeting name="Vicky"/>
        <h2>Exercicio 2</h2>
        <Counter/>
        <h2>Exercicio 3</h2>
        <Tasklist tasks={tasks} />
        
    </div>
  )
}

export default Exercises