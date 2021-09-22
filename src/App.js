import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

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
    console.log(evento);
    setImagen(evento.target.value);
  };
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/png");

      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <h1>MEMARDOS 😄</h1>
      <p>
        *Seleccione una de las imagenes y empieza a crear tu propios memes!!!
      </p>
      <select onChange={onChangeImagen}>
        <option value="default">Seleccione Imagen</option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <div className="generator" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img
          src={"/assets/images/" + imagen + ".jpg"}
          alt="Aún no has seleccionado una imagen"
        />
      </div>
      <input
        type="text"
        placeholder="Introduzca aquí su frase superior"
        onChange={onChangeLinea1}
      />
      <input
        type="text"
        placeholder="Introduzca aquí su frase inferior"
        onChange={onChangeLinea2}
      />
      <button onClick={onClickExportar}>Exportar</button>
    </div>
  );
}

export default App;
