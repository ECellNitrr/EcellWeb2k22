import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { user_type } from "../../constants";
import { logout } from '../../../actions/authActions'

const Logout = (props) => {
  const go_to_portal = (e) => {
    props.history.push("/caportal");
  };

  let Button = null;

  //Destructure props
  const { auth } = props;

  if (auth && auth.user_type === "CDC") {
    Button = (
      <button
        onClick={(e) => go_to_portal(e)}
        className="btn btn-primary"
      >
        Manage Startup portal
      </button>
    );
  }

  return (
    <div>
      <div className="basic-details">
        <strong>UserName:</strong>
        {auth && auth.first_name} {auth && auth.last_name}
      </div>
      <div className="basic-details">
        <strong>Email:</strong>
        {auth && auth.email}
      </div>
      <div className="basic-details">
        <strong>Member Type:</strong>
        {auth && user_type[auth.user_type]}
      </div>
      {Button}
      <hr />
      <div>
        <p className="sure-text">Are you sure you want to logout?</p>
        <button className="ls-button" onClick={(e) => {props.logout(); props.closeModal();}}>Logout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logout }), withRouter)(Logout);
