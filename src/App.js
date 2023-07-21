import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Container, Link as MuiLink, CssBaseline } from '@mui/material';
import {
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"; // Importing the MenuIcon

import { RandomPokemon } from './pages/RandomPokemon';
import { Home } from './pages/Home';
import React, { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className="custom-toolbar">
            Pokemon Site
          </Typography>
          {/* The navigation links */}
          <Menu anchorEl={null} open={menuOpen} onClick={() => setMenuOpen(false)}>
            <MenuItem onClick={() => setMenuOpen(false)}>
              <MuiLink component={Link} to="/" color="inherit" underline="none" sx={{ mx: 2 }}>
                Pokemon random
              </MuiLink>
            </MenuItem>
            <MenuItem onClick={() => setMenuOpen(false)}>
              <MuiLink component={Link} to="/home" color="inherit" underline="none">
                Home
              </MuiLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
        <Container sx={{ mt: 3 }}>
          <Routes>
            <Route path="/" element={<RandomPokemon />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
