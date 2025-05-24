import { Routes ,Route  } from "react-router-dom";
import { getCurrentUser } from "./utils/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddProduct from "./pages/AddProduct";
import MyListings from "./pages/MyListings";
import { Navigate } from "react-router-dom";


console.log("Current User " , getCurrentUser())

const PrivateRoute = ({children})=>{
  return getCurrentUser() ? children : <Navigate to ="/"></Navigate>
}

const PublicRoute = ({ children }) => {
  return getCurrentUser() ? <Navigate to="/home" /> : children;
};

function App() {

  return (
    <>
    
      <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
      <Route path="/home" element={<PrivateRoute> <Home/></PrivateRoute>} ></Route>
      <Route path="/addproduct" element={<PrivateRoute><AddProduct/></PrivateRoute>}></Route>
      <Route path="/mylistings" element={<PrivateRoute><MyListings/> </PrivateRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
