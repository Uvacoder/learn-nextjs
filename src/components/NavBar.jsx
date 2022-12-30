import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Head from "next/head";
import StoreIcon from "@mui/icons-material/Store";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: textColor,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Photos",
    href: "/photos",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const textColor = "white";

export default function NarBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <header>
      <nav>
        <AppBar position="static">
          <Container>
            <Toolbar disableGutters>
              <StoreIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  color: textColor,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                mr={2}
                sx={{
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: textColor,
                  textDecoration: "none",
                }}
              >
                HNStore
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color={textColor}
                >
                  <MenuIcon />
                </IconButton>
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
                  {pages.map((page, idx) => (
                    <MenuItem key={idx} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <StoreIcon
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  color: textColor,
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: textColor,
                  textDecoration: "none",
                }}
              >
                HNStore
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page, idx) => (
                  <Link href={page.href} passHref>
                    <Button
                      key={idx}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        mx: 3,
                        color: textColor,
                        display: "block",
                        fontWeight: 600,
                        letterSpacing: ".1rem",
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    </header>
  );
}
