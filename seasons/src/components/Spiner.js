import React from 'react';

const Spiner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.text}</div>
    </div>
  );
};

//default props
Spiner.defaultProps = {
  text: 'Loading...',
};

export default Spiner;
