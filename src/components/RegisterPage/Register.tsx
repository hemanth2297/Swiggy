import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
// import KeyboardDatePicker from '@material-ui/pickers';


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
            element.classList.add("blackbg")
            element.classList.remove("yellowbg", "redbg", "whitebg")
        }
    }
    optButtonOnsumbit = () => {
        this.setState({
            redirect: true
        })
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
            return <Redirect push to="/success" />
        }

        const otpButton = (<Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.optButtonOnsumbit()}
            className="Sumbit" >
            Register
    </Button>);

        const button = otpButton;
        return (
            <div>
                <Grid container component="main" className="RegisterPage" alignItems="center" justify="center" >
                    <Grid item xs={4} className="RegisterBox">
                        <Typography component="h1" align="center" variant="h5">
                            Sign Up</Typography>
                        <form className="Login Form" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="First Name"
                                name="first"
                                onChange={this.addToState}
                                autoComplete="off"
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Last Name"
                                name="last"
                                onChange={this.addToState}
                                autoComplete="off"
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Gender"
                                name="sex"
                                onChange={this.addToState}
                                autoComplete="off"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="DOB"
                                name="sex"
                                onChange={this.addToState}
                                autoComplete="off"
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="number"
                                label="Driving License Number"
                                name="dl"
                                onChange={this.addToState}
                                autoComplete="off"
                            />

                            {button}
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}