import React, { Children } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';
import Contanier from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    form: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
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
    button: {
      marginTop: theme.spacing(1),
    },

}));

export interface ContactFormProps {
    commentField?: boolean,
}

const ContactForm = ({ commentField, }: ContactFormProps) => {
  const classes = useStyles();
  return (
    <Contanier>
      <form method="post" action="#" className={classes.form}>
        <div className={classes.field}>
          <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="first-name" id="first-name" label="First Name" />
        </div>

        <div className={classes.field}>
          <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="last-name" id="last-name" label="Last Name"/>
        </div>

        <div className={classes.field}>
          <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="email" id="email" label="Email"/>
        </div>

        <div className={classes.field}>
          <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="lab" id="lab" label="Lab/Organization/Company"/>
        </div>

        <div className={classes.field}>
          {/* TO DO: Roles should be a select menu */}
          <TextField variant="outlined" margin="dense" size="medium" className={classes.input} type="text" name="role" id="role" label="Role"/>
        </div>

        {commentField && (
            <div className={classes.field}>
              <TextField
                type="text"
                rows="4"
                placeholder="I’m having trouble with Aquarium."
                id="contact-message"
                name="contact-message"
                className={classes.input}
                multiline
                variant="outlined"
              />
            </div>
          )}

        <Button variant="contained" type="submit" className={classes.button}>Contact Now</Button>
      </form>
    </Contanier>
  )
}

ContactForm.defaultProps = {
  commentField: false,
};

export default ContactForm
