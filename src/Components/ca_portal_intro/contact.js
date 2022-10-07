import React, { Component } from "react";
import prHC_contactData from "./prHC_contactData.json";
import "./caportal.css";

export default class contacts extends Component {
  render() {
    let prhclist = prHC_contactData.map((HC) => (
      <div className="av_box" key={HC.id}>
        <div className="individual-tabs">
          <p
            style={{
              fontSize: "100px",
              color: "#254C6D",
            }}
          >
            <i className="fas fa-user-circle"></i>
          </p>
          <div>
            <h4
              style={{
                fontWeight: "800",
              }}
            >
              {HC.name}
            </h4>
            <h6
              style={{
                marginTop: "15px",
                fontSize: "200",
              }}
            >
              <a className="pr_email" href={`mailto:${HC.email}`}>
                {HC.email}
              </a>
            </h6>
            <h5
              style={{
                marginTop: "15px",
              }}
            >
              <a className="pr_phone" href={`tel:+91 ${HC.phone}`}>
                {HC.phone}
              </a>
            </h5>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div>
          <h2 className="heading-1 hd">PUBLIC RELATIONS TEAM</h2>
        </div>
        <div>
          <p style={{ textAlign: "center", color: "white", fontWeight: "600" }}>
            In case of any queries,contact-
          </p>
        </div>
        <div>
          <div className="photo_container">{prhclist}</div>
        </div>
      </div>
    );
  }
}
