import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import AutocompleteDropdown from "./autocomplete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function AddColModel() {
  const [colName, setColName] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>col +</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <GetColName {...{ colName, setColName }} />
          <RowRadioButtonsGroup />
        </Box>
      </Modal>
    </div>
  );
}

const GetColName = (props) => {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        fill column details
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 1 }}>
        <TextField id="outlined-basic" label="Column Name" variant="outlined" />
      </Typography>
    </>
  );
};

function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mb: 1 }}>
        select row category
      </FormLabel>
      <RadioGroup
        Column
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="textField"
          control={<Radio />}
          label={<TextField name={""} />}
        />
        <FormControlLabel
          value="autoCompleteDropdown"
          control={<Radio />}
          label={<AutocompleteDropdown />}
        />
        <FormControlLabel
          value="switch"
          control={<Radio />}
          label={<Switch />}
        />
      </RadioGroup>
    </FormControl>
  );
}
