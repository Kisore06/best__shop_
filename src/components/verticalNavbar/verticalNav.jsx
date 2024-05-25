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
import LocationIcon from '@mui/icons-material/LocationOn'; // Import LocationIcon
import CategoryIcon from '@mui/icons-material/Category';
import AddIcon from '@mui/icons-material/Add'; 
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TableViewIcon from '@mui/icons-material/TableView';

const VerticalNav = () => {
 const [open, setOpen] = useState(false);
 const [categoriesOpen, setCategoriesOpen] = useState(false); // State for categories dropdown
 const [addOpen, setAddOpen] = useState(false); // State for "Add Category" dropdown
 const [tableOpen, setTableOpen] = useState(false);
 const drawerRef = useRef(null);

 const [prevScrollPos, setPrevScrollPos] = useState(0);
 const [visible, setVisible] = useState(true);

 useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [prevScrollPos, visible]);

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
      <nav className="vertical-nav" style={{ top: visible ? '0' : '-90px' }}>
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
          <MenuIcon sx={{ color:'grey', fontSize: 25}} />

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
              <ListItemButton component={Link} to="/Footwear" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Footwear" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Watches" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Watches" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Bags & Luggages" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Bags & Luggages" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Gifts" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Gifts" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Sports Goods" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Sports Goods" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Toys" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Toys" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Mobiles" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Mobiles" />
              </ListItemButton>
              <ListItemButton component={Link} to="/Baby World" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Baby World" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton component={Link} to="/shop-locations" onClick={handleDrawerClose}>
            <ListItemIcon >
            <LocationIcon />
            </ListItemIcon>
              <ListItemText primary="Showroom" />
          </ListItemButton>
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
              <ListItemButton component={Link} to="/offer-products" onClick={handleDrawerClose} sx={{ pl: 4 }}>
 <ListItemText primary="Add Offer Product" />
</ListItemButton>
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
              <ListItemButton component={Link} to="/table-details-categories" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Categories" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details-gender" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Gender" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details-subCategories" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Sub Categories" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details-brands" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Brands" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details-products" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Products" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details-offer-products" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="Offer Products" />
              </ListItemButton>
              <ListItemButton component={Link} to="/user-info" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="User Information" />
              </ListItemButton>
              <ListItemButton component={Link} to="/table-details" onClick={handleDrawerClose} sx={{ pl: 4 }}>
                <ListItemText primary="All Tables" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
 );
};

export default VerticalNav;