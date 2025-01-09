import { Link } from "react-router-dom"


function Producto({nombre,imagen,precio,id}){
    return(
        <Link to={`/productos/${id}`} className="card">
            <h2 className="title-Card">{nombre}</h2>
            <img className="img-Card" src={imagen} />
            <h3 className="price-Card">$ {precio}</h3>
        </Link>
    )
}


export default Producto