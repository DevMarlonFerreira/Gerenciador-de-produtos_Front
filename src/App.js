import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./styles/Themeprovider";
import GlobalStyle from "./styles/GlobalStyle";
import Routes from "./routes/index";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
