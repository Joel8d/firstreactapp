import "../components/styles/Testimonio.css"

export function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img className="image-testimonio" src={props.imagen} alt="profile"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">{props.tesimonio}</p>       
            </div>
        </div>
    )
}
