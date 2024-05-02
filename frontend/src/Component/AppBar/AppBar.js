import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './AppBar.css';
import { navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function ButtonAppBar() {

  const navigate = useNavigate('');

  const [userdata, setUserdata] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/login/success", {withCredentials: true, responseType: 'json'});
      setUserdata(response.data.user)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };  

  React.useEffect(()=>{
    getUser()
  }, [])

  function loginPage() {
    navigate('./login');
  }

  function homePage() {
    navigate('./home');
  }

  function logout() {
    setUserdata({});
    setLoggedIn(false);
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '75px',  backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FILE UPLOADER
          </Typography>
          <div className='right'>
            <Button color="inherit" onClick={homePage}>Home</Button>
            {
              Object.keys(userdata).length > 0? (
                <>
                  <Button color="inherit" onClick={logout}>Logout</Button>
                  <img src={userdata.image} className="profile-icon" style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
                
                </>
              ):
              <>
                <Button color="inherit" onClick={loginPage}>Login</Button>
                <IconButton aria-label="profile" className="profile-icon" style={{color:'white'}}>
                    <AccountCircleIcon />
                  </IconButton>
              </>
            }
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
