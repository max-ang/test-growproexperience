import Modal from "react-overlays/Modal";

import './modal.css'

// Componente Modal
// tener en cuenta que para hacerlo modular debería manejarse desde afuera de este componente tanto los textos como los accionables, en este ejercicio se inyecta solo lo necesario

const ModalComponent = ({ showModal, onSetShowModal, totalAmount, sendData }) => {
  const handleClose = () => onSetShowModal(false);

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <Modal
      className="modal"
      show={showModal}
      onHide={handleClose}
      renderBackdrop={renderBackdrop}
    >
      <div>
        <div className="modal-header">
          <div className="modal-title">¡Gracias por cotizar!</div>
          <div>
            <span className="close-button" onClick={handleClose}>
              x
            </span>
          </div>
        </div>
        <div className="modal-desc">
          <p>El precio total de tu alquiler es USD {totalAmount}, ¿estás de acuerdo?</p>
        </div>
        <div className="modal-footer">
          <button className="secondary-button" onClick={handleClose}>
            Cancelar
          </button>
          <button className="primary-button" onClick={sendData}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;