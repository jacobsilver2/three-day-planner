import React from 'react';

const header = ({ name }) => (
  <div className="grid header">
    <div className="salutation cell -8of12">
      <div className="content">
        <div className="name">
          <center>
            <b>{ name }</b>
            <hr />
          </center>
        </div>
      </div>
    </div>
  </div>
);

export default header;
