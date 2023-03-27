import React from "react";
import { Typography } from "@mui/material";
import { Box as MuiBox } from "@mui/material";

function Box(props) {
    return (
        <React.Fragment>
            <MuiBox>
                <Typography variant="h4" component="h1" color="initial">
                    Welcome to My Website
                </Typography>
                <MuiBox mt={2}>
                    <Typography variant="body1" color="initial" mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis qui dolorem quibusdam. Voluptas sed
                        officia quisquam quasi, porro eos. Quae consequatur
                        accusamus facilis ratione obcaecati ab ad ea pariatur
                        aspernatur?
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt possimus, molestiae tempora at perspiciatis quae
                        ullam atque voluptatum, aliquam doloribus ipsum.
                        Repudiandae debitis et magnam dignissimos commodi nisi
                        provident voluptatem!
                    </Typography>
                </MuiBox>
            </MuiBox>
        </React.Fragment>
    );
}

export default Box;
