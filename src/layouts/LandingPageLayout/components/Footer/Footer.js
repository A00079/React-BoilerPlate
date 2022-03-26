import React from "react";
import logo from '../../../../assets/images/logo.png';
import { withRouter } from "react-router";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  const handleGoto = (url) => {
    props.history.push('/' + url);
  }
  return (
    <React.Fragment>
      <footer>
        Footer
      </footer>
    </React.Fragment>
  );
};

export default withRouter(Footer);
