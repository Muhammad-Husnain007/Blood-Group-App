import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Donor from './Donor';
import Acceptor from './Acceptor'; // Assuming you have an Acceptor component
import bloodImage from '../assests/blood-donation.png';
import useBlockBackButton from '../Screen/block.backButton';
import Logout from '../Screen/user.logout';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(null); // State to manage selected component

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAcceptorClick = () => {
    setSelectedComponent('acceptor');
  };

  const handleDonorClick = () => {
    setSelectedComponent('donor');
  };

  const handleLogoutClick = () => {
    // Logout logic here
  };
useBlockBackButton()
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Acceptor', 'Donor', <Logout />].map((text, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 2 }}>
            <ListItemButton
              onClick={
                index === 0
                  ? handleAcceptorClick
                  : index === 1
                  ? handleDonorClick
                  : handleLogoutClick
              }
              sx={index === 2 ? { bgcolor: '#0b57d0', color: '#fff' } : {}}
            >
              <ListItemIcon>
                {index === 0 || index === 1 ? (
                  <img src={bloodImage} alt="blood donation" style={{ width: 24, height: 24 }} />
                ) : (
                  <LogoutIcon style={{ color: '#fff' }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#0b57d0', // Background color set to #0b57d0
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Blood Donation Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {selectedComponent === 'acceptor' && <Acceptor />}
        {selectedComponent === 'donor' && <Donor />}
        {!selectedComponent && (
          <Typography variant="h6" noWrap component="div">
            Please select an option from the drawer.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
