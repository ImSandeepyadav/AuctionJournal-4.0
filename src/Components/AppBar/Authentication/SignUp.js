import { useState } from 'react';
import { Dialog, Typography, Card, CardActionArea, Button, makeStyles } from '@material-ui/core';

import BidderSignUp from './BidderSignUp';
import AuctioneerSignUp from './AuctioneerSignUp';
import { ReactComponent as AucLogin } from '../../../static/aucLogin.svg';
import { ReactComponent as BidLogin } from '../../../static/bidLogin.svg';

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

const SignUp = (props) => {
    const classes = useStyles();

    const [ loading, setLoading ] = useState(false);
    const [ userType, setUserType ] = useState(null);

    const handleClose = () => {
        setUserType(null);
        props.onClose();
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
                                            <AucLogin style={{width: 160}} />
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
                                            <BidLogin style={{width: 160}} />
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
            { userType === "bidder" ? <BidderSignUp handleClose={handleClose} /> : null }
            { userType === "auctioneer" ? <AuctioneerSignUp handleClose={handleClose} /> : null }
        </Dialog>
    )
}

export default SignUp;