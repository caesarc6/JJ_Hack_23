import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import { Outlet } from "react-router-dom";
import Intro from "./components/Intro";
import Form from "./components/Form";

const Layout = () => {
  return (
    <>
      {/* <Link to="/LearnMore"> Learn More</Link>
      <Link to="/Resources"> Resources</Link>
      <Link to="/Solutions"> Solutions</Link> */}
      <DrawerAppBar />
      <Intro />
      <Form />
      <Outlet />
    </>
  );
};

export default Layout;
