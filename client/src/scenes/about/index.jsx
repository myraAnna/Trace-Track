import { Box, useTheme, Typography, Button, IconButton } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from "../../theme";

const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="ABOUT" subtitle="About This Project" >
            <Typography>
                "Hello"
            </Typography>
        </Header>
    </Box>
}

export default About;
