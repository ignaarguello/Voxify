import React from "react";

//Estilos
import "./Sidebar.css";

//Iconos
import { FaHome, FaPlus, FaBook, FaSearch, FaUser } from "react-icons/fa";

//Link
import { Link } from "react-router-dom";

const Anclajes = [
  {
    url: "/",
    label: "Dashboard",
    icono: <FaHome />,
  },
  {
    url: "/nuevasesion",
    label: "Nueva Sesión",
    icono: <FaPlus />,
  },
  {
    url: "/explorar",
    label: "Explorar",
    icono: <FaSearch />,
  },
  {
    url: "/libreria",
    label: "Libreria",
    icono: <FaBook />,
  },
  {
    url: "/perfil",
    label: "Perfil",
    icono: <FaUser />,
  },
]

export default function Sidebar() {
  return (
    <div id="Sidebar">
      <section id="LogoVoxify"></section>
      <div id="ContenedorEnlaces">
        {Anclajes.map((anclaje, index) => (
          <Link id="EnlaceSidebar" key={index} to={anclaje.url}>
            <figure id="IconosContenedor">{anclaje.icono}</figure>
            <span id="AnchorSidebar" key={index}>
              {anclaje.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
