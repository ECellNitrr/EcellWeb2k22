import React, { Component } from "react";
import "./caportal.css";

export default class contacts extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="heading-1 hd">PUBLIC RELATIONS TEAM</h2>
        </div>
        <div>
          <p style={{ textAlign: "center", color: "white" }}>
            In case of any queries,contact-
          </p>
        </div>
        <div className="flex-box justify-content-center">
          <div className="individual-tabs">
            <p
              style={{
                textAlign: "center",
                fontSize: "100px",
                color: "#254C6D",
              }}
            >
              <i className="fas fa-user-circle"></i>
            </p>
            <div>
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                Arpita Shrivastava
              </h4>
              <h6
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                <a href="mailto:arpita.shrivastava72@gmail.com">
                  arpita.shrivastava72@gmail.com
                </a>
              </h6>
              <h5
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                <a style={{ color: "white" }} href="tel:8435249197">
                  7389756762
                </a>
              </h5>
            </div>
          </div>

          <div className="individual-tabs">
            <p
              style={{
                textAlign: "center",
                fontSize: "100px",
                color: "#254C6D",
              }}
            >
              <i className="fas fa-user-circle"></i>
            </p>
            <h4
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              Ayush Pandey
            </h4>
            <h6
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              <a href="mailto:ayushp_1@live.com">ayushp_1@live.com</a>
            </h6>
            <h5
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              <a style={{ color: "white" }} href="tel:7974443722">
                9131832016
              </a>
            </h5>
          </div>

          <div className="individual-tabs">
            <p
              style={{
                textAlign: "center",
                fontSize: "100px",
                color: "#254C6D",
              }}
            >
              <i className="fas fa-user-circle"></i>
            </p>
            <h4
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              Shreyash Royzada
            </h4>
            <h6
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              <a href="mailto:vaishnavisharma40928@gmail.com">
                shreyashakhil@gmail.com
              </a>
            </h6>
            <h5
              style={{ textAlign: "center", fontWeight: "800", color: "white" }}
            >
              <a style={{ color: "white" }} href="tel:9571542120">
                7587395821
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
