import { ThemeProvider } from 'styled-components';
import { Community } from './components/Community';
import { Countdown } from './components/Countdown';
import { Feature } from './components/Feature';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/partials/Footer';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Testimonial } from './components/Testimonial';
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
      <Solutions />
      <Testimonial />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
