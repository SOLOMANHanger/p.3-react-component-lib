import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./NavBar.module.scss";
export default function NavBar() {
  return (
    <div className="navbar">
      <AppBar position="static" sx={{ backgroundColor: "#f1f2f" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 5 }}>
            πεΔκ
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}