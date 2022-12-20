import Header from "./components/Header";

import Footer from "./components/Footer";
import Products from "./components/Products";


function App() {
  return (
    <div className="main">
      <Header />
      <main>
        <h1>My Project</h1>
        <div className="content">
          <Products name="Shoes" price="10$" type="green" images="https://media.istockphoto.com/id/1341840659/photo/defocused-photo-of-police-car-lights-in-night-city-with-selective-focus-and-bokeh.jpg?b=1&s=170667a&w=0&k=20&c=bMyrFz2WOkjHx-86mDElvLmC2FSldPTiO52oHzTwTPE=" />
          <Products name="Phone" price="7$" type="red" images="https://media.istockphoto.com/id/559537031/photo/lens-flash-of-paparazzi-photographers-cameras.jpg?b=1&s=170667a&w=0&k=20&c=XozHRUg50PRcnP96qM3OK8RFZNNSsgG3G78tIjf8bXI=" />
          <Products type="#b71d1d" images="https://media.istockphoto.com/id/540210644/photo/emergency-vehicle.jpg?b=1&s=170667a&w=0&k=20&c=FHJxSZ5zCLbxbNjGiia0k51HUeRWseM-Guu-re_JF2g=" />
          <Products type="#dddddd" images="https://media.istockphoto.com/id/1317396440/photo/emergency-rotating-alarm-red-light-at-night.jpg?b=1&s=170667a&w=0&k=20&c=BxjjRMbGd_GDOMZconnkwx1l2ElckyYjESITNL_q2Gs=" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
