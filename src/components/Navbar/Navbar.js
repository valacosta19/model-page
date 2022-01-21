import React from 'react'
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/logo-blue2.svg'
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link } 
from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';

const navlinks = [
  {
    id: 1,
    name: "Home",
    url: "#home"
  },
  {
    id: 2,
    name: "Services",
    url: "#services"
  },
  {
    id: 3,
    name: "About us",
    url: "#about"
  },
  {
    id: 4,
    name: "Contact us",
    url: "#contact"
  }
]

export const ResponsiveAppBar = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'common.white', position: 'fixed' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={Logo} alt='logo' className='max-w-[80px] m-auto' />
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{  
                style: {  
                  width: '75%',
                },  
             }} 
            >
              {navlinks.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={Logo} alt='logo' className='max-w-[65px] m-auto' />
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {navlinks.map((link) => (
              <Button
                key={link.id}
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  my: 2,
                  fontWeight: 'bold',
                  color: theme.palette.primary.dark,
                  '&:hover': { color: theme.palette.secondary.main },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
          <Link href="https://www.instagram.com/jabrothersconstruction/" sx={{ flexGrow: { xs: 0, md: 0.5 }, textAlign: 'right', px: '10px' }}>
            <InstagramIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
