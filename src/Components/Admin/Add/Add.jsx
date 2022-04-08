import { IconButton } from "@mui/material";
import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useProductContext } from "../../../Context/ProductContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon fontSize="large" />
      </IconButton>
      <h2>Add new product</h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;