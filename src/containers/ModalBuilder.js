import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import Alerts from '../components/Alerts';
import Alerts2 from '../components/Alerts2';

const ModalBuilder = () => {

  const [showModal, setShowModal] = useState(false);

  const [alerts, setAlerts] = useState([
    { text: 'Hi', check: true, class: 'success', dismiss: true},
    {text: 'Bye', check: false, class: 'warning', dismiss: true}
  ]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeAlert = (data, index) => {
    const copyAlerts = [...alerts];
    copyAlerts.splice(index, 1);
    setAlerts(copyAlerts);
  };

  const addAlert = () => {

    const copyAlerts = [...alerts];
    copyAlerts.push({
      text: 'Bye',
      check: true,
      class: 'warning',
      dismiss: true,
    });
    setAlerts(copyAlerts);
  };

  return (
    <div>
      <Modal modalShow={showModal} closed={closeModal} modalSaveButton={() => {
        alert('Saved');
      }} addAlert={() => {addAlert();}}
             modalCloseButton={() => {
               closeModal();
             }}>
        Alerts:
        {alerts.map((data, index) => {
          if (data.check === true) {
            return <Alerts key={index} alertsText={data.text}
                           alertsClass={data.class}
                           AlertButtonFunction={() => {
                             closeAlert(data, index);
                           }}/>;
          } else {
            return <Alerts2 key={index} alertsText={data.text}
                            alertsClass={data.class}
                            AlertButtonFunction={() => {
                              closeAlert(data, index);
                            }}/>;
          }
        })}
      </Modal>
      <button style={{marginTop: '20px'}}
        type="button"
        className="btn btn-primary"
        onClick={openModal}
      >
        Show Modal
      </button>
    </div>
  );
};

export default ModalBuilder;