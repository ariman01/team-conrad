import React, { Component } from 'react';
import './visa-reward-register.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const classes = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },


}));

class VisaRewardRegister extends Component {


  render(){
    return (
        <div>
            <div>
            <ul>
              <li style={{paddingLeft:100}}> <img  style ={{width:125}} src="https://cdn.visa.com/cdn/assets/images/logos/visa/logo.png"/></li>
              <li style={{paddingLeft:60}}><a className="active" href="#home">Home</a></li>
              <li><a href="#news">Pay With Visa</a></li>
              <li><a href="#contact">Partner With Us</a></li>
              <li><a href="#about">Run Your Business</a></li>
              <li><a href="#about">Earn Student Rewards</a></li>
            </ul>
            </div>
            <div className="header-indicator"></div>
            <p style={{fontSize:20,color:"#000080"}}> Register for Visa Student Cashback Plan </p>


            <div className={classes.container} >
                <TextField
                  id="outlined-with-placeholder"
                  label="School Name"
                  placeholder="ex: Stanford University"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-textarea"
                  label="Email Id *"
                  placeholder="school email id"
                  multiline
                  className={classes.textField}
                  style= {{marginLeft:15}}
                  margin="normal"
                  variant="outlined"
                />

                <Button variant="contained" color="primary" size="large"  style={{marginLeft:15,height:50,marginTop:15}}> Register </Button>
              </div>
        </div>
    );
  }
}

export default VisaRewardRegister;
