import { useState }  from 'react';
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, NavLink } from 'react-router-dom';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active={ selected === title } 
            style={{ 
                color: colors.grey[100] 
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            >
            <Typography>
                {title}
            </Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Navbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <ProSidebarProvider >
            <Box
                sx={{ 
                    "& .pro-sidebar-inner": {
                        background: '${colors.primary[400]} !important',
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",
                    },
                }}
            >
                    
                    <Sidebar collapsed={isCollapsed}>
                        <Menu iconShape="square">
                            <MenuItem
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                                style={{ 
                                    margin: "10px 0 20px 0",
                                    color: colors.grey[100],
                                 }}
                            >
                                {!isCollapsed && (
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        ml="15px"
                                    >
                                        <IconButton onClickk={() => setIsCollapsed(!isCollapsed)}>
                                            <MenuOutlinedIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </MenuItem>
                        </Menu>
                    </Sidebar>


                <Box>
                    <Sidebar>
                        <Menu>
                            {/* LOGO */}
                            {!isCollapsed && (
                                <Box mb="25px">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <img 
                                            alt="profile-user"
                                            width="100px"
                                            height="100px"
                                            src={'../../assets/logo.png'}
                                            style={{ cursor: "pointer", borderRadius: "50%" }}
                                        />
                                    </Box>

                                    <Box textAlign= "center">
                                        <Typography 
                                            variant="h3" 
                                            color={colors.grey[900]} 
                                            fontWeight="bold" 
                                            sx={{ m: "10px 0 0 0" }}
                                        >
                                            Trace && Track
                                        </Typography>
                                    </Box>
                                </Box>
                            )}

                            {/* MENU ITEMS */}
                            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                                <Item 
                                    title="Dashboard"
                                    to="/"
                                    icon={<HomeOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />

                                <Item 
                                    title="Fire Simulation"
                                    to="/simulation"
                                    icon={<FireplaceOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />

                                <Typography
                                    variant="h6"
                                    color={colors.grey[300]}
                                    sx={{ m: "15px 0 5px 20px"}}
                                >
                                    Data
                                </Typography>

                                <Typography
                                    variant="h6"
                                    color={colors.grey[300]}
                                    sx={{ m: "15px 0 5px 20px"}}
                                >
                                    Reports
                                </Typography>
                                
                                <Item 
                                    title="About"
                                    to="/about"
                                    icon={<InfoOutlinedIcon />}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </Box>
                        </Menu>
                    </Sidebar>
                </Box>


            </Box>
        </ProSidebarProvider>
    );
};

export default Navbar;