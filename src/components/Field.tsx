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
  white: {
    color: '#FFF !important',
  },

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
}

export const Field = ({
  id,
  label,
  editor,
  value,
  placeholder,
  support
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
        <div className="form-group">
          <InputLabel
            htmlFor={id}
            className={ support ? classes.black : classes.white}
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
        </div>
      )}
    </FormContext.Consumer>
  );
};

Field.defaultProps = {
  editor: "textfield",
  support: false,
};
