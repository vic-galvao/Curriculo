import React from "react" 
import { createRoot } from "react-dom/client" 

import Pagina from "./Pagina.jsx";

const contentor = document.getElementById("root")
const origem = createRoot(contentor) 
origem.render( <Pagina /> )
