import Navbar from "./ui/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Top } from "./ui/top-button/Top";

import Router from "./routers";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
      <Top />
    </>
  );
}

export default App;
