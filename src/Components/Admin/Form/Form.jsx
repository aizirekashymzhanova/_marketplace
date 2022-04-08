import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import "./Form.css";
const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  img: "",
};

const Form = ({ saveValues, compForEdit, oneProd, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //todo ===> EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);
  useEffect(() => {
    if (compForEdit && oneProd) {
      setInpValues(oneProd);
    }
  }, [oneProd]);

  //todo ===> END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };

    saveValues(obj);
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="form"
      >
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Cakes"}>Cakes</MenuItem>
            <MenuItem value={"CheeseCakes"}>CheeseCakes</MenuItem>
            <MenuItem value={"Puddings"}>Puddings</MenuItem>
            <MenuItem value={"Tarts"}>Tarts</MenuItem>
            <MenuItem value={"cookies"}>Cookies</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
        />
        <Button type="submit" variant="contained" color="warning">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;