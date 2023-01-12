import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const navBarData = [
    { 
        to: "/", 
        label: "Dashboard", 
        icon: <HomeOutlinedIcon />,
        
    },
    { 
        to: "/simulation", 
        label: "Fire Simulation",
        icon: <FireplaceOutlinedIcon />,
    },
    { 
        to: "/about", 
        label: "About", 
        icon: <InfoOutlinedIcon />,
    },
];

export default navBarData;