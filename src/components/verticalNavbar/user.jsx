import React, { useState, useEffect, useRef } from 'react';
import './verticalNav.css'; 
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add'; 
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TableViewIcon from '@mui/icons-material/TableView';
import {jwtDecode} from 'jwt-decode';

const VerticalNav = () => {
 const [open, setOpen] = useState(false);
 const [categoriesOpen, setCategoriesOpen] = useState(false); // State for categories dropdown
 const [addOpen, setAddOpen] = useState(false); // State for "Add Category" dropdown
 const [tableOpen, setTableOpen] = useState(false);
 const drawerRef = useRef(null);

 // Check if the user is an admin
 const isAdmin = () => {
   const token = localStorage.getItem('token');
   if (token) {
     const decodedToken = jwtDecode(token);
     return decodedToken.role === 'admin';
   }
   return false;
 };

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
 }, []);

 const handleDrawerOpen = () => {
    setOpen(true);
 };

 const handleDrawerClose = () => {
    setOpen(false);
 };
 const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
 };
 const toggleAdd = () => { 
    setAddOpen(!addOpen);
 };
 const toggleTable = () => { 
 setTableOpen(!tableOpen);
};

 return (
    <>
      <nav className="vertical-nav">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={open ? 'hide-icon' : ''}
          size="large"
          sx={{
            position: 'absolute', // Ensure the button is positioned absolutely
            left: 10, // Adjust the right position as needed
            top: 15, // Adjust the top position as needed
         }}
        >
          <MenuIcon sx={{ fontSize: 25}} />
        </IconButton>
      </nav>
      <Drawer
        ref={drawerRef}
        sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        disablebackdropclick="true"
        >
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
        <ListItemButton component={Link} to="/home" onClick={handleDrawerClose}>
            <ListItemIcon >
              <HomeIcon />
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={toggleCategories}>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
            {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Category items */}
            </List>
          </Collapse>
          {isAdmin() && (
            <>
              <ListItemButton onClick={toggleAdd}>
                <ListItemIcon>
                 <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Category" />
                {addOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={addOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* Add Category items */}
                </List>
              </Collapse>
              <ListItemButton onClick={toggleTable}>
                <ListItemIcon>
                 <TableViewIcon/>
                </ListItemIcon>
                <ListItemText primary="Table Details" />
                {tableOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={tableOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* Table Details items */}
                </List>
              </Collapse>
            </>
          )}
        </List>
      </Drawer>
    </>
 );
};

export default VerticalNav;
