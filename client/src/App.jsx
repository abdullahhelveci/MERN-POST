import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";

const App = () => {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);
  const username = token?.user?.username;
  return (
    <>
      <BrowserRouter>
        {token?.token && <Navbar username={username} />}
        {modal && <Modal />}
        <Routes>
          <Route
            path="/"
            element={!token?.token ? <Link to={"/auth"} /> : <Home />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
