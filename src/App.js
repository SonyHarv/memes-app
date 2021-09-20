import "./App.css";
import { useState } from "react";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input type="text" placeholder="Linea 1" onChange={onChangeLinea1} />
      <br />
      <input type="text" placeholder="Linea 2" onChange={onChangeLinea2} />
      <br />
      <button>Exportar</button>
      <div>
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <img src={"/assets/images/" + imagen + ".jpg"} alt="fire" />
      </div>
      {/* Select Picker de memes */}
      {/* Input text - Primer linea */}
      {/* Input text - Segunda linea */}
      {/* Boton exportar */}
    </div>
  );
}

export default App;
