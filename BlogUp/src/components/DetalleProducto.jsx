import tecladoGamer from "../productos"
import { useParams } from "react-router-dom"

function DetalleProducto() {
    const {id} = useParams();
    console.log(id);
    const producto=tecladoGamer.find(prod=>prod.id===parseInt(id))

    if (!producto){
        return <h2>Ups, el producto no existe.</h2>
    }
    return (
        <div className="detail-Container">
            <h2 className="detail-Title">Detalle del producto</h2>
            <h2 className="detail-TitleProd">CORSAIR {producto.nombre}</h2>
            <img className="detail-Img" src={producto.imagen} alt="Teclado" />
            <p className="detail-Description">{producto.descripcion}</p>
            <h3 className="detail-Price">$ {producto.precio}</h3>
        </div>
    )
}

export default DetalleProducto