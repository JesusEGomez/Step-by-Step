import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
import Orders from './Orders';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from '../../components/Login/auth0/Profile';
import UserManagement from '../../components/UserManagement/UserManagement';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/Form';
import ErrorPage from '../ErrorPage/ErrorPage';
import Products from './Products'





function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="primary" href="https://step-by-step-pi.vercel.app/">
                Step By Step
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const UsersContainer = styled(Paper)(({ theme }) => ({
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    height: 240, // Set the desired height for the container
    width: 980,
    overflow: 'auto',
    padding: 10
}));

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({

    palette: {
        primary: {
            main: '#757575',
            darker: '#424242',
            contrastText: '#fafafa',
        },
        neutral: {
            main: '#e0e0e0',
            contrastText: '#fafafa ',
        },
    },
});




export default function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <ThemeProvider theme={defaultTheme}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="primary.contrastText"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="primary.contrastText"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="primary.contrastText"
                            noWrap
                            sx={{ fontSize: 20, mx: 4 }}
                        >
                            <Link href="/home" color="inherit" underline="none" sx={{ color: 'inherit', '&:hover': { color: '#e0e0e0' } }}>
                                Home
                            </Link>
                        </Typography>
                        <Typography
                            component="h6"
                            variant="h6"
                            color="primary.contrastText"
                            noWrap
                            sx={{ fontSize: 20, mr: 4 }}
                        >
                            <Link href="/form" color="inherit" underline="none" sx={{ color: 'inherit', '&:hover': { color: '#e0e0e0' } }}>
                                Crear producto
                            </Link>
                        </Typography>

                        <IconButton color="primary.contrastText">
                            <AccountCircleIcon />
                            <Profile></Profile>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        {/* <Divider sx={{ my: 1 }} /> */}

                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={4}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                        width: 1000,

                                    }}
                                >

                                    <UsersContainer>
                                        <Users />
                                    </UsersContainer>
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
                >
                <Deposits />
                </Paper>
            </Grid> */}
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}