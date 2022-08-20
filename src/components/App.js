import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
