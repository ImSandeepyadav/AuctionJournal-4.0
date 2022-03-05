import { useState } from "react";
import { Button, Card, CardActionArea, Dialog, Typography, TextField, IconButton, InputAdornment, CircularProgress, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { BiErrorCircle, BiShow, BiHide } from 'react-icons/bi';
import axios from 'axios';
import validator from 'validator';
import { t } from 'typy';
import { ReactComponent as AucLoginImg } from '../../../static/aucLogin.svg';
import { ReactComponent as BidLoginImg } from '../../../static/bidLogin.svg';


const useStyles = makeStyles(() => ({
    button: {
        backgroundColor: '#000',
        borderRadius: 4,
        textTransform: "none",
        color: '#fff',
        '&:hover': {
            backgroundColor: '#000',
        }
    },
}))

const Login = (props) => {
    const classes = useStyles();
    const history = useNavigate();

    const [ loading, setLoading ] = useState(false);
    const [ userType, setUserType ] = useState(null);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false);
    const [ resetEmailSent, setResetEmailSent ] = useState(false);

    const initError = {
        email: false,
        password: false,
        loginError: false,
    }
    
    const [ error, setError ] = useState(initError);
    const [ loginErrorMessage, setLoginErrorMessage ] = useState('');

    const handleClose = () => {
        setLoading(false);
        setUserType(null);
        setEmail('');
        setPassword('');
        setShowPassword(false);
        setError(initError);
        setLoginErrorMessage('');
        setResetEmailSent(false);
        props.onClose();
    }

    const validate = () => {
        let isValid = true;
        let newError = { ...error };
        const payload = {
            Email: email,
            password: password,
        };

        if (!validator.isEmail(email)) {
          isValid = false;
          newError = { ...newError, email: true };
        }

        if (t(password).isEmptyString) {
            isValid = false;
            newError = { ...newError, password: true };
        }

        if (!isValid) {
            setError(newError);
        }

        return { isValid, payload };
    }

    const handleSubmitAuctioneer = () => {
        const { isValid, payload } = validate();

        if (isValid) {
            setLoading(true);
            axios.post(`${process.env.REACT_APP_BASE_URL}api/loginAuctioneer`, payload)
                .then((response) => {
                    setLoading(false);
                    console.log(response);
                    sessionStorage.setItem(
                      "user",
                      JSON.stringify({ ...response.data, role: 'auctioneer' }),
                    );

                    history.push("/auctioneerdashboard");
                    
                })
                .catch((error) => {
                    setLoading(false);
                    const newError = { ...error, loginError: true };
                    setError(newError);
                    setLoginErrorMessage(error.response.data && error.response.data.message ? error.response.data.message : 'Could not log in. Please try again in some time.');
                })
        }
    }

    const handleSubmitBidder = () => {
        const { isValid, payload } = validate();

        if (isValid) {
            setLoading(true);
            axios.post(`${process.env.REACT_APP_BASE_URL}api/loginBidder`, payload)
                .then((response) => {
                    setLoading(false);

                    sessionStorage.setItem(
                      "user",
                      JSON.stringify({ ...response.data, role: 'bidder' }),
                    );
                    
                    history.push("/bidderdashboard");
                })
                .catch((error) => {
                    setLoading(false);
                    const newError = { ...error, loginError: true };
                    setError(newError);
                    setLoginErrorMessage(error.response.data && error.response.data.message ? error.response.data.message : 'Could not log in. Please try again in some time.');
                })
        }
    }

    const handleResetPassword = () => {
        if (validator.isEmail(email)) {
            setLoading(true);
            const type = userType === 'resetPasswordBidder' ? 'forgotPasswordBidder' : 'forgotPasswordAuctioneer';
            axios.post(`${process.env.REACT_APP_BASE_URL}api/${type}`, { "Email": email })
                .then(() => {
                    setResetEmailSent(true);
                    setLoading(false);
                })
                .catch(() => {
                    setResetEmailSent(true);
                    setLoading(true);
                })
        } else {
            setError({...error, email: true});
        }
    }

    return (
        <Dialog open={props.open} onClose={() => {
            if (!loading) {
                handleClose();
            }
        }}>
            {
                userType === null
                    ?   <div style={{padding: "16px 32px"}}>
                            <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', width: 100}}>
                                <Typography>
                                    You are
                                </Typography>
                            </div>
                            <div style={{padding: "16px 0px 0px 0px", display: 'flex', width: '340px', justifyContent: 'space-between'}}>
                                <Card style={{width: 160}} elevation={4}>
                                    <CardActionArea onClick={() => setUserType("auctioneer")}>
                                        <div>
                                        {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/aucLogin.svg`} alt="Auctioneer Image" width={160} /> */}
                                        <AucLoginImg style={{width: 160}} />
                                        </div>
                                        <Button
                                            className={classes.button}
                                            variant='contained'
                                            disableElevation
                                            fullWidth
                                            disabled={loading}
                                        >
                                            AN AUCTIONEER
                                        </Button>
                                    </CardActionArea>
                                </Card>
                                <Card style={{width: 160}} elevation={4}>
                                    <CardActionArea onClick={() => setUserType("bidder")}>
                                        <div>
                                            {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/bidLogin.svg`} alt="Bidder Image" width={160} /> */}
                                            <BidLoginImg style={{width: 160}} />
                                        </div>
                                        <Button
                                            className={classes.button}
                                            variant='contained'
                                            disableElevation
                                            fullWidth
                                            disabled={loading}
                                        >
                                            A BIDDER
                                        </Button>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                    :   null
            }
            {
                userType === 'bidder'
                    ?   <div style={{display: 'flex'}}>
                            <div>
                                {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/bidLogin.svg`} alt="Bidder Image" height={300} /> */}
                                <BidLoginImg style={{height: 300}} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px'}}>
                                <div>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', width: 150}}>
                                        <Typography>
                                        Bidder Sign In
                                        </Typography>
                                    </div>
                                    <div style={{height: 24}} />
                                    <div>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            disabled={loading}
                                            fullWidth
                                            error={error.email}
                                            helperText={error.email ? "Please enter a valid email address." : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            disabled={loading}
                                            type={showPassword ? "text" : "password" }
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                      <IconButton style={{padding: 4}} onClick={() => {
                                                          setShowPassword(!showPassword);
                                                      }}>
                                                          {
                                                              showPassword ? <BiHide /> : <BiShow />
                                                          }
                                                      </IconButton>
                                                  </InputAdornment>
                                                ),
                                            }}
                                            fullWidth
                                            error={error.password}
                                            helperText={error.password ? "Password is required to login." : ""}
                                        />
                                        <div style={{height: 8}} />
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Link onClick={() => setUserType("resetPasswordBidder")}>Forgot Password ?</Link>
                                        </div>
                                        <div style={{height: 12}} />
                                        {
                                            error.loginError && loginErrorMessage && loginErrorMessage !== ''
                                                ?   <>
                                                        <div style={{height: 12}} />
                                                        <Typography style={{color: 'red', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                            <BiErrorCircle style={{marginRight: 8}} /> {loginErrorMessage}
                                                        </Typography>
                                                    </>
                                                :   null
                                        }
                                        <div className={classes.btnSubmit}>
                                            <Button 
                                                onClick={handleSubmitBidder} 
                                                className={classes.button}
                                                variant='contained'
                                                disableElevation
                                                fullWidth
                                                disabled={loading}
                                            >
                                                <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                                    {
                                                        loading
                                                            ?   <CircularProgress size={20} />
                                                            :   <span style={{flexGrow: 1}}>Sign In</span>
                                                    }
                                                </div>
                                            </Button>
                                        </div>
                                        <div style={{height: 12}} />
                                        <p style={{textAlign: 'center'}}>Dont have an acount? <Link onClick={props.handleSignUp} disabled={loading}>Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :   null
            }
            {
                userType === 'auctioneer'
                    ?   <div style={{display: 'flex'}}>
                            <div>
                                {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/aucLogin.svg`} alt="Auctioneer Image" height={300} /> */}
                                <AucLoginImg style={{height: 300}} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px'}}>
                                <div>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', width: 150}}>
                                        <Typography>
                                            Auctioneer Sign In
                                        </Typography>
                                    </div>
                                    <div style={{height: 24}} />
                                    <div>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            disabled={loading}
                                            fullWidth
                                            error={error.email}
                                            helperText={error.email ? "Please enter a valid email address." : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            disabled={loading}
                                            type={showPassword ? "text" : "password" }
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton style={{padding: 4}} onClick={() => {
                                                        setShowPassword(!showPassword);
                                                    }}>
                                                        {
                                                            showPassword ? <BiHide /> : <BiShow />
                                                        }
                                                    </IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                            fullWidth
                                            error={error.password}
                                            helperText={error.password ? "Password is required to login." : ""}
                                        />
                                        <div style={{height: 8}} />
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Link onClick={() => setUserType("resetPasswordAuctioneer")}>Forgot Password ?</Link>
                                        </div>
                                        <div style={{height: 12}} />
                                        {
                                            error.loginError && loginErrorMessage && loginErrorMessage !== ''
                                                ?   <>
                                                        <div style={{height: 12}} />
                                                        <Typography style={{color: 'red', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                            <BiErrorCircle style={{marginRight: 8}} /> {loginErrorMessage}
                                                        </Typography>
                                                    </>
                                                :   null
                                        }
                                        <div className={classes.btnSubmit}>
                                            <Button 
                                                onClick={handleSubmitAuctioneer} 
                                                className={classes.button}
                                                variant='contained'
                                                disableElevation
                                                fullWidth
                                                disabled={loading}
                                            >
                                                <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                                    {
                                                        loading
                                                            ?   <CircularProgress size={20} />
                                                            :   <span style={{flexGrow: 1}}>Sign In</span>
                                                    }
                                                </div>
                                            </Button>
                                        </div>
                                        <div style={{height: 12}} />
                                        <p style={{textAlign: 'center'}}>Dont have an acount? <Link onClick={props.handleSignUp} disabled={loading}>Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :   null
            }
            {
                userType === 'resetPasswordBidder' || userType === 'resetPasswordAuctioneer'
                    ?   <div style={{display: 'flex'}}>
                            <div>
                                <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/aucLogin.svg`} alt="Auctioneer Image" height={300} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px'}}>
                                <div>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', width: 150}}>
                                        <Typography>
                                            Reset Password
                                        </Typography>
                                    </div>
                                    <div style={{height: 24}} />
                                    {
                                        resetEmailSent
                                            ?   <div>
                                                    <Typography style={{fontSize: 14}}>
                                                        We have sent an email to {email}.
                                                    </Typography>
                                                    <div style={{height: 8}} />
                                                    <Typography style={{fontSize: 14}}>
                                                        Click on the link in email to reset password.
                                                    </Typography>
                                                    <div style={{height: 24}} />
                                                    <div className={classes.btnSubmit}>
                                                        <Button 
                                                            onClick={handleClose} 
                                                            className={classes.button}
                                                            variant='contained'
                                                            disableElevation
                                                            fullWidth
                                                            disabled={loading}
                                                        >
                                                            Okay, thank you !!!
                                                        </Button>
                                                    </div>
                                                </div>
                                            :   <div>
                                                    <TextField
                                                        variant="outlined"
                                                        className={classes.InputLarge}
                                                        size="small"
                                                        type="text"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="Email"
                                                        disabled={loading}
                                                        fullWidth
                                                        error={error.email}
                                                        helperText={error.email ? "Please enter a valid email address." : ""}
                                                    />
                                                    <div style={{height: 24}} />
                                                    <div className={classes.btnSubmit}>
                                                        <Button 
                                                            onClick={handleResetPassword} 
                                                            className={classes.button}
                                                            variant='contained'
                                                            disableElevation
                                                            fullWidth
                                                            disabled={loading}
                                                        >
                                                            <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                                                {
                                                                    loading
                                                                        ?   <CircularProgress size={20} />
                                                                        :   <span style={{flexGrow: 1}}>Send Reset Password Email</span>
                                                                }
                                                            </div>
                                                        </Button>
                                                    </div>
                                                    <div style={{height: 12}} />
                                                    <p style={{textAlign: 'center'}}>Dont have an acount? <Link onClick={props.handleSignUp} disabled={loading}>Sign Up</Link></p>
                                                </div>
                                    }
                                </div>
                            </div>
                        </div>
                    :   null
            }
        </Dialog>
    );
}

export default Login;