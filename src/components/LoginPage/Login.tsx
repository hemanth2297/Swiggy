import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { any } from 'prop-types';

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            showotp: false,
            number: "",
            otp: any,
        }
    }


    validatenumber = (value: string) => {
        if (value.length !== 3) {
            const element = document.getElementById("number")
            if (element) {
                element.classList.add("inValid")
            }
            return false
        }
        return true
    }
    optbuttonOnsumbit = () => {
        if (this.validatenumber(this.state.number)) {
            this.setState({
                showotp: true,
            })
        }
    }

    addToState = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
        const element = document.getElementById(event.target.name)
        if (element) {
            element.classList.remove("inValid")
        }

    }

    render() {

        const otpButton = (<Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.optbuttonOnsumbit()}
            className="Sumbit"
        >
            Generate Otp
    </Button>);

        const validateButton = (<Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="Sumbit"
        >
            Validate
        </Button>);

        const otpTextField = this.state.showotp ? (<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="otp"
            label="OTP"
            type="password"
            id="otp"
            value={this.state.otp}
            onChange={this.addToState}
        />) : ""

        const button = this.state.showotp ? validateButton : otpButton;
        return (
            <Grid container component="main" >
                <CssBaseline />
                <div className='LoginBox xs-12 sm-8 md-5'>
                    <div className="LoginSubBox">
                        <Typography component="h1" variant="h5">
                            Sign in</Typography>
                        <form className="Login Form" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Mobile Number"
                                name="number"
                                value={this.state.number}
                                autoFocus
                                onChange={this.addToState}
                            />
                            {otpTextField}
                            {button}
                        </form>
                    </div>
                </div>
            </Grid>
        );
    }
}