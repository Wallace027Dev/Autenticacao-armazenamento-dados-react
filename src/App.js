import { AuthProvider } from "./context/authContext";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  );
}

export default App;
