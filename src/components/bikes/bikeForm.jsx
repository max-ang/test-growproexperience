import ReactDatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

// Componente de Formulario
// se dejó de lado la correcta construcción de un componente Input que permita setear diferentes configuraciones dependiendo el type y las validaciones correspondientes

function BikeForm (props) {
  const { startDate, onSetStartDate, onSubmitForm, onSetFormData, formData } = props;

  const handleInputChange = (event) => {
    onSetFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleStartDate = (date) => {
    onSetFormData({
      ...formData,
      dateFrom: date
    })
    onSetStartDate(date);
  }

  return (
    <form method="post" className="form-container__form" onSubmit={onSubmitForm}>
      <label>Nombre:<input type="text" name='name' onChange={handleInputChange} required/></label>
      <label>Email:<input type="email" name='email' onChange={handleInputChange} required/></label>
      <label>Teléfono:<input type="text" name='phone' onChange={handleInputChange} required/></label>
      <label>Fecha de inicio del alquiler:<ReactDatePicker selected={startDate} onChange={(date) => handleStartDate(date)} name='dateFrom' required/></label>
      <label>Duración en días del alquiler:<input type="number" name='rentDays' onChange={handleInputChange} required/></label>
      <div className={`form-container__buttons`}>
        <Link to="/">Volver</Link>
        <button type='submit' onClick={onSubmitForm}>Cotizar</button>
      </div>
    </form>
  )
}

export default BikeForm;