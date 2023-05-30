import { getTypeNameBike } from "../../utils/bikeUtils";

// Elemento reutilizable tanto para el Listado como el Detalle de la bicicleta
function bikeCard(props) {
  const { info } = props;

  return (
    <div className="card">
      <div className="card-media">
        <img src={info.image} alt={info.name} />
      </div>
      <div className="card-body">
        <h3>
          {info.name}
        </h3>
        <p>{getTypeNameBike(info.type)}</p>
      </div>
    </div>
  )
}

export default bikeCard;