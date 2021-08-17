import * as React from "react";
import type { IFieldProps } from './Field';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ThankYou from './thankyou';

export interface IFormContext
  extends FormState {
  /* Function that allows values in the values state to be set */
  setValues: (values: FormValues) => void;

    /* Function that validates a field */
  validate: (fieldName: string) => void;
}
/*
 * The context which allows state and functions to be shared with Field.
 * Note that we need to pass createContext a default value which is why undefined is unioned in the type
 */
// export const FormContext = React.createContext<IFormContext|undefined>(undefined);
export const FormContext = React.createContext({} as IFormContext);

interface MuiStyle {
  [key: string]: string | number | Function;
}
export interface FormFields {
  [key: string]: IFieldProps;
}
interface FormProps {
  /* The http path that the form will be posted to */
  action: string;

  /* The props for all the fields on the form */
  fields: FormFields;

  /* A prop which allows content to be injected */
  render: () => React.ReactNode;

  /* Style props for MUI makeStyles hook */
  classes: {
    form: MuiStyle;
    buttonDiv: MuiStyle;
    button: MuiStyle;
  }
}

export interface FormValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any;
}

export interface FormErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string;
}

export interface FormState {
  /* The field values */
  values: FormValues;
  /* The field validation error messages */
  errors: FormErrors;

  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean;
}

/**
 * Validates whether a field has a value
 * @param {FormValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @returns {string} - The error message
 */
export const required = (values: FormValues, fieldName: string): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ""
    ? "This must be populated"
    : "";

/**
 * Validates whether a field is a valid email
 * @param {FormValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @returns {string} - The error message
 */
export const isEmail = (values: FormValues, fieldName: string): string =>
  values[fieldName] &&
  values[fieldName].search(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
    ? "This must be in a valid email format"
    : "";

/**
 * Validates whether a field is within a certain amount of characters
 * @param {FormValues} values - All the field values in the form
 * @param {string} fieldName - The field to validate
 * @param {number} length - The maximum number of characters
 * @returns {string} - The error message
 */
export const maxLength = (
  values: FormValues,
  fieldName: string,
  length: number
): string =>
  values[fieldName] && values[fieldName].length > length
    ? `This can not exceed ${length} characters`
    : "";

export class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    const errors: FormErrors = {};
    const values: FormValues = {};
    this.state = {
      errors,
      values
    };
  };

  /**
   * Stores new field values in state
   * @param {FormValues} values - The new field values
  */
  setValues = (values: FormValues) => {
    this.setState({ values: { ...this.state.values, ...values } });
  };

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {FormErrors} errors - The field errors
   */
  haveErrors(errors: FormErrors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (this.validateForm()) {
      const submitSuccess: boolean = await this.submitForm();
      this.setState({ submitSuccess });
    }
  };

  /**
   * Executes the validation rules for all the fields on the form and sets the error state
   * @returns {boolean} - Returns true if the form is valid
   */
  validateForm(): boolean {
    const errors: FormErrors = {};
    Object.keys(this.props.fields).map((fieldName: string) => {
      errors[fieldName] = this.validate(fieldName);
    });
    this.setState({ errors });
    return !this.haveErrors(errors);
  };

  /**
   * Executes the validation rule for the field and updates the form errors
   * @param {string} fieldName - The field to validate
   * @returns {string} - The error message
   */
  validate = (fieldName: string): string => {
    let newError: string = "";

    if (
      this.props.fields[fieldName] &&
      this.props.fields[fieldName].validation
    ) {
      newError = this.props.fields[fieldName].validation!.rule(
        this.state.values,
        fieldName,
        this.props.fields[fieldName].validation!.args
      );
    }
    this.state.errors[fieldName] = newError;
    this.setState({
        errors: { ...this.state.errors, [fieldName]: newError }
    });
    return newError;
  };

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  async submitForm(): Promise<boolean> {
    var data = this.state.values;
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');

    const submitSuccess = await axios({
      method: "post",
      url: this.props.action,
      data: encoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/x-www-form-urlencoded"
      },
    })
    .then(function (response) {
      // handle success
      return true;
    })
    .catch(function (response) {
      //handle error
      if (response.status === 400) {
        /* Map the validation errors to IErrors */
        const errors: FormErrors = {};
        Object.keys(response).map((key: string) => {
          // For ASP.NET core, the field names are in title case - so convert to camel case
          const fieldName = key.charAt(0).toLowerCase() + key.substring(1);
          errors[fieldName] = response[key];
        });

        this.setState({ errors});
      }
      return false
    });
    return submitSuccess;
  }

  render() {
    const { submitSuccess, errors } = this.state;
    const context: IFormContext = {
      ...this.state,
      setValues: this.setValues,
      validate: this.validate,
    };
    return (
      <FormContext.Provider value={context}>
        {submitSuccess ? (<ThankYou />) : (
          <form onSubmit={this.handleSubmit} noValidate={true} className={`gfrom ${this.props.classes.form}`}>
            <div className="container">
              {this.props.render()}

              <div className={`${this.props.classes.buttonDiv} form-elements form-group`}>
                <Button
                  variant="contained"
                  type="submit"
                  className={this.props.classes.button}
                  disabled={this.haveErrors(errors)}
                >
                    Contact Now
                </Button>
              </div>

              {submitSuccess === false &&
                !this.haveErrors(errors) && (
                  <div className="alert alert-danger" role="alert">
                    Sorry, an unexpected error has occurred
                  </div>
                )}

              {submitSuccess === false &&
                this.haveErrors(errors) && (
                  <div className="alert alert-danger" role="alert">
                    Sorry, the form is invalid. Please review, adjust and try again
                  </div>
                )}
            </div>
          </form>
        )}
      </FormContext.Provider>
    );
  }
}
