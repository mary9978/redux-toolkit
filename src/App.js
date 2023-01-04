import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <Router>
    <SnackbarProvider
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <h1 className="text-3xl font-bold underline">hi</h1>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    {/* <Product/> */}
    </SnackbarProvider>
    </Router>

  );
}

export default App;
