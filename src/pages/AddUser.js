import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { name, email, contact, address } = state;

  const [error, setError] = useState("");

  const history = useHistory();

  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !address) {
      setError("Please fill all input fields");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
      <h2>Add User</h2>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleInputChange}
          type="email"
        />
        <br />
        <TextField
          id="contact"
          name="contact"
          label="Contact"
          value={contact}
          onChange={handleInputChange}
          type="number"
        />
        <br />
        <TextField
          id="contact"
          name="address"
          label="Address"
          value={address}
          onChange={handleInputChange}
          type="text"
        />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
