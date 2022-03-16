import { Container } from "./Components/Styled/Container.styled";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/Styled/Global";
import content from "./content";
import Card from "./Components/Card";
import Footer from "./Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "white",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
