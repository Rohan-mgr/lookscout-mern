import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/Lookscout.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const pages = ["Home", "Our Products", "Resources", "Contacts"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="border-b border-[#EAEBF0] py-[20px] lg:px-[160px]"
      sx={{
        backgroundColor: "#F8F9FB",
        color: "#000",
        margin: 0,
        boxShadow: "none",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <img
            src={Logo}
            alt="lookscout"
            className="h-[22.4px] w-[120px] md:h-[28px] md:w-[150px]"
          />

          <Box
            sx={{
              marginLeft: "64px",
              fontSize: "15px",
              flexGrow: 1,
              gap: "32px",

              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <div key={page} className="flex items-center">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    textTransform: "capitalize",
                    fontWeight: 600,
                    color: "#272D37",
                    display: "block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {page}
                </Button>
                {page == "Resources" && <KeyboardArrowDownIcon />}
              </div>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              href="#signup"
              sx={{
                fontWeigth: 600,
                fontSize: "15px",
                textTransform: "capitalize",
                marginRight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#437EF7",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
