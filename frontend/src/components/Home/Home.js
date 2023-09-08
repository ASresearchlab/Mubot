import React from 'react'
import Header from '../Header/Header';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, Container } from "@mui/material";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Avatar from 'react-avatar';
import { Images } from '../configs';
import Divider from '@mui/material/Divider';
import {Styles} from './Styles';



const Home = () => {
  const pageStyles = {
    margin: 0, // Remove default body margin
    padding: 0,
    backgroundColor: '#f0f0f0',
    height: 500,
  };

 

  return (
    <div style={pageStyles}>
    <Container maxWidth="xl" style={Styles.container} >
      
      {/* Your app content */}
    
      <Divider/>
      <Typography style={{left:0, textAlign:'center'}} variant="h2" component="h2" align="left">
        CREATE YOUR OWN <br />CHATBOT FOR YOUR <br /> BUISNESS
      </Typography>
      <Typography variant="body1" paragraph>
        This is the main page content of my app.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
    </div>
    
  )
}

export default Home