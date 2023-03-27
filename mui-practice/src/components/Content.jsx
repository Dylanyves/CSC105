import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "./Box";
import { Box as MuiBox } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Content(props) {
    return (
        <React.Fragment>
            <Box />
            <Grid2 container spacing={2} mt={2}>
                <Grid2 item md={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                sx={{ maxHeight: "140px" }}
                                component="img"
                                height="140"
                                image="https://media.timeout.com/images/105927367/image.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
                <Grid2 item md={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                sx={{ maxHeight: "140px" }}
                                component="img"
                                height="140"
                                image="https://media.timeout.com/images/105927367/image.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
                <Grid2 item md={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                sx={{ maxHeight: "140px" }}
                                component="img"
                                height="140"
                                image="https://media.timeout.com/images/105927367/image.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    Lizard
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid2>
            </Grid2>
        </React.Fragment>
    );
}

export default Content;
