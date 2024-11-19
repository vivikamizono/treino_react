import React from 'react';

const BotaoEstilizado = () => {
    const estiloDoBotao = {
        backgroundColor: "#FFF", // Ajustei para preto para o contraste com o texto branco
        color: "#000",
        padding: "15px 32px",
        cursor: "pointer",
    };

    return (
        <button style={estiloDoBotao}>Clique aqui</button>
    );
};

export default BotaoEstilizado;
