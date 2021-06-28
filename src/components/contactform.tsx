import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Contanier from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
      backgroundColor: theme.palette.common.white,
      borderRadius: 0,
      borderColor:theme.palette.common.white,
      width: '100%',
      paddingLeft: 20,
    },
    label: {
      color: '#FFF',
      fontWeight: 'normal'
    },
    button: {
      marginTop: 50
    }
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <Contanier>
      <form method="post" action="#" className={classes.form}>
        <div className={classes.field}>
          <label>
            <Typography variant="caption" className={classes.label}>
              First Name
            </Typography>
          </label>
          <InputBase className={classes.input} type="text" name="first-name" id="first-name" placeholder="First Name"/>
        </div>

        <div className={classes.field}>
          <label>
            <Typography variant="caption" className={classes.label}>
              Last Name
            </Typography>
          </label>
          <InputBase className={classes.input} type="text" name="last-name" id="last-name" placeholder="Last Name" />
        </div>

        <div className={classes.field}>
          <label>
            <Typography variant="caption" className={classes.label}>
              Email
            </Typography>
          </label>
          <InputBase className={classes.input} type="text" name="email" id="email" placeholder="Email" />
        </div>

        <div className={classes.field}>
          <label>
            <Typography variant="caption" className={classes.label}>
              Lab/Organization/Company
            </Typography>
          </label>
          <InputBase className={classes.input} type="text" name="lab" id="lab" placeholder="Lab/Organization/Company" />
        </div>

        <div className={classes.field}>
          <label>
            <Typography variant="caption" className={classes.label}>
              Role
            </Typography>
          </label>
          {/* TO DO: Roles should be a select menu */}
          <InputBase className={classes.input} type="text" name="role" id="role" placeholder="Role" />
        </div>
        <Button variant="contained" type="submit" className={classes.button}>Contact Now</Button>
      </form>
    </Contanier>
  )
}

export default ContactForm
