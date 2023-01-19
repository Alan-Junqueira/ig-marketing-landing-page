import { ThemeProvider } from 'styled-components';
import { Community } from './components/Community';
import { Countdown } from './components/Countdown';
import { Feature } from './components/Feature';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Feature />
      <Community />
      <Services />
      <Countdown />
    </ThemeProvider>
  );
}

export default App;
