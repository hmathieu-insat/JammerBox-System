import "../CSS/Background.css";
import "../CSS/MainPage.css";
import "../CSS/ShowTestDiv.css";
import React from "react";

export default function POPOSSpace(props) {
    const { id, first_name, last_name, email, gender, ip_address } = props;
    
    return (
    <div className="group-13">
        <div className="rectangle-19">
        <p className="txt-8105 flex-hcenter">{last_name} </p>

        </div>
        <div className="group-814 flex-row-vend">
              <div className="group-17">
              <div className="group-514">
                <p className="txt-311">Date : {first_name}</p>
                <p className="txt-311">Result : {email}</p>
                </div>
                
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qlkpf4n6e3i-36%3A12?alt=media&token=76f599da-6cd1-4112-8b99-28659b6695ce"
                alt="Not Found"
                className="replay"
              />
        </div>
    </div>
    )
}