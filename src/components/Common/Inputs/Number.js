import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Input,
  FormControlLabel,
  Typography,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "white",
    },
  },
}));

const Text = (props) => {
  const classes = useStyles();
  const {
    label,
    name,
    placeholder,
    multiline,
    rows,
    onChange,
    register,
    value,
  } = props;

  return (
    <FormControl
      variant="outlined"
      fullWidth
      // size="small"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        ref={register}
        id={name}
        name={name}
        aria-describedby="my-helper-text"
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="number"
      />
      {/* <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText> */}
    </FormControl>
    // <FormControl variant="outlined" >
    // <FormControlLabel>Text</FormControlLabel>
    // <Input />
    // </FormControl>
  );
};
export default Text;
