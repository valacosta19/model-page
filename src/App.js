import './App.css';
import { ResponsiveAppBar } from './components/Navbar/Navbar'
import { Principal } from './sections/Principal';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { ThemeProvider, StyledEngineProvider, createTheme, adaptV4Theme } from '@mui/material/styles';
import { WhatsappButton } from './components/WhatsappButton/WhatsappButton';

export const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#00A8FF",
      dark: "#001043",
    },
    secondary: {
      main: "#63C132",
    },
  }
}))

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <WhatsappButton />
        <Principal />
        <Services />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
