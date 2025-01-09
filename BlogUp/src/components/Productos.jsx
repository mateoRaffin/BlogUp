import tecladosGamer from "../productos";
import Producto from "./Producto";

import "./styles.css"

function Productos(){
    return(
        <div id="container">
            {tecladosGamer.map(prod=>(
                <Producto key={prod.id} {...prod} />
            ))}
        </div>
    )
}

export default Productos