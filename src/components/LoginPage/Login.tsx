import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/gif/login.gif'
import { Redirect } from 'react-router-dom';

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.state = {
            showotp: false,
            number: "",
            otp: "",
            isNumberError: false,
            numberHelperText: "",
            isOtpError: false,
            otpHelperText: "",
            redirect: false
        }
    }

    componentDidMount() {
        const element = document.getElementById("bodybg")
        if (element) {
            element.classList.add("yellowbg")
            element.classList.remove("whitebg", "redbg", "blackbg")
        }
    }
    optButtonOnsumbit = () => {
        console.log(this.state.number.length)
        if (this.state.number.length !== 10) {
            this.setState({
                isNumberError: true,
                numberHelperText: "Invalid Number"
            })
        }
        else {
            this.setState({
                showotp: true,
            })
        }
    }
    validateButtonOnSubmit = () => {
        if (this.state.otp !== '123') {
            this.setState({
                isOtpError: true,
                otpHelperText: "Invalid OTP"
            })
        }
        else {
            this.setState({
                redirect: true
            })
        }

    }

    addToState = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
            isNumberError: false,
            numberHelperText: "",
            isOtpError: false,
            otpHelperText: ""
        })


    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/register" />
        }

        const otpButton = (<Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.optButtonOnsumbit()}
            className="Sumbit"
        >
            Generate Otp
    </Button>);

        const validateButton = (<Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.validateButtonOnSubmit()}
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
            helperText={this.state.otpHelperText}
            error={this.state.isOtpError}
            autoComplete="off"
        />) : ""

        const button = this.state.showotp ? validateButton : otpButton;
        return (
            <div>
                <div >
                    <img src={logo} alt="Loading" title="Loading" style={{ height: "100vh" }} />
                </div>
                <Grid container component="main" className="LoginPage" alignItems="center" justify="flex-end" >
                    <Grid item xs={3} className="LoginBox">
                        <Typography component="h1" align="center" variant="h5">
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
                                helperText={this.state.numberHelperText}
                                error={this.state.isNumberError}
                                disabled={this.state.showotp}
                                autoComplete="off"
                            />
                            {otpTextField}
                            {button}
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}