import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { PATH } from "./constant/approuter";
import DemoApi from "./components/DemoApi";


function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path={PATH.INDEX} element={<HomePage />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.PRODUCTS} element={<Products />} />
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.TODO} element={<ToDoList />} />
        <Route path={PATH.API} element={<DemoApi />} />
        <Route path={PATH.FORM} element={<Form />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
