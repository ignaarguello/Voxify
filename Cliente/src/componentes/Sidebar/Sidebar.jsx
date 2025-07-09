import React from "react";

//Estilos
import "./Sidebar.css";

//Iconos
import { FaHome, FaPlus, FaBook, FaSearch, FaUser } from "react-icons/fa";

const Anclajes = [
  "Dashboard",
  "Grabar Nuevo",
  "Librería",
  "Explorar",
  "Perfil",
];
const Iconos = [<FaHome />, <FaPlus />, <FaBook />, <FaSearch />, <FaUser />];

export default function Sidebar() {
  return (
    <div id="Sidebar">
      <section id="LogoVoxify"></section>
      <div id="ContenedorEnlaces">
        {Anclajes.map((anclaje, index) => (
          <div id="EnlaceSidebar" key={index}>
            <figure id="IconosContenedor">{Iconos[index]} </figure>
            <a href={`#${anclaje}`} key={index} className="EnlaceSidebar">
              {anclaje}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
