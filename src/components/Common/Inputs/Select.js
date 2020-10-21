import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Input,
  FormControlLabel,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "white",
  },
  outlined: {
    backgroundColor: "white",
    // borderColor: "white",
  },
  selectMenu: {
    backgroundColor: "white",
  },
  // input: {
  //   backgroundColor: "red",
  //   // height: theme.spacing(1),
  // },
}));

const TextSelect = (props) => {
  const classes = useStyles();
  const { label, name, placeholder, options, onChange } = props;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    variant: "menu",
  };
  return (
    <FormControl
      className={classes.formControl}
      fullWidth
      id={name}
      variant="outlined"
      // size={props.size}
      // margin="none"
    >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        onChange={onChange}
        label={label}
        name={name}
        value={props?.value}
        MenuProps={MenuProps}
        classes={{
          root: classes.root,
          outlined: classes.outlined,
        }}
      >
        {options.map((option, index) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

TextSelect.defaultProps = {
  size: "medium",
};
export default TextSelect;
