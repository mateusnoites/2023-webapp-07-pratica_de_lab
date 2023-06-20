import React, { useState } from 'react';

function App() {
  const [entrada, setEntrada] = useState('');

  return (
    <div>
      <AppNavBar />
      <AppEntrada texto={entrada} mudarTexto={setEntrada} />
      <AppCloneEntrada texto={entrada} />
    </div>
  );
}

function AppNavBar() {
  return <h1>Prática de laboratório - Elevação de estado - Aplicação web</h1>;
}

type AppEntradaProps = {
  texto: string;
  mudarTexto: (text: string) => void;
};

function AppEntrada(props: AppEntradaProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.mudarTexto(event.target.value);
  };

  return <input value={props.texto} onChange={handleChange} />;
}

type AppCloneEntradaProps = {
  texto: string;
};

function AppCloneEntrada(props: AppCloneEntradaProps) {
  return <p>{props.texto}</p>;
}

export default App;