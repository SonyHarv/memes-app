import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [linea1, setLinea1] = useState("Hola Mundo");
  const [linea2, setLinea2] = useState("Bienvenidos!!!");

  return (
    <div className="App">
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input type="text" placeholder="Linea 1" />
      <br />
      <input type="text" placeholder="Linea 2" />
      <br />
      <button>Exportar</button>
      <div>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={logo} alt="Logo" />
      </div>
      {/* Select Picker de memes */}
      {/* Input text - Primer linea */}
      {/* Input text - Segunda linea */}
      {/* Boton exportar */}
    </div>
  );
}

export default App;
