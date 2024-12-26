import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Admin/Components/Admin";
import Dashboard from "./Admin/Components/Dashboard";
import DailyAccount from "./Admin/Components/DailyAccount";
import Navbar from "./components/Header/Navbar";
import Appointments from "./Admin/Components/Appointments";
import Login from "./Admin/admin_login/Login";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const authContextValue: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dailyaccount" element={<DailyAccount />} />
            <Route path="appointment" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
