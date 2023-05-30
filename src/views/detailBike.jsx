import React, { useEffect, useState } from "react";
import BikeCard from "../components/bikes/bikeCard";
import { Link, useParams } from "react-router-dom";
import BikeForm from "../components/bikes/bikeForm";
import { getTotalAmount } from "../utils/bikeUtils";
import ModalComponent from "../components/modal/modal";

// Vista del Detalle de una bicicleta desde donde se hará la reserva/alquiler

function DetailBike() {
  const [bike, setBike] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateFrom: startDate,
    rentDays: '',
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const { id: bikeId } = useParams();
  
  // se hace la API Call desde el cliente aunque lo ideal en este caso sería hacerlo desde el Server para mejorar la performance
  useEffect(() => {
    fetch(`http://localhost:3001/bikes/${bikeId}`)
      .then((res) => res.json())
      .then((result) => {
        setBike(result);
      });
  }, [bikeId]);

  const isComplete = (formData = {}) => {
    const values = Object.values(formData);
    return values.every(value => !!value)
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (isComplete(formData)) {
      // cantidad de dias de alquiler y tipo de bici
      const { rentDays, dateFrom } = formData;

      //saber fecha seleccionada
      const numberDay = dateFrom?.getDate() || 0;

      const { type: bikeType } = bike;

      const total = getTotalAmount(numberDay, rentDays, bikeType);

      setTotalAmount(total);
      setShowModal(true);
    }
  }

  const sendData = () => {
    localStorage.setItem('formData', JSON.stringify({ ...formData, totalAmount, rentDate: new Date()}));
    setShowModal(false);
    setShowCongrats(true);
  }

  return (
    <div className='form-container'>
      <h1>Alquiler de bicicleta</h1>
      <BikeCard info={bike} />
      {!showCongrats && <BikeForm
        startDate={startDate}
        formData={formData}
        onSetStartDate={setStartDate}
        onSubmitForm={submitForm}
        onSetFormData={setFormData}
      />}
      {showCongrats &&
        <div className='congrats'>
          <h3>¡Gracias por tu alquiler!</h3>
          <Link to="/">Volver al listado</Link>
        </div>
      }
      <ModalComponent
        showModal={showModal}
        onSetShowModal={setShowModal}
        totalAmount={totalAmount}
        sendData={sendData}
      />
    </div>
  )
}

export default DetailBike;