import { useState } from "react";
import { Button, TextField, Typography, IconButton, InputAdornment, Checkbox, makeStyles } from '@material-ui/core';
import { BiShow, BiHide } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { GiUsaFlag } from 'react-icons/gi';
import validator from 'validator';
import axios from 'axios';

import usZIPCode from "./data/USzipcode.json";
import usStateCode from "./data/states_titlecase.json";

import { ReactComponent as BidSignUp } from '../../../static/bidSignUp.svg';


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
    buttonUpload: {
        backgroundColor: '#000',
        borderRadius: 4,
        textTransform: "none",
        color: '#fff',
        padding: '2px 12px',
        margin: '6px',
        '&:hover': {
            backgroundColor: '#000',
        }
    }
}))

const BidderSignUp = (props) => {
    const classes = useStyles();
    const history = useNavigate();

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const initData = {
        "companyName" : "",
        "firstName" : "",
        "lastName" : "",
        "streetAddress" : "",
        "zip" : "",
        "city" : "",
        "state" : "",
        "country" : "USA",
        "Email" : "",
        "password" : "",
        "auctioneerLicensceNo" : "",
        "auctioneerLicenscePhoto" : null,
        "photo": null,
        "website": "",
        "Phone": "",
        "confirmEmail": "",
        "confirmPassword": "",
    };

    const initError = {
        "companyName" : false,
        "firstName" : false,
        "lastName" : false,
        "streetAddress" : false,
        "zip" : false,
        "city" : false,
        "state" : false,
        "country" : false,
        "Email" : false,
        "password" : false,
        "auctioneerLicensceNo" : false,
        "photo": false,
        "website": false,
        "Phone": false,
        "confirmEmail": false,
        "confirmPassword": false,
    };

    const [ loading, setLoading ] = useState(false);
    const [ step, setStep ] = useState(1);
    const [ data, setData ] = useState(initData);
    const [ error, setError ] = useState(initError);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
    const [ otp, setOtp ] = useState("");

    const [ stepOneError, setStepOneError ] = useState(false);
    const [ stepTwoError, setStepTwoError ] = useState(false);

    const [ otpSent, setOtpSent ] = useState(false);
    const [ otpError, setOtpError ] = useState(false);

    const [ registerError, setRegisterError ] = useState(false);

    const isZipCode = (value) => {
        const val = usZIPCode.filter(function (usZIPCode) {
          return usZIPCode.zip_code == value;
        });
    
        if (val.length != 0 && value.length == 5) {
          return true;
        }
    
        return false;
    };

    const validateStepOne = (err) => {
        let isValid = true;
        let tempError = { ...err };

        if (data.firstName === "") {
            isValid = false;
            tempError.firstName = true;
        }

        if (data.lastName === "") {
            isValid = false;
            tempError.lastName = true;
        }

        if (data.streetAddress === "") {
            isValid = false;
            tempError.streetAddress = true;
        }

        if (data.city === "") {
            isValid = false;
            tempError.city = true;
        }

        if (data.zip === "" || !isZipCode(data.zip)) {
            isValid = false;
            tempError.zip = true;
        }

        if (data.state === "") {
            isValid = false;
            tempError.state = true;
        }

        if (data.country === "") {
            isValid = false;
            tempError.country = true;
        }

        return { tempError, isValid };
    }

    const validateStepTwo = (err) => {
        let isValid = true;
        let tempError = { ...err };

        if (!validator.isEmail(data.Email)) {
            isValid = false;
            tempError.Email = true;
        }

        if (data.Email !== data.confirmEmail) {
            isValid = false;
            tempError.confirmEmail = true;
        }

        if (data.password === "") {
            isValid = false;
            tempError.password = true;
        }

        if (data.confirmPassword !== data.password) {
            isValid = false;
            tempError.id = true;
        }

        return { tempError, isValid };
    }

    const validateForm = () => {
        let isValid = true;
        let tempError = { ...error };

        const stepOneValidation = validateStepOne(tempError);
        console.log(stepOneValidation);
        tempError = { ...tempError, ...stepOneValidation.tempError };
        setStepOneError(!stepOneValidation.isValid);
        if (!stepOneValidation.isValid) {
            isValid = false;
        }

        const stepThreeValidation = validateStepTwo(tempError);
        console.log(stepThreeValidation);
        tempError = { ...tempError, ...stepThreeValidation.tempError };
        setStepTwoError(!stepThreeValidation.isValid);
        if (!stepThreeValidation.isValid) {
            isValid = false;
        }

        if (!isValid) {
            setError(tempError);
        }

        return isValid;
    }

    const handleSignUp = () => {
        setRegisterError(false);
        const isValid = validateForm();

        if (isValid) {
            setError(initError);
            setLoading(true);

            const payload = { ...data, Phone: `+1${data.Phone}` };

            axios.post(`${baseUrl}api/registerBidder`, payload)
                .then(() => {
                    // setLoading(false);
                    // setStep(3)

                    // Auto Login the user
                    axios.post(`${process.env.REACT_APP_BASE_URL}api/loginBidder`, {
                        Email: data.Email,
                        password: data.password,
                    })
                        .then((response) => {
                            setLoading(false);

                            sessionStorage.setItem(
                            "user",
                            JSON.stringify({ ...response.data, role: 'bidder' }),
                            );
                            
                            history.push("/bidderdashboard");
                        })
                        .catch(() => {
                            setLoading(false);
                            props.provideLogin();
                        })
                })
                .catch((error) => {
                    setLoading(false);
                    setRegisterError(true);
                });
        }
    }

    // const handleSendOtp = () => {
    //     if (validator.isMobilePhone(data.Phone, "en-US")) {
    //         setError({ ...error, Phone: false });
    //         setLoading(true);
    //         setOtpError(false);
    //         axios.post(`${baseUrl}api/mobileOTP`, { Phone: data.Phone, reqType: "2" })
    //             .then(() => {
    //                 setLoading(false);
    //                 setOtpSent(true);
    //             }).catch((error) => {
    //                 setLoading(false);
    //                 setOtpError(true);
    //             });
    //     } else {
    //         setError({ ...error, Phone: true });
    //     }
    // }

    // const handleVerifyOtp = () => {
    //     axios.post(`${baseUrl}api/verifyOtp`, { Phone: data.Phone, otp: otp, reqType: "2" })
    //         .then((response) => {
    //             setLoading(false);
    //             setOtpSent(false);
    //             setData({ ...data, id: response.data.id });
    //         })
    //         .catch((error) => {
    //             setLoading(false);
    //             setOtpError(true);
    //         });
    // }

    return (
        <>
            {
                step === 1
                    ?   <div style={{display: 'flex'}}>
                            <div>
                                {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/bidSignUp.svg`} alt="Auctioneer Image" width={300} /> */}
                                <BidSignUp style={{width: 300, height: 500}} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px'}}>
                                <div style={{padding: '16px 0px'}}>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', display: 'flex', justifyContent: 'space-between'}}>
                                        <Typography style={{fontWeight: '600'}}>
                                            Bidder Sign Up
                                        </Typography>
                                        <Typography>
                                            <span
                                                style={{
                                                    color: stepOneError ? "red" : step === 1 ? "black" : "#B8B8B8",
                                                    marginRight: 12,
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    if (!loading) {
                                                        setStep(1);
                                                    }
                                                }}
                                            >
                                                1
                                            </span>
                                            <span
                                                style={{
                                                    color: stepTwoError ? "red" : step === 2 ? "black" : "#B8B8B8",
                                                    cursor: "pointer",
                                                    marginRight: 12,
                                                }}
                                                onClick={() => {
                                                    if (!loading) {
                                                        setStep(2);
                                                    }
                                                }}
                                            >
                                                2
                                            </span>
                                        </Typography>
                                    </div>
                                    <div style={{height: 24}} />
                                    <div>
                                        <Typography>First Name *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.firstName}
                                            onChange={(e) => setData({ ...data, firstName: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.firstName}
                                            helperText={error.firstName ? "First name is required" : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <Typography>Last Name *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.lastName}
                                            onChange={(e) => setData({ ...data, lastName: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.lastName}
                                            helperText={error.lastName ? "Last name is required" : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <Typography>Address *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.streetAddress}
                                            onChange={(e) => setData({ ...data, streetAddress: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.streetAddress}
                                            helperText={error.streetAddress ? "Address is required" : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                            <div style={{width: '48%'}}>
                                                <Typography>Zip *</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.InputLarge}
                                                    size="small"
                                                    type="text"
                                                    value={data.zip}
                                                    onChange={(e) => {
                                                        const val = usZIPCode.filter(function (usZIPCode) {
                                                            return usZIPCode.zip_code == e.target.value;
                                                        });
                                                        if (val.length != 0 && e.target.value.length == 5) {
                                                            const usaStateName = usStateCode.filter(function (
                                                                usStateCode
                                                              ) {
                                                                return usStateCode.abbreviation == val[0].state;
                                                              })[0].name;

                                                            setData({ ...data, zip: e.target.value, city: val[0].city, state: usaStateName });
                                                        } else {
                                                            setData({ ...data, zip: e.target.value, city: "", state: "" });
                                                        }
                                                    }}
                                                    disabled={loading}
                                                    fullWidth
                                                    error={error.zip}
                                                    helperText={error.zip ? "Valid zip is required" : ""}
                                                />
                                            </div>
                                            <div style={{width: '48%'}}>
                                                <Typography>City *</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.InputLarge}
                                                    size="small"
                                                    type="text"
                                                    value={data.city}
                                                    onChange={(e) => setData({ ...data, city: e.target.value })}
                                                    disabled={true}
                                                    fullWidth
                                                    error={error.city}
                                                    helperText={error.city ? "City is required" : ""}
                                                />
                                            </div>
                                        </div>
                                        <div style={{height: 12}} />
                                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                                            <div style={{width: '48%'}}>
                                                <Typography>State *</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.InputLarge}
                                                    size="small"
                                                    type="text"
                                                    value={data.state}
                                                    onChange={(e) => setData({ ...data, state: e.target.value })}
                                                    disabled={true}
                                                    fullWidth
                                                    error={error.state}
                                                    helperText={error.state ? "State is required" : ""}
                                                />
                                            </div>
                                            <div style={{width: '48%'}}>
                                                <Typography>Country *</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    className={classes.InputLarge}
                                                    size="small"
                                                    type="text"
                                                    value={data.country}
                                                    onChange={(e) => setData({ ...data, country: e.target.value })}
                                                    disabled={true}
                                                    fullWidth
                                                    error={error.country}
                                                    helperText={error.country ? "Country is required" : ""}
                                                />
                                            </div>
                                        </div>
                                        {
                                            registerError
                                                ?   <>
                                                        <div style={{height: 12}} />
                                                        <Typography style={{color: 'red', fontSize: 12, textAlign: 'center'}}>
                                                            Could not register the user.
                                                        </Typography>
                                                    </>
                                                :   null
                                        }
                                        <div style={{height: 12}} />
                                        <div className={classes.btnSubmit}>
                                            <Button 
                                                onClick={() => {
                                                    if (!loading) {
                                                        setStep(2);
                                                    }
                                                }}
                                                className={classes.button}
                                                variant='contained'
                                                disableElevation
                                                fullWidth
                                                disabled={loading}
                                            >
                                                Next
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :   null   
            }
            {
                step === 2
                    ?   <div style={{display: 'flex'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/bidSignUp.svg`} alt="Auctioneer Image" width={300} /> */}
                                <BidSignUp style={{width: 300, height: 600}} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px', maxHeight: '120vh'}}>
                                <div style={{padding: '16px 0px'}}>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', display: 'flex', justifyContent: 'space-between'}}>
                                        <Typography style={{fontWeight: '600'}}>
                                            Bidder Sign Up
                                        </Typography>
                                        <Typography>
                                            <span
                                                style={{
                                                    color: stepOneError ? "red" : step === 1 ? "black" : "#B8B8B8",
                                                    marginRight: 12,
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {
                                                    if (!loading) {
                                                        setStep(1);
                                                    }
                                                }}
                                            >
                                                1
                                            </span>
                                            <span
                                                style={{
                                                    color: stepTwoError ? "red" : step === 2 ? "black" : "#B8B8B8",
                                                    cursor: "pointer",
                                                    marginRight: 12,
                                                }}
                                                onClick={() => {
                                                    if (!loading) {
                                                        setStep(2);
                                                    }
                                                }}
                                            >
                                                2
                                            </span>
                                        </Typography>
                                    </div>
                                    <div style={{height: 24}} />
                                    <div>
                                    <Typography>
                                        Phone Number *
                                    </Typography>
                                    <TextField
                                        variant="outlined"
                                        className={classes.InputLarge}
                                        size="small"
                                        type="text"
                                        value={data.Phone}
                                        onChange={(e) => setData({ ...data, Phone: e.target.value })}
                                        disabled={loading}
                                        fullWidth
                                        error={error.Phone}
                                        helperText={"Valid US phone number is required. Eg. +1484473XXXX"}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                  <div style={{display: 'flex', alignItems: 'center', paddingRight: 8, background: '#fff', borderRight: '1px solid #333'}}>
                                                    <GiUsaFlag color="#3c3b6e" style={{width: 16}} /> 
                                                    <Typography style={{marginLeft: '6px', size: 12}}>+1</Typography>
                                                  </div>
                                              </InputAdornment>
                                            ),
                                        }}
                                    />
                                        {/* {
                                            otpSent
                                                ?   <>
                                                        <Typography>OTP *</Typography>
                                                        <TextField
                                                            className={classes.InputLarge}
                                                            size="small"
                                                            type="text"
                                                            value={otp}
                                                            onChange={(e) => setOtp(e.target.value)}
                                                            disabled={loading}
                                                            fullWidth
                                                            error={error.otp}
                                                            helperText={error.otp ? "Invalid OTP" : ""}
                                                        />
                                                    </>
                                                :   <>
                                                        <Typography>
                                                            {
                                                                data.id !== ""
                                                                    ?   <MdVerified size={16} color="green" style={{marginRight: 8}} />
                                                                    :   null
                                                            }
                                                            Phone Number *
                                                        </Typography>
                                                        <TextField
                                                            className={classes.InputLarge}
                                                            size="small"
                                                            type="text"
                                                            value={data.Phone}
                                                            onChange={(e) => setData({ ...data, Phone: e.target.value })}
                                                            disabled={loading || data.id !== ""}
                                                            fullWidth
                                                            error={error.Phone || error.id}
                                                            helperText={data.id !== "" ? "" : "Valid US phone number is required. Eg. +1484473XXXX"}
                                                        />
                                                    </>
                                        } */}
                                        {/* <div style={{height: 12}} />
                                        {
                                            data.id === ""
                                                ?   <>
                                                        {
                                                            otpSent
                                                                ?   <>
                                                                        {
                                                                            otpError ? <Typography style={{margin: '8px 0px', textAlign: 'center', color: 'red'}} >Invalid OTP.</Typography>
                                                                                :   null
                                                                        }
                                                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <Button
                                                                                className={classes.button}
                                                                                variant='contained'
                                                                                disableElevation
                                                                                // fullWidth
                                                                                disabled={loading}
                                                                                onClick={handleVerifyOtp}
                                                                            >
                                                                                {
                                                                                    loading
                                                                                        ?   <CircularProgress size={20} />
                                                                                        :   "VERIFY OTP"
                                                                                }
                                                                            </Button>
                                                                        </div>
                                                                    </>   
                                                                :   <>
                                                                        {
                                                                            otpError ? <Typography style={{margin: '8px 0px', textAlign: 'center', color: 'red'}} >Could not send OTP.</Typography>
                                                                                :   null
                                                                        }
                                                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                                                            <Button
                                                                                className={classes.button}
                                                                                variant='contained'
                                                                                disableElevation
                                                                                // fullWidth
                                                                                disabled={loading}
                                                                                onClick={handleSendOtp}
                                                                            >
                                                                                {
                                                                                    loading
                                                                                        ?   <CircularProgress size={20} />
                                                                                        :   "GET OTP"
                                                                                }
                                                                            </Button>
                                                                        </div>
                                                                    </>   
                                                        }
                                                    </>
                                                :   null
                                        } */}
                                        <div style={{height: 12}} />
                                        <Typography>E-mail Address *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.Email}
                                            onChange={(e) => setData({ ...data, Email: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.Email}
                                            helperText={error.Email ? "Valid e-mail address is required" : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <Typography>Confirm E-mail Address *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.confirmEmail}
                                            onChange={(e) => setData({ ...data, confirmEmail: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.confirmEmail}
                                            helperText={error.confirmEmail ? "E-mail entered here should match with the one entered above." : ""}
                                        />
                                        <div style={{height: 12}} />
                                        <Typography>Password *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            value={data.password}
                                            onChange={(e) => setData({ ...data, password: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.password}
                                            helperText={error.password ? "Password is required" : ""}
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
                                        />
                                        <div style={{height: 12}} />
                                        <Typography>Confirm Password *</Typography>
                                        <TextField
                                            variant="outlined"
                                            className={classes.InputLarge}
                                            size="small"
                                            type="text"
                                            value={data.confirmPassword}
                                            onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                                            disabled={loading}
                                            fullWidth
                                            error={error.confirmPassword}
                                            helperText={error.confirmPassword ? "This password should match with the one you entered above." : ""}
                                            type={showConfirmPassword ? "text" : "password" }
                                            InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton style={{padding: 4}} onClick={() => {
                                                        setShowConfirmPassword(!showConfirmPassword);
                                                    }}>
                                                        {
                                                            showConfirmPassword ? <BiHide /> : <BiShow />
                                                        }
                                                    </IconButton>
                                                </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <div style={{height: 12}} />
                                        <div>
                                            <div style={{ display: 'flex' }}>
                                                <Checkbox size="small" />
                                                <Typography style={{ fontSize: '12px', marginLeft: 8 }}>
                                                    * I have read and agree to the AuctionJournal.com Terms and Condition.
                                                </Typography>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <Checkbox size="small" />
                                                <Typography style={{ fontSize: '12px', marginLeft: 8 }}>
                                                    Please notify me about featured auctions occuring on AuctionJournal.
                                                </Typography>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <Checkbox size="small" />
                                                <Typography style={{ fontSize: '12px', marginLeft: 8 }}>
                                                    Please send me the Auction Journal update Newsletter.
                                                </Typography>
                                            </div>
                                        </div>
                                        <div style={{height: 12}} />
                                        <div className={classes.btnSubmit}>
                                            <Button 
                                                onClick={handleSignUp} 
                                                className={classes.button}
                                                variant='contained'
                                                disableElevation
                                                fullWidth
                                                disabled={loading}
                                            >
                                                SUBMIT
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :   null   
            }
            {
                step === 3
                    ?   <div style={{display: 'flex'}}>
                            <div>
                                {/* <img src={`${process.env.REACT_APP_BASE_URL_WEBSITE}static/bidSignUp.svg`} alt="Auctioneer Image" width={300} /> */}
                                <BidSignUp style={{width: 300, height: 500}} />
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', width: 300, padding: '0px 16px'}}>
                                <div style={{padding: '16px 0px', width: '100%'}}>
                                    <div style={{padding: '8px 8px 0px', borderBottom: '2px solid #E9E9E9', display: 'flex', justifyContent: 'space-between'}}>
                                        <Typography style={{fontWeight: '600'}}>
                                            Bidder Sign Up
                                        </Typography>
                                        <MdVerified size={16} color="green" style={{margin: "0px 8px"}} />
                                    </div>
                                    <div style={{height: 24}} />
                                    <div style={{height: 12}} />
                                    <div style={{height: 12}} />
                                    <Typography>
                                        Thank you for for signing up with us.
                                    </Typography>
                                    <div style={{height: 24}} />
                                    <Typography>
                                        You will be receiving a verification link in the email address you used to register.
                                    </Typography>
                                    <div style={{height: 24}} />
                                    <Typography>
                                        Verify your email address to start using our services.
                                    </Typography>
                                    <div style={{height: 12}} />
                                    <div style={{height: 12}} />
                                    <div style={{height: 12}} />
                                    <div style={{height: 12}} />
                                    <div className={classes.btnSubmit}>
                                        <Button 
                                            onClick={() => props.handleClose()} 
                                            className={classes.button}
                                            variant='contained'
                                            disableElevation
                                            fullWidth
                                            disabled={loading}
                                        >
                                            Okay, Thank You
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :   null   
            }
        </>
    );
}

export default BidderSignUp;