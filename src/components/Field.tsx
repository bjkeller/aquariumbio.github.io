import * as React from "react";
import {
  FormErrors,
  IFormContext,
  FormContext,
} from "./Form";
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import type { FormValues } from './Form';

const useStyles = makeStyles((theme) => ({
  field: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 5,
  },
  input: {
    width: '100%',
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
  },
  label: {
    color: '#FFFFFF !important',
  }
}));

/* The available editors for the field */
type Editor = "textbox" | "multilinetextbox" | "dropdown" | "textfield";

export interface IValidation {
  rule: (values: FormValues, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  /* The unique field name */
  id: string;

  /* The label text for the field */
  label?: string;

  /* The editor for the field */
  editor?: Editor;

  /* The drop down items for the field */
  options?: string[];

  /* The field value */
  value?: any;

  /* The field validator function and argument */
  validation?: IValidation;

  /* The placeholder for the field */
  placeholder?: string;
}

export const Field = ({
  id,
  label,
  editor,
  options,
  value,
  placeholder
}: IFieldProps) => {

  const classes = useStyles();

  /**
   * Gets the validation error for the field
   * @param {FormErrors} errors - All the errors from the form
   * @returns {string[]} - The validation error
   */
  const getError = (errors: FormErrors): string => (errors ? errors[id] : "");

  /**
   * Gets the inline styles for editor
   * @param {FormErrors} errors - All the errors from the form
   * @returns {any} - The style object
   */
  const getEditorStyle = (errors: FormErrors): any =>
    getError(errors) ? { borderColor: "red" } : {};

  return (
    <FormContext.Consumer>
      {(context: IFormContext) => (
        <div className="form-group">
          {label &&
            <InputLabel
              htmlFor={id}
              className={classes.label}
            >
              {label}
            </InputLabel>}

          {editor!.toLowerCase() === "textbox" && (
            <input
              id={id}
              type="text"
              value={value}
              style={getEditorStyle(context.errors)}
              onChange={
                (e: React.FormEvent<HTMLInputElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            />
          )}

          {editor!.toLowerCase() === "textfield" && (
            // <div className={`${classes.field} form-control`}>
              <TextField
                variant="outlined"
                margin="dense"
                size="small"
                className={classes.input}
                type="text"
                id={id}
                // style={getEditorStyle(context.errors)}
                value={value}
                onChange={
                  (e: React.FormEvent<HTMLInputElement>) =>
                    context.setValues({ [id]: e.currentTarget.value })
                }
                onBlur={() => context.validate(id)}
                error={!!context.errors[id]}
                helperText={!!context.errors[id] ? getError(context.errors) : ' '}
                required
              />
            // </div>
          )}

          {editor!.toLowerCase() === "multilinetextbox" && (
            <div className={classes.field}>
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
                onBlur={() => context.validate(id)}
                error={!!context.errors[id]}
                helperText={!!context.errors[id] ? getError(context.errors) : ' '}
                required
              />
            </div>
          )}

          {editor!.toLowerCase() === "dropdown" && (
            <select
              id={id}
              name={id}
              value={value}
              style={getEditorStyle(context.errors)}
              onChange={
                (e: React.FormEvent<HTMLSelectElement>) =>
                  context.setValues({ [id]: e.currentTarget.value })
              }
              onBlur={() => context.validate(id)}
              className="form-control"
            >
              {options &&
                options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          )}

        </div>
      )}
    </FormContext.Consumer>
);
};

Field.defaultProps = {
  editor: "textfield"
};
