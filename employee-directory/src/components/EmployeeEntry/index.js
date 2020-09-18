import React from "react";
import "./style.css";

function EmployeeEntry(props) {
  return (

    <div className="row">
      <div className="img-container col-2">
        <img alt={props.name} src={props.image} style={{width: "75px", height: "75px"}} />
      </div>
      <div className="col-3">
       {props.name}
      </div>
      <div className="col-2">
        {props.phone}
      </div>
      <div className="col-3">
        {props.email}
      </div>
      <div className="col-2">
        {props.dob.split("T")[0]}
      </div>
    </div >
  );
}

export default EmployeeEntry;
