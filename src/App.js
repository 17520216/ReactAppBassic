import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import ToDoList from "./components/ToDoList";
import { PATH } from "./constant/approuter";
import DemoApi from "./components/DemoApi";


function App() {
  return (
    <div className="main">
      <Header />
      <div className="bg-red-400">React JS web</div>
      <Routes>
        <Route path={PATH.INDEX} element={<HomePage />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.PRODUCTS} element={<Products />} />
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.TODO} element={<ToDoList />} />
        <Route path={PATH.API} element={<DemoApi />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
