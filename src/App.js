import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Menu,
  MenuItem,
  Link as MuiLink,
  CssBaseline
} from '@mui/material';

import { Menu as MenuIcon } from "@mui/icons-material";
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
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Pokemon Site
            </Typography>
            <Menu
              anchorEl={null}
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
            >
              <MenuItem onClick={() => setMenuOpen(false)}>
                <MuiLink component={Link} to="/" color="inherit" underline="none" >
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