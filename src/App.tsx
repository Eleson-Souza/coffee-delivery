import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingCartProvider>

      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
