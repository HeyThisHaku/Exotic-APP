import { AppBar, Box, Button, IconButton, Modal, Toolbar, Typography, ChildModal } from '@material-ui/core';
import { Menu as MenuIcon } from "@material-ui/icons";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import './App.css';
import DashboardContent from './component/DashboardContent';
import NavigationMenu from './component/NavigationMenu';
function App() {

  const [navIsActive, setNavIsActive] = React.useState(false);

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: "white",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const styleTitle = {
    display: "flex", width: "100%", justifyContent: "end"
  }

  const styleProfile = {
    display: "flex", width: "100%", justifyContent: "end"
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    return h + ":" + m + ":" + s + " " + session;
  }
  const [time, setTime] = React.useState(showTime);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Repeate Tick
  setInterval(() => {
    setTime(showTime)
  }, 0.1);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" >
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setNavIsActive(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div" style={styleTitle} >
              POS - Exotic
            </Typography>
            <Typography variant="h6" color="inherit" component="div" style={styleProfile} >
              {
                time
              }
            </Typography>
          </Toolbar>
          <NavigationMenu setValue={setNavIsActive} value={navIsActive} />
        </AppBar>
        <div className="dashboardContent">
          {<DashboardContent />}
          <Button onClick={handleOpen}>Open modal</Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={styleModal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;
