import React from 'react';

const Alerts2 = (props) => {
  return (
    <>
      <div className={'alert alert-' + props.alertsClass}
           onClick={props.AlertButtonFunction} role="alert">
        {props.alertsText}
      </div>
    </>
  );
};

export default Alerts2;
