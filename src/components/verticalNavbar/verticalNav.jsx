import React, { useState, useEffect, useRef } from 'react';
import './verticalNav.css'; // Import separate CSS file
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
import AddIcon from '@mui/icons-material/Add'; // Import Add icon
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const VerticalNav = () => {
 const [open, setOpen] = useState(false);
 const [categoriesOpen, setCategoriesOpen] = useState(false); // State for categories dropdown
 const [addOpen, setAddOpen] = useState(false); // State for "Add Category" dropdown
 const drawerRef = useRef(null);

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
 const toggleAdd = () => { // Function to toggle "Add Category" dropdown
    setAddOpen(!addOpen);
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
        >
          <MenuIcon />
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
        disableBackdropClick={true}
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
              <ListItemButton component={Link} to="/Shoes" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Shoes" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Watches" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Watches" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Cosmetics" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Cosmetics" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Bags" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Bags" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Gifts" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Gifts" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Clothes" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Clothes" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Sports" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Sports" />
              </ListItemButton>
              <ListItemButton component={Link} to="/generalgoods" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="General Goods" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Toys" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Toys" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Mobiles" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Mobiles" />
              </ListItemButton>
              <ListItemButton component={Link} to="/babyproducts" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Baby Products" />
              </ListItemButton>
              <ListItemButton component={Link} to="/trophy" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Trophies" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={toggleAdd}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Category" />
            {addOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={addOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton component={Link} to="/add-category" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Add Category" />
              </ListItemButton>
              <ListItemButton component={Link} to="/add-gender" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Add Gender" />
              </ListItemButton>
              <ListItemButton component={Link} to="/add-subcategory" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Add Sub Category" />
              </ListItemButton>
              <ListItemButton component={Link} to="/add-brand" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Add Brands" />
              </ListItemButton>
              <ListItemButton component={Link} to="/add-product" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Add Products" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* Other list items */}
        </List>
      </Drawer>
    </>
 );
};

export default VerticalNav;
