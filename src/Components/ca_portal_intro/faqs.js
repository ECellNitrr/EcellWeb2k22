import React, { Component } from "react";
import "./caportal.css";

export default class Faq extends Component {
  render() {
    return (
      <div>
        <div>
          <h2
            style={{ marginTop: "100px", color: "white" }}
            className="heading-1 head1 head3"
          >
            FAQ's
          </h2>
        </div>

        <div
          className="accordion md-accordion "
          id="accordionEx"
          role="tablist"
          aria-multiselectable="true"
        >
          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "1400px" }}
          >
            <div className="card-header" role="tab" id="headingOne1">
              <h5 className="mb-0">
                What kind of work am I required to do?
              </h5>
            </div>

            <div
              id="collapseOne1"
              className="collapse show"
              role="tabpanel"
              aria-labelledby="headingOne1"
              data-parent="#accordionEx"
            >
              <div className="card-body">
                You will be doing a variety of tasks including social media
                managing, analysing trends, creating events/workshops and
                various other tasks designed to improve your skills.
              </div>
            </div>
          </div>

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "1400px" }}
          >
            <div className="card-header" role="tab" id="headingTwo2">
              <h5 className="mb-0">
                What will I gain out of it?
              </h5>
            </div>

            <div
              id="collapseTwo2"
              className="collapse show"
              role="tabpanel"
              aria-labelledby="headingTwo2"
              data-parent="#accordionEx"
            >
              <div className="card-body">
                You will gain an experience which will help you develop your
                time management skills, team work, network. Also{" "}
                <strong>certificates from E-Cell NIT Raipur</strong>, gift
                cards, and some of the exclusive perks given to the best
                performer.
              </div>
            </div>
          </div>

          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{ maxWidth: "1400px" }}
          >
            <div className="card-header" role="tab" id="headingThree3">
              <h5 className="mb-0">
                How will we receive updates about tasks?
              </h5>
            </div>

            <div
              id="collapseThree3"
              className="collapse show"
              role="tabpanel"
              aria-labelledby="headingThree3"
              data-parent="#accordionEx"
            >
              <div className="card-body">
                You will be informed about the task through the CA Portal,
                social media handles as well as whatsapp groups.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
