import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

export default function GroupedSelect() {
  return (
    <div
      style={{
        width: "90vw",
        display: "flex",
        justifyContent: "space-around",
        padding: "0% 5%",
      }}
    >
      <Grid container spacing={2}>
      <Grid item md={6} style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <FormControl
          sx={{ m: 1, minWidth: 320 }}
          style={{ background: "#d4d9d1", border: "none" }}
        >
          <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
            style={{ border: "none" }}
          >
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={6} style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <FormControl
          sx={{ m: 1, minWidth: 320 }}
          style={{ background: "#d4d9d1", border: "none" }}
        >
          <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Grouping"
            style={{ border: "none" }}
          >
            <option aria-label="None" value="" />
            <optgroup label="Category 1">
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
            </optgroup>
            <optgroup label="Category 2">
              <option value={3}>Option 3</option>
              <option value={4}>Option 4</option>
            </optgroup>
          </Select>
        </FormControl>
      </Grid>
      </Grid>
    </div>
  );
}
