import React from "react";

const Textfield = (props) => {
  return (
    <div>
      <div className="container d-flex justify-content-center gap-2 my-4">
        <input
          type="text"
          className="form-control"
          style={{width:"400px"}}
          placeholder="Enter Your Task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Textfield;
