import React from "react";
import FooterPage from '../components/footerpage';
import { makeStyles } from '@material-ui/core'
import { Form, FormFields, required, isEmail } from "../components/Form";
import { Field } from "../components/Field";

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
    },
    buttonDiv: {
      textAlign: 'center',
    },
    button: {
      marginTop: theme.spacing(1),
      background: '#40D3FD',
      color: '#FFF',
      '&.Mui-disabled': {
        backgroundColor: '#EFEFEF',
      }
    },
}))

export default function Support() {
  const classes = useStyles();
  const fields: FormFields = {
        firstName: {
            id: "firstName",
            label: "First Name",
            validation: { rule: required },
            editor: "textfield"
        },
        lastName: {
            id: "lastName",
            label: "Last Name",
            validation: { rule: required }
        },
        email: {
            id: "email",
            label: "Email",
            validation: { rule: isEmail }
        },
        lab: {
            id: "lab",
            label: "Lab",
            validation: { rule: required }
        },
        role: {
            id: "role",
            label: "Role",
            validation: { rule: required }
        },
        message: {
            id: "message",
            label: "Message",
            editor: "multilinetextbox",
            placeholder: "I’m having trouble with Aquarium."
        }
    }
  return (
    <FooterPage
      currentPage="support"
      subtitle="Need help or have questions? Send us a message — we're here for you."
      pageLeft="releases"
      pageRight="contributors"
    >
      <Form
        action="https://script.google.com/macros/s/AKfycbyCDq3JR-RzpQm_L8DC9sFQApKKmwcLYkX--5aNnODW2-v7Yh2GydolHbQkde3lbEUJ/exec"        fields={fields}
        classes={useStyles()}
        render={() => (
            <React.Fragment>
                <Field {...fields.firstName} support={true} />
                <Field {...fields.lastName} support={true} />
                <Field {...fields.email} support={true} />
                <Field {...fields.lab} support={true} />
                <Field {...fields.role} support={true} />
                <Field {...fields.message} support={true} />
            </React.Fragment>
        )}
        />
    </FooterPage>
  )
}
