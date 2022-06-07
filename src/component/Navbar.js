import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

export default function Navbar(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  const handleChange = () => {
    props.setPrefersDarkMode(!props.prefersDarkMode);
  };
  return (
    <Grid container>
      <Grid item xs={10}></Grid>
      <Grid item xs={2}>
        <Switch
          checked={props.prefersDarkMode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
    </Grid>
  );
}
