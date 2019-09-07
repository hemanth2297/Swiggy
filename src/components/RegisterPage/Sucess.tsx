import React from 'react';
import logo from '../../assets/images/success.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

export default class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    optButtonOnsumbit = () => {
        this.setState({
            redirect: true
        })
    }

    componentDidMount() {
        const element = document.getElementById("bodybg")
        if (element) {

            element.classList.remove("yellowbg", "redbg", "blackbg")
            element.classList.add("whitebg")
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/quiz" />
        }
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="Sucess-logo" alt="logo" />
                    <h1 style={{ color: "#61dbfb" }}>Registration Successful</h1>
                </div>
                <div style={{ margin: '50px' }}>
                    <Grid component="main" className="TermsPage" alignItems="center" justify="center">
                        <Grid item xs={6} className="TermsBox">
                            <Typography component="h1" align="center" variant="h5">Terms and Conditions</Typography>
                            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <Typography variant="subtitle2" gutterBottom>1) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                <Typography variant="subtitle2" gutterBottom>2) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                <Typography variant="subtitle2" gutterBottom>3) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                <Typography variant="subtitle2" gutterBottom>4) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                <Typography variant="subtitle2" gutterBottom>5) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                                <Typography variant="subtitle2" gutterBottom>6) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
                            </div>

                            <Button
                                type="button"
                                size="medium"
                                variant="contained"
                                color="primary"
                                onClick={() => this.optButtonOnsumbit()} >
                                Start Test
                    </Button>

                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}