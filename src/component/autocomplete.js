import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

const filter = createFilterOptions();

export default function ComboBox(props) {
  const label = props.label || "Label";
  const [input, setInput] = React.useState("");
  const [options, setOptions] = React.useState(["apple", "banana"]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addOption = () => {
    //add async function to save new label to the DB
    setOptions([...options, input]);
    handleClose();
  };
  return (
    <>
      <Autocomplete
        key={options.length}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const isExisting = options.includes(params.inputValue);
          if (params.inputValue !== "" && !isExisting) {
            filtered.push(`+Add ${params.inputValue}`);
          }
          return filtered;
        }}
        onChange={(event, newValue) => {
          //pass input to popup and open the popup
          let isNewValue = newValue?.split(" ").includes("+Add");
          if (isNewValue) {
            setInput(newValue.replace("+Add ", ""));
            handleOpen();
          }
        }}
      />
      <AutoCompleteModel
        {...{
          handleClose,
          open,
          input,
          setInput,
          props,
          addOption,
          label
        }}
      />
    </>
  );
}

const AutoCompleteModel = (props) => {
  const { handleClose, open, input, setInput, addOption, label } = props;

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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`Add New ${label}`}
        </Typography>
        <TextField
          id="outlined-basic"
          label="value"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addOption} variant="contained">
          submit
        </Button>
      </Box>
    </Modal>
  );
};
