import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext";
import AuthContextProvider from "./context/AuthContext";

import AllRoutes from "./routes/AllRoutes.routes";

const App = () => {

  return (
    <AuthContextProvider>
      <GlobalContextProvider>
        <BrowserRouter>
          <AllRoutes/>
        </BrowserRouter>
      </GlobalContextProvider>
    </AuthContextProvider>
  )
}

export default App;
