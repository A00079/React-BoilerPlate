import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

const LandingPage = (props) => {

  const handleNav = () => {
    props.history.push('Get-Started-Form');
  }

  return (
    <React.Fragment>
      Home rodney
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
