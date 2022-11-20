import { AuthProvider } from "./context/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProfile } from "./pages/UserProfile";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassowrd";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<UserProfile />}></Route>
          <Route path="/update-profile" element={<UpdateProfile />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="*"
            element={
              <div>
                <h1>Not found!</h1>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
