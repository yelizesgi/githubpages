import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import AppRouters from "./routers/AppRouter";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2e7d32",
      },
      secondary: {
        main: "#d32f2f",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouters />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
