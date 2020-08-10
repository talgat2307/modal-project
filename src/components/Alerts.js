import React from 'react';

const Alerts = (props) => {
  return (
    <>
      <div className={'alert alert-' + props.alertsClass} role="alert">
        {props.alertsText}
        <button type="button" className="close"
                onClick={props.AlertButtonFunction}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alerts;
