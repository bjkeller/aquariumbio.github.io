import React, { Children } from 'react'
import { makeStyles } from '@material-ui/core'
import Contanier from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { ContactUsForm } from './ContactUsForm';
import axios from 'axios';
import ThankYou from './thankyou';
import Button from '@material-ui/core/Button';

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
      background: '#40D3FD',
      color: '#FFF'
    },

}));

export interface ContactFormProps {
    commentField?: boolean,
}

const ContactForm = ({ commentField, }: ContactFormProps) => {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent) => {

      event.preventDefault(); // prevent form submission

      // Define types
      const target = event.target as typeof event.target & {
        fname: { value: string };
        lname: { value: string };
        email: { value: string };
        lab: { value: string };
        role: { value: string };
        message?: { value: string };
      };

      // Typechecks
      const fname = target.fname.value;
      const lname = target.lname.value;
      const email = target.email.value;
      const lab = target.lab.value;
      const role = target.role.value;
      const message = target.message ? target.message.value : '';

      const url = "https://script.google.com/macros/s/AKfycbzYVzaqdK9KI5CJr8lY4RQLqaCqr6rhGkeK5XDwtt1tsKEk_FwP-rmgrkU204BJ_337/exec";
      console.log(event);
      debugger;

      // axios({
      //   method: "post",
      //   url: url,
      //   data: data,
      //   headers: {
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   Accept: "application/x-www-form-urlencoded"
        // },
      // })
      // .then(function (response) {
      //   // handle success
      //   var thankYouMessage = form.querySelector(".thankyou_message");
      //   if (thankYouMessage) {
      //     thankYouMessage.style.display = "block";
      //   }
      //   console.log(response);
      // })
      // .catch(function (response) {
      //   //handle error
      //   console.log(response);
      // });
  };

    // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var fields = Object.keys(elements);

    var honeypot;
    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {}

    fields.forEach(function(name){
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    // formData.formDataNameOrder = JSON.stringify(Object.keys(fields));
    // formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    // formData.formGoogleSendEmail
    //   = form.dataset.email || ""; // no email by default
    return {data: formData, honeypot: honeypot};
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;
        var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');

    console.log(data);

    disableAllButtons(form);
    const url = "https://script.google.com/macros/s/AKfycbzYVzaqdK9KI5CJr8lY4RQLqaCqr6rhGkeK5XDwtt1tsKEk_FwP-rmgrkU204BJ_337/exec";
    axios({
        method: "post",
        url: url,
        data: encoded,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/x-www-form-urlencoded"
        },
      })
      .then(function (response) {
        // handle success
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });


    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', url);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function() {
    //     // if (xhr.readyState === 4 && xhr.status === 200) {
    //       // form.reset();
    //       // var formElements = form.querySelector(".form-elements")
    //       // if (formElements) {
    //       //   formElements.style.display = "none"; // hide form
    //       // }
    //       // var thankYouMessage = form.querySelector(".thankyou_message");
    //       // if (thankYouMessage) {
    //       //   thankYouMessage.style.display = "block";
    //       // }
    //     // }
    // };
    // url encode form data for sending as post data
  //   var encoded = Object.keys(data).map(function(k) {
  //       return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  //   }).join('&');
  //   xhr.send(encoded);
  }

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  return (
    <Contanier>
      <ContactUsForm />
      <form
        method="post"
        // Send form submissions to google sheets and email a copy to associated email
        // action="https://script.google.com/macros/s/AKfycbzYVzaqdK9KI5CJr8lY4RQLqaCqr6rhGkeK5XDwtt1tsKEk_FwP-rmgrkU204BJ_337/exec"
        className={`${classes.form} gform`}
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <div className="form-elements">
          {/* <div className={classes.field}> */}
            <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="fname" id="fname" label="First Name" required />
          {/* </div> */}

          {/* <div className={classes.field}> */}
            <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="lname" id="lname" label="Last Name" required />
          {/* </div> */}

          {/* <div className={classes.field}> */}
            <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="email" name="email" id="email" label="Email" required />
          {/* </div> */}

          {/* <div className={classes.field}> */}
            <TextField variant="outlined" margin="dense" size="small" className={classes.input} type="text" name="lab" id="lab" label="Lab/Organization/Company" required />
          {/* </div> */}

          {/* <div className={classes.field}> */}
            {/* TO DO: Roles should be a select menu */}
            <TextField variant="outlined" margin="dense" size="medium" className={classes.input} type="text" name="role" id="role" label="Role" required/>
          {/* </div> */}

          {commentField && (
              // <div className={classes.field}>
                <TextField
                  type="text"
                  rows="4"
                  placeholder="I’m having trouble with Aquarium."
                  id="message"
                  name="message"
                  className={classes.input}
                  multiline
                  variant="outlined"
                />
              // </div>
            )}

          <Button variant="contained" type="submit" className={classes.button}>Contact Now</Button>
        </div>

        <div className="thankyou_message" style={{ display: "none" }}>
          <ThankYou />
        </div>
      </form>
    </Contanier>
  )
}

ContactForm.defaultProps = {
  commentField: false,
};

export default ContactForm
