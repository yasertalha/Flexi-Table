import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import Delete from "@material-ui/icons/Delete";
import "./styles.css";
import AddColModel from "./addColModel";

const createData = (name, Amount, id) => ({
  name,
  Amount,
  id
});

const CustomTableCell = ({ row, name, onChange, editRow }) => {
  return (
    <TableCell align="left">
      {editRow.includes(row.id) ? (
        <TextField
          multiline
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          variant="filled"
          style={{
            width: "100px",
            height: "auto",
            padding: "0px"
          }}
        />
      ) : (
        <Typography style={{ width: "100px", height: "auto" }}>
          {row[name]}
        </Typography>
      )}
    </TableCell>
  );
};

function TablePrototype(props) {
  const { rows, setRows } = props;

  const [previous, setPrevious] = React.useState({});
  const [editRow, setEditRow] = React.useState([]);

  const onToggleEditMode = (id) => {
    const editRowUpdate = editRow.includes(id)
      ? editRow.filter((e) => e !== id)
      : [...editRow, id];
    setEditRow(editRowUpdate);
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const restRows = rows.filter((e) => e.id !== id);
    setRows(restRows);
  };

  const addRow = () => {
    let id = Math.random();
    let emptyRow = createData("", "", id);
    setRows([emptyRow, ...rows]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper style={{ width: "80%", overflowX: "auto" }}>
        <Table key={rows.length} className={"table"} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={1}>
                <AddColModel />
              </TableCell>
              <TableCell align="left" colSpan={1}>
                Date
              </TableCell>
              <TableCell align="left" colSpan={1}>
                Loan From
              </TableCell>
              <TableCell align="left" colSpan={1}>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={1}>
                <Button onClick={addRow}>Row +</Button>
              </TableCell>
            </TableRow>

            {rows.map((row) => (
              <TableRow key={row.id} rowSpan={1}>
                <TableCell>
                  {editRow.includes(row.id) ? (
                    <>
                      <IconButton
                        aria-label="delete"
                        onClick={() => onRevert(row.id)}
                      >
                        <Delete sx={{ color: "red" }} fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() => onToggleEditMode(row.id)}
                      >
                        <DoneIcon fontSize="small" />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton
                        aria-label="delete"
                        onClick={() => onRevert(row.id)}
                      >
                        <Delete sx={{ color: "red" }} fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() => onToggleEditMode(row.id)}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </>
                  )}
                </TableCell>
                <CustomTableCell
                  {...{ row, name: "date", onChange, editRow }}
                />
                <CustomTableCell
                  {...{ row, name: "name", onChange, editRow }}
                />
                <CustomTableCell
                  {...{ row, name: "Amount", onChange, editRow }}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default TablePrototype;
