import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ButtonPrimary = ({ type, to }) => (
  <Link className="buttonPrimary" to={to}>
    <Button variant="contained" color="primary">
      Atras
    </Button>
  </Link>
);

export default ButtonPrimary;