import * as React from "react";
import {
  FormErrors,
  IFormContext,
  FormContext,
} from "./Form";
import { makeStyles, capitalize } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import type { FormValues } from './Form';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  field: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
  },
  white: {
    color: '#FFF !important',
  },
  boop: {
    display: 'block',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '26px',
    letterSpacing: '0px',
    paddingLeft: theme.spacing(3),
  }
}));

/* The available editors for the field */
type Editor = "multilinetextbox" | "dropdown" | "textfield";

export interface IValidation {
  rule: (values: FormValues, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label: string;

  /* The editor for the field */
  editor?: Editor;

  /* The field value */
  value?: any;

  /* The field validator function and argument */
  validation?: IValidation;

  /* The placeholder for the field */
  placeholder?: string;

  /* Is the field on a support form */
  support?: boolean;

  /* The drop down items for the field */
  options?: string[];
}

export const Field = ({
  id,
  label,
  editor,
  value,
  placeholder,
  support,
  options
}: IFieldProps) => {

  const classes = useStyles();

  /**
   * Gets the validation error for the field
   * @param {FormErrors} errors - All the errors from the form
   * @returns {string[]} - The validation error
   */
  const getError = (errors: FormErrors): string => (errors ? errors[id] : "");

  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className={`form-group ${classes.field}`}>
          <InputLabel
            htmlFor={id}
            className={ support ? '' : classes.white}
          >
            {label}
          </InputLabel>

          {editor!.toLowerCase() === "textfield" && (
            <TextField
              variant="outlined"
              margin="dense"
              size="small"
              className={classes.input}
              type="text"
              id={id}
              value={value}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => id === 'email' && context.validate(id)}
              error={!!context.errors[id]}
              helperText={!!context.errors[id] ? getError(context.errors) : ' '}
              required
            />
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <TextField
              type="text"
              margin="dense"
              multiline
              rows="4"
              placeholder={placeholder}
              className={classes.input}
              variant="outlined"
              id={id}
              value={value}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              // onBlur={() => context.validate(id)}
              error={!!context.errors[id]}
              helperText={!!context.errors[id] ? getError(context.errors) : ' '}
              required
            />
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <TextField
              select
              margin="dense"
              variant="outlined"
              id={id}
              name={id}
              value={value}
              placeholder={placeholder}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              // onBlur={() => context.validate(id)}
              className={classes.input}
            >
              {options &&
                options.map((option) => (
                  <MenuItem key={option} value={option} className={classes.boop}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          )}
        </div>
      )}
    </FormContext.Consumer>
  );
};

Field.defaultProps = {
  editor: "textfield",
  support: false,
};
