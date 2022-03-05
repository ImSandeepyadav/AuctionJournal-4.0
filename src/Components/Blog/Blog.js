import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from "@material-ui/core";
import { AiFillTag } from "react-icons/ai";
import { ReactComponent as Vector } from '../../static/Vector.svg';
import { ReactComponent as Vectoremail } from '../../static/Vectoremail.svg';
import { ReactComponent as Vectormessaging } from '../../static/Vectormessaging.svg';
import BlogImg from '../../static/blog.svg';
import Pagination from '../pagination/Paginationsize';
import Banner from '../../static/Banner.svg';
import TextField from '@mui/material/TextField';
import { display, padding, typography } from '@mui/system';
import { ReactComponent as Facebook } from '../../static/Facebook.svg';
import { ReactComponent as Instagram } from '../../static/Instagram.svg';
import { ReactComponent as Twitter } from '../../static/Twitter.svg';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

export default function Blog(props) {
    const width = props.width;
    return (
        <div style={{ margin: "0% 8%" }}>
            <Box sx={{ width: 1 }}>
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 8" style={{ marginBottom: '5%' }}>
                        <Grid container spacing={2}>
                            <Grid item md={9}>
                                <div style={{ width: '60%' }}>
                                    <Typography
                                        style={{
                                            fontFamily: "Public Sans",
                                            fontStyle: "normal",
                                            fontWeight: "bold",
                                            fontSize: "25px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.18px",
                                            color: "#000000",
                                        }}
                                    >
                                        Hello World, this is the article
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Public Sans",
                                            fontStyle: "normal",
                                            fontWeight: "normal",
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.18px",
                                            color: "#000000",
                                        }}
                                    >
                                        01//03/2022
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Public Sans",
                                            fontStyle: "normal",
                                            fontWeight: "normal",
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.18px",
                                            color: "#000000",
                                        }}
                                    >
                                        Author name
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item md={3}>
                                <div style={{ display: "flex", width: "100%", justifyContent: 'space-around' }}>
                                    <Facebook />
                                    <Instagram />
                                    <Twitter />
                                </div>
                            </Grid>
                            <Grid item md={12}>
                                <div style={{ width: '100%' }}>
                                    <Typography
                                        style={{
                                            fontFamily: "Public Sans",
                                            fontStyle: "normal",
                                            fontWeight: "normal",
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.18px",
                                            color: "#000000",
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis lorem, finibus et vestibulum vitae, porta ac magna. Phasellus rhoncus, sem sit amet faucibus iaculis, odio elit efficitur felis, id congue nisl arcu vel nulla. Vestibulum nulla orci, varius vitae hendrerit et, molestie sed dolor. Fusce felis arcu, pellentesque non molestie eu, euismod nec lectus. Nulla nec libero varius eros varius ultrices. Pellentesque vulputate fringilla aliquam. Aliquam pulvinar ipsum ac hendrerit cursus. Etiam vitae vulputate urna. Proin ut sapien porttitor neque vestibulum facilisis id ut elit. Phasellus eu arcu aliquet, porta neque ut, iaculis mi. Nam maximus erat quis risus finibus euismod
                                    </Typography>
                                    <div style={{ display: "flex", alignItems: "center", padding: "12px" }}>
                                        <img
                                            src={Banner}
                                        />
                                    </div>
                                    <Typography
                                        style={{
                                            fontFamily: "Public Sans",
                                            fontStyle: "normal",
                                            fontWeight: "normal",
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                            letterSpacing: "0.18px",
                                            color: "#000000",
                                        }}
                                    >

                                        amet, consectetur adipiscing elit. Nulla felis lorem, finibus et vestibulum vitae, porta ac magna. Phasellus rhoncus, sem sit amet faucibus iaculis, odio elit efficitur felis, id congue nisl arcu vel nulla. Vestibulum nulla orci, varius vitae hendrerit et, molestie sed dolor. Fusce felis arcu, pellentesque non molestie eu, euismod nec lectus. Nulla nec libero varius eros varius ultrices. Pellentesque vulputate fringilla aliquam. Aliquam pulvinar ipsum ac hendrerit cursus. Etiam vitae vulputate urna. Proin ut sapien porttitor neque vestibulum facilisis id ut elit. Phasellus eu arcu aliquet, porta neque ut, iaculis mi. Nam maximus erat quis risus finibus euismod. Curabitur at ex eget e
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box gridColumn="span 4" style={{ padding: '0% 7%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                        <Item style={{
                            background: "#D8D8D8",
                            padding: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <typography
                                style={{
                                    position: "relative",
                                    width: "295px",
                                    height: "68px",
                                    fontFamily: "Public Sans",
                                    fontStyle: "normal",
                                    fontWeight: "bold",
                                    fontSize: "48px",
                                    letterSpacing: "0.72px",
                                    color: "#000000",
                                }}
                            >
                                Newsletter
                            </typography>
                            <typography
                                style={{
                                    position: "relative",
                                    width: "267.19px",
                                    height: "148px",
                                    fontFamily: "Public Sans",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    fontSize: "24px",
                                    lineHeight: "150%",
                                    letterSpacing: "0.36px",
                                    color: "#000000",
                                }}
                            >
                                Subscribe for the latest news,events,and all that is happening in the world
                            </typography>
                            <div
                                style={{ display: 'flex', justifyContent: "space-around" }}
                            >
                                <Vector />
                                <Vectoremail />
                                <Vectormessaging />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Email" variant="standard" />
                            </div>
                            <button
                                style={{
                                    position: "relative",
                                    width: "135px",
                                    height: "43.65px",
                                    marginTop: '5%',
                                    border: "1px solid #000000",
                                    boxSizing: "border-box",
                                    borderRadius: "3px",
                                }}
                            >Subscribe</button>
                        </Item>

                        <Item style={{ padding:"2px" }}>
                            <img
                                src={Banner}
                            />
                        </Item>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}