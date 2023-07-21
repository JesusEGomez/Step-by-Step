import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';
import { formControlClasses } from '@mui/material';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <Link to="/administracion/orders" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orderdenes" />
            </ListItemButton>
        </Link>
        <Link to="/administracion/users" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" />
            </ListItemButton>
        </Link>
        <Link to="/administracion/products" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
            </ListItemButton>
        </Link>
        <Link to="/administracion/form" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AddBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Crear Productos" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);
